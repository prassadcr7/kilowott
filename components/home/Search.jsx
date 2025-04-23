import {SearchInput,SearchDiv} from '../styled/styled-components'
const Search = ({Search,setSearch}) => {
    const getSearch = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    return(
        <SearchDiv>
            <SearchInput type="text" onChange={()=>setSearch(event.target.value)} value={Search}/>
        </SearchDiv>
    )
}

export default Search