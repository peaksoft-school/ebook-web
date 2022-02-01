import classes from './Search.module.css'
import SearchIcon from './Search-icon/SearchIcon'
import SearchList from './SearchList/SearchList'
import useHttp from '../../../hooks/use-http'
import {useState} from 'react'
const Search =()=> {
    const [isFocused,setFocused] = useState(false)
    const [searchValue,setSearchValue] = useState('')
    const [filteredData,setFilteredData] = useState()

    const config = {
        url:"https://jsonplaceholder.typicode.com/users"
    }

    const list = useHttp(config)

    function changeColorInput(event) {
        setSearchValue(event.target.value)
        if(event.target.value === '') {
            setFilteredData([])
        } else if(event.target.value) {
            const filterData = list.response.filter(item => item.name.includes(event.target.value))
            setFilteredData(filterData)
        }
    }

    function сolorInput() {
        if(isFocused) {
            return classes.formSearchActive
        }else {
            return classes.formSearch
        }
    }

    const focusHandler = () => {
        setFocused(true)
    }

    const blurHandler = () => {
        if(searchValue === '') {
            setFocused(false)
        }
    }

    return <div className={classes.box}>
        <div>
            <form action="#" className={сolorInput()}>
                <input onChange={changeColorInput} onFocus={focusHandler} onBlur={blurHandler} placeholder={isFocused? '' : 'Искать жанр, книги, авторов, издательства... '} className={classes.input} type="text"/>
                <SearchIcon isActive={isFocused}/>
            </form>
        </div> 
        <SearchList filteredData={filteredData}/>
    </div>

}
export default Search