import { publicRequest, userRequest } from "../requestMethod"
import { getProductFailed, getProductStart, getProductSuccess , deleteProductFailed, deleteProductStart, deleteProductSuccess,updateProductFailed, updateProductStart, updateProductSuccess,
addProductFailed, addProductStart, addProductSuccess} from "./productRedux";
import { loginFailed, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch,user)=>{
    dispatch(loginStart())
    try{
        const response = await publicRequest.post('/auth/login',user);
        dispatch(loginSuccess(response.data))
    }catch(e){
        dispatch(loginFailed())
    }
}

export const getProducts = async (dispatch)=>{
    dispatch(getProductStart())
    try{
        const response = await publicRequest.get('/products/');
        dispatch(getProductSuccess(response.data))
    }catch(e){
        dispatch(getProductFailed())
    }
}

export const deleteProducts = async (dispatch,id,tokenUser)=>{
    dispatch(deleteProductStart())
    try{
        dispatch(deleteProductSuccess(id))
    }catch(e){
        dispatch(deleteProductFailed())
    }
}


export const updateProducts = async (dispatch,product,id,tokenUser)=>{
    dispatch(updateProductStart())
    try{
        dispatch(updateProductSuccess({id,product}))
    }catch(e){
        dispatch(updateProductFailed())
    }
}

export const addProducts = async (dispatch,product,tokenUser)=>{
    dispatch(addProductStart())
    try{
        const res = await userRequest(tokenUser).post('/products',product)
        dispatch(addProductSuccess(res.data))
    }catch(e){
        dispatch(addProductFailed())
    }
}