// import searchIcon from '../../../../assets/icons/searchIcon.svg'
import classes from './Search-icon.module.css'
import{ ReactComponent as OrangeSearchIcon } from '../../../../assets/icons/orangeSearchIcon.svg'

const SearchIcon = ({ isActive }) => {
    const className = isActive ? classes.searchIconOrange : classes.searchIconGray
  return <OrangeSearchIcon className={className} /> 
};

export default SearchIcon;
