import classes from './SearchList.module.css'
import UserItem from './SearchItem/SearchItem'

const SearchList = ({ filteredData }) => {
   return (
      <div className={classes.list}>
         {filteredData &&
            filteredData.map((user) => {
               return <UserItem key={user.id} name={user.name} />
            })}
      </div>
   )
}
export default SearchList
