import React ,{useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdFavorite,MdHelp,MdDelete} from 'react-icons/md'
// import {RiDeleteBinLine} from 'react-icons/ri'
import {GrFormAdd,GrSubtract} from 'react-icons/gr'
import { Scrollbars } from 'react-custom-scrollbars-2';





const Navbar = () => {

    const [nav,setNav]=useState(false);
    const[cart,setCart]=useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left Side */}
        <div className='flex items-center'>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
            </h1> 
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

    {/* search Input */}

    <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] '>
        <AiOutlineSearch size={20}/>
        <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search Foods'/>
    </div>

    {/* Cart Button */}

    <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full' onClick={()=>setCart(!cart)}>
        <BsFillCartFill size={20} className="mr-2 "/> Cart
    </button>

    {/* Mobile Menu */}
    {/* Overlay for nav*/}

    {nav?<div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>:''}

    {/* OverLay for Cart */}
    {cart?<div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>:''}


    {/* Side Drawer menu */}

    <div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose size={30} className="absolute right-4 top-4 cursor-pointer" onClick={()=>setNav(!nav)}/>
        <h2 className='text-2xl p-4'>
            Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className="mr-4"/>Orders</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className="mr-4"/>Favorites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className="mr-4"/>Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className="mr-4"/>Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className="mr-4"/>Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className="mr-4"/>Best One</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className="mr-4"/>Invite Friends</li>
            </ul>
        </nav>
    </div>

    {/* Side drawer Cart */}

    <div className={cart?'fixed top-0 right-0 w-[500px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[500px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose size={30} className="absolute right-4 top-4 cursor-pointer" onClick={()=>setCart(!cart)}/>
        <h2 className='text-2xl p-6 border-b-2'>
            Your <span className='text-orange-600 font-bold'>Cart</span>
        </h2>
        <div className='relative m-2'>
            <p className='absolute pl-2 rounded-lg right-0 w-[60px] italic text-sm'>3 items</p>
        </div>
        

    {/* Cart Section */}

        <div className=" flex flex-col mt-12 mx-8 relative">
        <Scrollbars style={{ height: 400 }}>
            <div className='flex items-center justify-between shadow-lg rounded-xl p-2 my-2 w-full'>
                <div className='hover:scale-105'>
                    <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='h-14 rounded-lg shadow-lg' />
                </div>
                <div className=''>
                    <p className='italic font-semibold text-xl'>Cheese Burger</p>
                    <p className='text-lg font-bold text-orange-500'>₹ 150/-</p>
                </div>

                <div className='h-full flex flex-col items-center'>
                    <GrFormAdd className='my-1 border-2'/>
                    <input type="text" className='w-10 rounded-md px-4' placeholder='1' />
                    <GrSubtract  className="my-1 border-2"/>
                </div>
                {/* <RiDeleteBinLine size={20} className="my-1"/> */}
            </div>

            <div className='flex  items-center justify-between shadow-lg rounded-xl p-2 my-2 w-full'>
                <div className='hover:scale-105'>
                    <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" className='h-14 w-24 rounded-lg shadow-lg' />
                </div>
                <div className=''>
                    <p className='italic font-semibold text-xl'>Chicken Pizza</p>
                    <p className='text-lg font-bold text-orange-500'>₹ 150/-</p>
                </div>

                <div className='h-full flex flex-col items-center'>
                    <GrFormAdd className='my-1 border-2'/>
                    <input type="text" className='w-10 rounded-md px-4' placeholder='1' />
                    <GrSubtract  className="my-1 border-2"/>
                </div>
                {/* <RiDeleteBinLine size={20} className="my-1"/> */}
            </div>

            <div className='flex items-center justify-between shadow-lg rounded-xl p-2 my-2 w-full'>
                <div className='hover:scale-105'>
                    <img src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className='h-14 w-24 rounded-lg shadow-lg' />
                </div>
                <div className=''>
                    <p className='italic font-semibold text-xl'>Chocolate Desserts</p>
                    <p className='text-lg font-bold text-orange-500'>₹ 150/-</p>
                </div>

                <div className='h-full flex flex-col items-center'>
                    <GrFormAdd className='my-1 border-2'/>
                    <input type="text" className='w-10 rounded-md px-4' placeholder='1' />
                    <GrSubtract  className="my-1 border-2"/>
                </div>
                {/* <RiDeleteBinLine size={20} className="my-1"/> */}
            </div>
            </Scrollbars>
        </div>

        {/* Checkout section */}
        
       <div className=' absolute w-full bottom-2 border-t-2 rounded-t-xl shadow-xl mx-2'>
       
        <h1 className='text-black/80 font-bold my-2 mx-4 '>Your Order</h1>
            <div className='flex flex-row justify-between mx-10 py-1  border-dashed border-b-2 border-gray-600'>
                <h1 className='font-bold'>Total price</h1>
                <h1 className='italic text-sm'>450.00</h1>
            </div>
            <div className='flex flex-row justify-between mx-10 py-1 border-dashed border-b-2 border-gray-600'>
                <h1 className='font-bold'>Discount price</h1>
                <h1 className='italic text-sm text-red-500'>- 200.00</h1>
            </div>
            <div className='flex flex-row justify-between mx-10 py-1 border-dashed border-b-2 border-gray-600'>
                <h1 className='font-bold'>Shipping Charge</h1>
                <h1 className='italic text-sm text-green-500'>+ 100.00</h1>
            </div>
            <div className='flex flex-row justify-between mx-10 py-1 '>
                <h1 className='font-bold'>Final Amount</h1>
                <h1 className='italic text-sm font-bold'>350.00</h1>
            </div>
            <div className='mx-8'>
                <button className='bg-orange-500 shadow-lg text-white font-bold border-orange-500 w-full mt-2'>Checkout</button>
            </div>
        
       </div>


    </div>
    

    </div>
  );
};

export default Navbar;
