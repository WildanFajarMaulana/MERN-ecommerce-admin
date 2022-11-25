import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        isFetching:false,
        error:false
    },
    reducers:{
       // get all data
       getProductStart:(state)=>{
        state.isFetching = true
        state.error = false
       },
       getProductSuccess:(state,action)=>{
        state.isFetching=false;
        state.products = action.payload;
       },
       getProductFailed:(state)=>{
        state.isFetching = false;
        state.error = true;
       },

       //delete
       deleteProductStart:(state)=>{
        state.isFetching = true
        state.error = false
       },
       deleteProductSuccess:(state,action)=>{
        state.isFetching=false;
        // state.products.splice(
        //     state.products.findIndex(item=>item._id === action.payload),1
        // )
        state.products = state.products.filter(data=>data._id !== action.payload)
       },
       deleteProductFailed:(state)=>{
        state.isFetching = false;
        state.error = true;
       },

       //UPDATE
       updateProductStart:(state)=>{
        state.isFetching = true
        state.error = false
       },
       updateProductSuccess:(state,action)=>{
        state.isFetching=false;
        state.products[state.products.findIndex(item=>item._id === action.payload.id)]=action.payload.user
       },
       updateProductFailed:(state)=>{
        state.isFetching = false;
        state.error = true;
       },

       //add
       addProductStart:(state)=>{
        state.isFetching = true
        state.error = false
       },
       addProductSuccess:(state,action)=>{
        state.isFetching=false;
        state.products.push(action.payload)
       },
       addProductFailed:(state)=>{
        state.isFetching = false;
        state.error = true;
       }
    }
})

export const {getProductStart,getProductSuccess,getProductFailed,deleteProductStart,deleteProductSuccess,deleteProductFailed,updateProductStart,updateProductSuccess,updateProductFailed,
addProductStart,addProductSuccess,addProductFailed} = productSlice.actions;

export default productSlice.reducer;