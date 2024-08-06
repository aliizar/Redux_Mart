import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  removetocart,
  addtocart,
  HandleSingleRemoveitem,
} from "../Reducers/AllGrocery";
import toast from "react-hot-toast";
const About = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.AllGrocery);
  const [total, setTotal] = useState(0);

  const handleDelete = (id) => {
    dispatch(removetocart(id));
    toast.success("Item Deleted");
  };

  const handleIncrement = (id) => {
    dispatch(addtocart(id));
    toast.success("Item Added ");
  };
  const HandleSingleRemove = (id) => {
    dispatch(HandleSingleRemoveitem(id));
    toast.success("Item Removed");
  };

  const Total = () => {
    let total = 0;
    carts.map((ele) => {
      total = ele.price * ele.quantity + total;
    });
    setTotal(total);
  };
  useEffect(() => {
    Total();
  }, [Total]);

  return (
    <div className="flex bg-slate-900 border-2 border-white mt-2">
      <div className="flex-grow p-8  bg-slate-900">
        <h1 className="text-4xl border-b-2 border-white w-[33rem] pb-2 font-serif font-semibold text-white mb-6">
          Cart Items <span className="text-yellow-500"> And Summary :- </span>
        </h1>
        <p className="text-4xl border-b-2 border-white text-white font-serif font-semibold w-[26rem] pl-4  relative left-[53rem] bottom-16">
          Total Price : <span className="text-yellow-400">{total} $</span>
        </p>
        {carts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full border-collapse border border-yellow-400-200">
              <thead>
                <tr className="bg-slate-900">
                  <th className="text-white px-4 py-2 border-white border-2">
                    Items
                  </th>
                  <th className="text-white px-4 py-2 border-white border-2">
                    Name
                  </th>
                  <th className="text-white px-4 py-2 border-white border-2">
                    Quantity
                  </th>
                  <th className="text-white px-4 py-2 border-white border-2">
                    Price
                  </th>
                  <th className="text-white px-4 py-2 border-white border-2">
                    Remove
                  </th>
                  <th className="text-white px-4 py-2 border-white border-2">
                    Total Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {carts.map((data, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-slate-700" : "bg-slate-600"
                    }
                  >
                    <td className="border-white border-2 px-4 py-2">
                      <img src={data.Img} alt="Item" className="w-12 h-12 " />
                    </td>
                    <td className="border-white text-green-400 border-2 px-4 py-2">
                      {data.Name}
                    </td>
                    <td className="border-white text-white border-2 px-4 py-2">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleIncrement(data)}
                          className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.293 14.293a1 1 0 0 1-1.414-1.414L10.586 10 7.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          className="text-yellow-600 bg-slate-600 font-bold font-serif px-2 py-1  border border-gray-400 rounded-xl  w-16 text-center"
                          value={data.quantity}
                          readOnly
                        />
                        <button
                          onClick={
                            data.quantity <= 1
                              ? () => handleDelete(data.id)
                              : () => HandleSingleRemove(data.id)
                          }
                          className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.293 5.293a1 1 0 0 1 1.414 1.414L10.414 10l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 0 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="border-white text-white border-2 px-4 py-2">
                      {data.price}
                      <span className="text-green-500">$</span>
                    </td>
                    <td className="border-white text-red-800 border-2 px-4 py-2">
                      <button onClick={() => handleDelete(data.id)}>
                        <DeleteOutlineIcon
                          style={{
                            color: "yellow",
                            fontSize: "30px",
                            cursor: "pointer",
                            position: "relative",
                            left: "56px",
                          }}
                        />
                      </button>
                    </td>
                    <td className="border-white text-white border-2 px-2 py-2 overflow-hidden">
                      {data.quantity * data.price}
                      <span className="text-green-400">$</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-white text-xl">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default About;
