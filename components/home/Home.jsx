import { useEffect,useState,useCallback,useRef } from "react"
import {getData} from '../../api/productsApi'
import {LoadingDiv} from '../../components/styled/styled-components'
import Search from "./Search"
import Listing from "../listing/Listing"

const Home = () => {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [dataArr,setDataArr] = useState([])
    const [displayArr,setdisplayArr] = useState([])
    const [search,setSearch] = useState('')
    const [visibleCount, setVisibleCount] = useState(1);
    const observer = useRef();
    
    const lastItemRef = useCallback(node => {
      if(observer.current) observer.current.disconnect();
    
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setVisibleCount(prev => prev + 1); 
        }
      });
    
      if(node) observer.current.observe(node);
    }, []);

    const fetchData = async () => {
        try{ 
            const response = await getData();
            if(response.success){
                if(response.data?.length){
                    setLoading(false)
                    setDataArr(response.data)
                    setdisplayArr(response.data)
                }
            }else{
                setLoading(false)
                setError(response.message)
            }
        }catch(error){
            setError(error)
        }
    }
    useEffect(()=> {
        if(dataArr.length){
            if(search == ''){
                setdisplayArr(dataArr)
            }
            if(search){
                const searchResults = dataArr.filter((element,index) => (element.title.toLowerCase()).includes(search.toLowerCase()))
                setdisplayArr(searchResults) 
                console.log(searchResults)
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