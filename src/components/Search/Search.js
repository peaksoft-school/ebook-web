import classes from './Search.module.css'
import SearchIcon from '../Search-icon/SearchIcon'
import { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getLibraryData } from '../../store/LibrarySlice'
import SearchList from '../SearchList/SearchList'
const Search =()=> {
    const [color,setColor] = useState(false)
    const [searchValue,setSearchValue] = useState('')
    const [filteredData,setFilteredData] = useState()
    const list = useSelector(state => state.library.list);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getLibraryData());
    }, [dispatch]);
  

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
            const filterData = list.filter(item => item.login.includes(event.target.value))
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