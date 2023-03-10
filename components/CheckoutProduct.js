import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "@/slices/basketSlice"
function CheckoutProduct({id, title, price,description, category, image}) {
    const dispatch = useDispatch()
    const product = {id, title, price,description, category, image}

    const addItemToBasket = () => {
        //push item to REDUX
    dispatch(addToBasket(product))

    }
    const removeItemFromBasket = () => {
        //remove from REDUX
     dispatch(removeFromBasket({id}))
    }
   
  return (
    <div className="grid grid-cols-5">
        <Image
        src={image}
        height={200}
        alt="old"
        width={200}
        style={{objectFit: "contain"}}
        />
      {/* middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
        <StarIcon className="h-4 text-yellow-500"/>
        </div>
        <p className="my-2 text-sm line-clamp-3 ">{description}</p>
        <Currency quantity={price} currency="USD" />
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
      <button onClick={addItemToBasket}  className="button">Add to Basket </button>
      <button onClick={removeItemFromBasket}  className="button">Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
