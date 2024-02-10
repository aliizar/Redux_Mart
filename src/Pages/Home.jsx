import React from 'react'
import Pic2 from './Assests/images.jpg'
import pic1 from './Assests/images (1).jpg'
import { NavLink, Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <>

      <header className="fixed border-b-2 border-white shadow-md flex justify-center items-center    left-72">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-semibold text-yellow-500 font-serif">Ecommerce <span className='text-white'>Store :-</span></h1>
        </div>
      </header>

      <main>
        <div className='fixed left-72 top-48'>
          <p className='text-white '>
            E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. It encompasses a wide range of online transactions, including retail, wholesale,
            <br /> digital products, services, and more. E-commerce has revolutionized the way businesses operate and how consumers shop.</p>

          <a target='_blank' className="text-yellow-400 border-b-2 border-white relative top-6 underline-offset-8 hover:border-none  hover:text-gray-500" href="https://www.amazon.com/">Visit World Best Ecommerce Store :-</a>


          <NavLink to='All-Grocery'><button className="text-white relative left-[30rem] top-7 border-2 border-yellow-300 rounded-2xl px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-800 transition duration-300 ease-in-out transform hover:scale-110">
            Get Started With My Store
          </button>
          </NavLink>
          <div className='flex space-x-16 relative top-11'>
            <img src={Pic2} alt="" className='h-full w-96 rounded-2xl relative top-12 left-16' />
            <img src={pic1} alt="" className='h-48 w-96 rounded-2xl relative top-12 left-16' />
          </div>

        </div>


      </main>

    </>
  )
}

export default Home
