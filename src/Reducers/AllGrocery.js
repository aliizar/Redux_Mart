import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    carts : [
        
    ]
}

const AllGrocerySlice = createSlice({
    name : 'AllGrocery',
    initialState,
    reducers: {
        addtocart : (state , action)=>{
            const ItemIndex = state.carts.findIndex((item)=> item.id === action.payload.id);
            if(ItemIndex >= 0){
                state.carts[ItemIndex].quantity += 1;

            }else {
                const temp ={...action.payload , quantity: 1}
                state.carts = [...state.carts,temp]
            }
        },
        removetocart : (state, action)=>{
            const Data = state.carts.filter((ele)=> ele.id !== action.payload)
            state.carts = Data
        },
        HandleSingleRemoveitem : (state , action )=>{
            const ItemIndex_dec = state.carts.findIndex((item)=> item.id === action.payload);
            if(state.carts[ItemIndex_dec].quantity >= 1){
                state.carts[ItemIndex_dec].quantity -= 1;
            }
        }
    }
})


export default AllGrocerySlice.reducer
export const {addtocart , removetocart , HandleSingleRemoveitem} = AllGrocerySlice.actions