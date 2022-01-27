import WhiteWrapper from "../UI/WhiteWrapper/WhiteWrapper"
import classes from './SearchList.module.css'
const SearchList =(props)=> {
    const checkfilteredData=()=> {
        if(props.filteredData) {
            return (
                <div className={classes.list}>
                    {props.filteredData.map((user) => {
                       return <div key={user.id}>
                           <WhiteWrapper className={classes.li}>
                                {user.name}
                           </WhiteWrapper>
                       </div> 
                    })}
                </div>
            )
        } else {
            return ''
        }
    }
    
    return checkfilteredData()
}
export default SearchList