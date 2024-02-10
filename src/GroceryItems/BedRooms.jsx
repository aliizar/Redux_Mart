import React, { useState } from 'react'

import MyApiData from './AllItemsArray'
const BedRooms = () => {
  const [BedRoomData, setBedRoomData] = useState(MyApiData.BedRooms)
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className='text-white text-3xl font-serif ml-6 mb-3'> <p>Buy <span className='text-yellow-300'>Bed Rooms</span> From Here:</p></div>
        <div className="p-4 border-2 grid grid-cols-3 space-x-2  border-gray-200 border-dashed rounded-lg dark:border-gray-700">

          {BedRoomData.map((item) => {
            return (
              <>
                <div className='mt-2' key={item.id}>
                  <div className="max-w-sm bg-slate-500 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="max-w-sm bg-slate-500 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                     
                        <img className="rounded-t-lg h-40 w-full object-cover" src='' alt="" />
                      
                      <div className="p-5">
                        <a href="/" className='flex justify-between items-center mb-2'>
                          <h5 className="text-white text-lg font-semibold dark:text-white">{item.Name}</h5>
                          <p className='text-yellow-400 font-semibold dark:text-white'>{item.price}</p>
                        </a>
                        <div className='flex bg-gray-200 rounded h-12 items-center justify-between'>
                          <button className='text-gray-700 font-bold text-xl px-3 focus:outline-none'>
                            ➖
                          </button>
                          <p className='text-gray-700 font-semibold text-lg'>
                            Add to Cart: {item.quantity}
                          </p>
                          <button className='text-gray-700 font-bold text-xl px-3 focus:outline-none'>
                            ➕
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            )
          })}


        </div>
      </div>

    </>
  )
}

export default BedRooms
