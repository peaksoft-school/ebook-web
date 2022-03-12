import classes from './SearchList.module.css'
import UserItem from './SearchItem/SearchItem'

const SearchList = ({ filteredData }) => {
   return (
      <div className={classes.list}>
         {filteredData &&
            filteredData.map((searchItem) => {
               console.log(searchItem)
               return (
                  <UserItem
                     key={searchItem.id}
                     id={searchItem.id}
                     type={searchItem.type}
                     name={searchItem.search}
                  />
               )
            })}
      </div>
   )
}
export default SearchList
