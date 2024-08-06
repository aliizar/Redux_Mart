import React from 'react'
import { useDispatch } from 'react-redux';
import MyApiData from './AllItemsArray'
import { addtocart } from '../Reducers/AllGrocery';
import { Add } from '@mui/icons-material';
import toast from 'react-hot-toast';
const Cars = () => {
  const dispatch = useDispatch()

  const SendData = (item) => {
    dispatch(addtocart(item));
    toast.success("Item Added to cart")
  }
  
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className='text-white text-3xl font-serif ml-6 mb-3'> <p>Buy <span className='text-yellow-300'>Cars</span> From Here:</p></div>
        <div className="p-4 border-2 grid grid-cols-3 space-x-2  border-gray-200 border-dashed rounded-lg dark:border-gray-700">

        {MyApiData.Cars.map((item) => {
            return (
              <div className='mt-2' key={item.id}>
                <>
                  <div className="max-w-sm bg-slate-700 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="max-w-sm bg-slate-700 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <img className="rounded-t-lg h-40 w-full object-cover" src={item.Img} alt="" />
                      <div className="p-5">
                        <a href="/" className='flex justify-between items-center mb-2'>
                          <h5 className="text-gray-200 font-serif text-lg font-semibold dark:text-white">{item.Name}</h5>
                          <p className='text-yellow-400 font-semibold dark:text-white'>{item.price}<span className='text-green-400'>$</span></p>
                        </a>
                        <div className='flex bg-gray-200 rounded h-12 items-center justify-between p-2'>
                          <p 
                            className="py-72 cursor-pointer text-green-800 font-serif  font-bold bg-center px-4 rounded-full shadow-md"
                          >
                            Add to Cart 
                          </p>
                          <button   onClick={() => SendData(item)} className='font-bold' ><Add style={{fontSize : '30px'}}/></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            )
          })}



        </div>
      </div>

    </>
  )
}

export default Cars

