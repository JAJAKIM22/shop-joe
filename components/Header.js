import Image from "next/image"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { selectItems } from "@/slices/basketSlice"

function Header() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const items = useSelector(selectItems)

  return (
    <header>
        {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
      <Image 
           onClick={() => router.push('/')}
            src='https://cdn6.f-cdn.com/contestentries/1868017/50418052/5fe9671aa158d_thumb900.jpg'
            width={100}
            height={30}
            style={{objectFit:'contain'}}
            className='cursor-pointer'
            alt="new"
            />
        </div>
        <div className='hidden ml-2 sm:flex items-center h-10 rounded-md flex-grow  cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
            <input className=' p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4'type='text' />
            <SearchIcon className="p-4 h-12"/>
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
         <div onClick={!session ? signIn : signOut} className=' cursor-pointer link'>
          <p>{session ? `Hello ${session.user.name}` : "signin"} </p>
          <p className='font-extrabold md:text-sm'>Account & List</p>
         </div>

         <div onClick={() => router.push('/orders')} className='cursor-pointer link'>
         <p>Returns</p>
         <p className='font-extrabold md:text-sm'>Orders</p>
         </div>

         <div onClick={() => router.push('/checkout')}  className='relative link flex items-center'>
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {items.length}
            </span>
         <ShoppingCartIcon className='h-8'/>
         <p className='font-extrabold md:text-sm hidden md:inline mt-2'>Basket</p>
         </div>
        </div>
      </div>

      {/* bottom nav */}
      {/* <div className='flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-2'>
      <p className='link flex items-center'>
        <MenuIcon className="h-6 mr-1"/>
    </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div> */}
    </header>
  )
}

export default Header
