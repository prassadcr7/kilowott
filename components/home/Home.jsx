'use client';
import { useEffect,useState } from "react"
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




    useEffect(() => {
        var listItems
        setTimeout(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add(styles['lazy-load-visible'])
                    observer.unobserve(entry.target);
                  }
                });
              }, {
                rootMargin: '0px 0px 100px 0px',
                threshold: 0.1
              });

             listItems = document.querySelectorAll(`.${styles['lazy-load']}`);
             listItems.forEach(item => observer.observe(item))
          }, 1000);
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
        <Listing data={displayArr}/>
        </>
    )
}

export default Home