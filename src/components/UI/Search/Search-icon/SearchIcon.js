import searchIcon from '../../../../assets/icons/searchIcon.svg'
import orangeSearchIcon from '../../../../assets/icons/orangeSearchIcon.svg'
const SearchIcon = (props) => {
    const color = props.onColor
  return <div>
      <img src={color? orangeSearchIcon : searchIcon} alt='search-icon'/>
  </div> 
};

export default SearchIcon;
