import Search from "../UI/Search/Search";
import classes from './HeaderAdmin.module.css'

const HeaderAdmin = () => {
    return (
        <div className={classes.search}>
            <Search/>
        </div>
    )
}

export default HeaderAdmin