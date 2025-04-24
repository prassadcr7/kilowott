'use client';
import { useEffect,useState,useCallback,useRef } from "react"
// import {getData} from '../../api/axios'
import {LoadingDiv} from '../../components/styled/styled-components'
import Search from "./Search"
import Listing from "../listing/Listing"
import styles from '../listing/listing.module.css'
const Home = () => {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [dataArr,setDataArr] = useState([])
    const [displayArr,setdisplayArr] = useState([])
    const [search,setSearch] = useState('')
    const [visibleCount, setVisibleCount] = useState(1);
    const observer = useRef();
    const lastItemRef = useCallback(node => {
      if (observer.current) observer.current.disconnect();
    
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setVisibleCount(prev => prev + 1); 
        }
      });
    
      if (node) observer.current.observe(node);
    }, []);

    const fetchData = async () => {
        try{ 
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json()
            if(data.products.length){
                setDataArr(data.products)
                setdisplayArr(data.products)
                setLoading(false)
            }
        }catch(error){
            setError(error)
            console.log(error)
        }
    }
    useEffect(()=> {
      if(dataArr.length){
        if(search == ''){
            console.log('empty')
            setdisplayArr(dataArr)
        }
        if(search){
            const searchResults = dataArr.filter((element,index) => (element.title.toLowerCase()).includes(search.toLowerCase()))
            setdisplayArr(searchResults) 
            console.log(searchResults)
        }else{
            console.log(displayArr)
             
        }
      }else{
        fetchData()
      }
    },[search])

    if(loading){
        return(
            <LoadingDiv>Loading...Please Wait!!</LoadingDiv>
        )
    }
    if(error){
        return(
            <div>{error}</div>
        )
    }
    return(
        <>
        <Search search={search} setSearch={setSearch}/>
        <Listing data={displayArr} visibleCount={visibleCount} lastItemRef={lastItemRef}/>
        </>
    )
}

export default Home