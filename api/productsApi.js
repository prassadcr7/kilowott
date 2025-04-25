
import axios from 'axios'

const apiCall = axios.create({
    baseURL:'https://dummyjson.com/products'
})

export const getData = async () => {
    try{
        const response = await apiCall.get('/');
        return {success:true,data:response.data.products};
    }catch(error){
        return {success:false,message:error.message};
    }
}

export const getSingleProduct = async (id) => {
    try{
        const response = await apiCall.get(`/${id}`);
        return {success:true,data:response.data};
    }catch(error){
        return {success:false,message:error.message};
    }
}