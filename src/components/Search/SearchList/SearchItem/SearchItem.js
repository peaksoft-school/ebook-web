import classes from './SearchItem.module.css'
import WhiteWrapper from "../../../UI/WhiteWrapper/WhiteWrapper";

const SearchItem = ({name}) => {
    return <div>
        <WhiteWrapper className={classes.li}>
                {name}
        </WhiteWrapper>
    </div>
};

export default SearchItem;
