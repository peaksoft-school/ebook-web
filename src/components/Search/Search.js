import classes from './Search.module.css'
import SearchIcon from '../Search-icon/SearchIcon'
import SearchList from '../SearchList/SearchList'
import useHttp from '../../hooks/use-http'
import {useState} from 'react'
const Search =()=> {
    const [color,setColor] = useState(false)
    const [searchValue,setSearchValue] = useState('')
    const [filteredData,setFilteredData] = useState()
    const config = {
        url:"https://jsonplaceholder.typicode.com/users"
    }
    const list = useHttp(config)
    function changeClickValue() {
        if(searchValue === '') {
            setColor(!color)
        }
    }
    function changeColorInput(event) {
        setSearchValue(event.target.value)
        if(event.target.value === '') {
            setColor(false)
            setFilteredData([])
        } else if(event.target.value) {
            setColor(true)
            const filterData = list.response.filter(item => item.name.includes(event.target.value))
            setFilteredData(filterData)
        }

    }
    function ColorInput() {
        if(color) {
            return classes.formSearchActive
        }else {
            return classes.formSearch
        }
    }
    return <div className={classes.box}>
            <div>
                <form onClick={changeClickValue} action="#" className={ColorInput()}>
                    <input onChange={changeColorInput} placeholder={color? '' : 'Искать жанр, книги, авторов, издательства... '} className={classes.input} type="text"/>
                    <SearchIcon onColor={color}/>
                </form>
        </div> 
        <SearchList filteredData={filteredData}/>
    </div>

}
export default Search