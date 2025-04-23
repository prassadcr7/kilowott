import axios from 'axios'

const apiCall = axios.create({
    baseURL:'https://dummyjson.com'
})

export const getData = async () => {
    try{
        const response = await apiCall.get('/products')
        console.log(response)
    }catch(error){
        console.log(error)
    }
}