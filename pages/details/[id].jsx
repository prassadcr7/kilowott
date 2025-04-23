import { useEffect, useState } from "react";
import Listing from "../../components/listing/Listing"
import {useRouter} from 'next/router'
import { LoadingDiv } from "../../components/styled/styled-components";
const SingleProduct = () => {
    const router = useRouter();
    const {id} = router.query;
    const [dataArr,setDataArr] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    const fetchData = async () => {
        try{ 
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            if(data){
                setDataArr([data])
                setLoading(false)
            }
        }catch(error){
            setError(error)
            console.log(error)
        }
    }
    useEffect(()=> {
        if(id){
            fetchData()
        }
    },[id])
    if(error){
        return(
            <div>{error}</div>
        )
    }
    if(loading){
        return(
            <LoadingDiv>Loading......Please Wait!!</LoadingDiv>
        )
    }
    if(dataArr.length){
        return(
            <Listing data={dataArr} page='details'/>
        )
    }
}

export default SingleProduct