import {buffer} from 'micro'
import * as admin from 'firebase-admin'

//connection to firebase
const serviceAccount = require("../../serviceAccountKey.json") 
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
}) : admin.app()


//connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fullfillOrder = async (session) => {
// console.log('fulfilling order', session)
return app
.firestore()
.collection('users')
.doc(session.metadata.email)
.collection("orders").doc(session.id).set({
    amount: session.amount_total / 100,
    images: JSON.parse(session.metadata.images),
    timestamp: admin.firestore.FieldValue.serverTimestamp()
})
.then(() => {
    console.log(`SUCCESS: ORDER ${session.id} has been added to DB`)
})
}

export default async (req, res) => {
  console.log(req.headers);

    if (req.method === 'POST') {
      const requestBuffer = await buffer(req)  
      const payload = requestBuffer.toString()
      const sig = req.headers['stripe-signature']

      let event

      //verify event posted came from stripe
      try {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
      } catch (err){
        console.log("ERROR", err.message)
        return res.status(400).send(`Webhook error: ${err.message}`)
      }
      
   
      //handle the checkout.session completed event
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object 

      // fulfill the order
      return fullfillOrder(session).then(() => res.status(200))
      .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`))
      }
    }
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}