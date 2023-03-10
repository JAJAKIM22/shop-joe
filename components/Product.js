import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
import Currency from "react-currency-formatter"
import { useState } from "react"
import {useDispatch} from "react-redux"
import { addToBasket } from "@/slices/basketSlice"

function Product({id, title, price, description, category, image}) {
   const dispatch = useDispatch()

  const addItemToBasket = () => {
   const product = {
    id, title, price, description, category, image
  }
  dispatch(addToBasket(product))
  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">

      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
      <Image src={image} height={200} width={200}  style={{objectFit:'contain'}} alt='new'/>
      <h4>{title}</h4>
      <div>
      <StarIcon className="h-4 text-yellow-500"/>
      </div>
      <p className="text-sm my-2 line-clamp-2">{description}</p>
      <div>
       <Currency quantity={price} currency='USD' />
      </div>
      <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
    </div>
  )
}

export default Product
