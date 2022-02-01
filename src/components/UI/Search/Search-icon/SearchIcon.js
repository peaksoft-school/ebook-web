
import { Search } from "../../../../utils/constants/constants";

const SearchIcon = (props) => {
    const color = props.onColor
  return <div>
      <img src={color? Search.orangeSearchIcon : Search.searchIcon} alt='search-icon'/>
  </div> 
};

export default SearchIcon;
