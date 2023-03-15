import Header from "@/components/Header"
import { CheckCircleIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"

function Success() {
    const router = useRouter()
  return (
    <div className="bg-gray-100 h-screen">
        <Header /> 
        <main className="max-w-screen-lg mx-auto">
         <div className="flex flex-col p-10 bg-white ">
            <div className="flex items-center space-x-2 mb-5">
                <CheckCircleIcon className="h-10 text-green-500" />
                <h1 className="text-3xl ">Thank you, your order has been Confirmed!</h1>
            </div>
            <p className=''>
                Thank you for shopping with us.
                 We wiil send a confirmation that item has been shipped.
            </p>
            <button onClick={() => router.push('/orders')} className="button mt-8">Go to my Orders</button>
         </div>
        </main>
      
    </div>
  )
}

export default Success
