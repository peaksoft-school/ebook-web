import { Outlet } from 'react-router-dom'
import VendorHeader from '../../../layout/headers/VendorHeader/VendorHeader'
import VendorFooter from '../../../layout/VendorFooter/VendorFooter'
import VendorMenu from '../../UI/VendorMenu/VendorMenu'
import classes from './VendorLayout.module.css'

const VendorLayout = () => {
   return (
      <div className={classes.vendorLayoutContainer}>
         <VendorHeader />
         <VendorMenu />
         <Outlet />
         <VendorFooter />
      </div>
   )
}

export default VendorLayout
