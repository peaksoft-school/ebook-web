import { ReactComponent as BellIcon } from '../../../assets/icons/ep_bell.svg'
import AdminIcon from '../../../components/UI/adminIcon/AdminIcon'
import EBookLogo from '../../../components/UI/EBookLogo/EBookLogo'
import Search from '../../../components/UI/Search/Search'
import classes from './VendorHeader.module.css'

const VendorHeader = () => {
   return (
      <div className={classes.vendorHeaderContainer}>
         <EBookLogo />
         <Search />
         <BellIcon className={classes.bellIcon} />
         <AdminIcon />
      </div>
   )
}

export default VendorHeader
