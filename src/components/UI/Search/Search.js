import { useCallback, useState } from 'react'
import { sendRequest } from '../../../utils/helpers'
import { SEARCH } from '../../../utils/constants/urls'
import classes from './Search.module.css'
import SearchIcon from './Search-icon/SearchIcon'
import SearchList from './SearchList/SearchList'

const Search = () => {
   const [isFocused, setFocused] = useState(false)
   const [searchValue, setSearchValue] = useState('')
   const [filteredData, setFilteredData] = useState()

   const sendRequestSearchValue = useCallback(
      async (event) => {
         try {
            setSearchValue(event.target.value)
            if (event.target.value !== '') {
               const configRequest = {
                  url: `${SEARCH}${event.target.value}`,
               }
               const response = await sendRequest(configRequest)
               console.log(response)
               setFilteredData(response)
            } else {
               setFilteredData([])
            }
         } catch (error) {
            console.log(error.message)
         }
      },
      [searchValue]
   )

   function сolorInput() {
      if (isFocused) {
         return classes.formSearchActive
      }
      return classes.formSearch
   }

   const focusHandler = () => {
      setFocused(true)
   }

   const blurHandler = () => {
      if (searchValue === '') {
         setFocused(false)
      }
   }

   return (
      <div className={classes.box}>
         <div>
            <form action="#" className={сolorInput()}>
               <input
                  onChange={sendRequestSearchValue}
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                  placeholder={
                     isFocused
                        ? ''
                        : 'Искать жанр, книги, авторов, издательства... '
                  }
                  className={classes.input}
                  type="text"
               />
               <SearchIcon isActive={isFocused} />
            </form>
         </div>
         <SearchList filteredData={filteredData} />
      </div>
   )
}
export default Search
