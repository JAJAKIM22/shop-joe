const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
export default async (req, res) => {

  const {items, email} = req.body
//   console.log(items)
//   console.log(email)
const transformedItems = items && items.map((item) => ({
    price_data: {
        currency: 'usd',
        unit_amount_decimal: item.price * 100,
        product_data: {
            name: item.title,
            images: [item.image],
            description: item.description, 
        },
    },
    quantity: 1,
}));
const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
        allowed_countries: ['GB' , 'US', 'CA'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout` ,
    metadata: {
        email,
        images: JSON.stringify(items && items.map(item => item.image))
    }
})
res.status(200).json({id: session.id})

}