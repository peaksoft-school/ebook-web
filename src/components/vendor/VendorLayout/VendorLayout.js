import { Outlet } from 'react-router-dom'
import VendorHeader from '../../../layout/headers/VendorHeader/VendorHeader'
import VendorFooter from '../../../layout/VendorFooter/VendorFooter'
import classes from './VendorLayout.module.css'
import VendorMenu from '../../UI/VendorMenu/VendorMenu'
import BreadCrumbs from '../../UI/BreadCrumbs/BreadCrumbs'

const VendorLayout = () => {
   return (
      <div>
         <VendorHeader />
         <div className={classes.vendorLayoutContainer}>
            <VendorMenu />
            <BreadCrumbs />
            <Outlet />
         </div>
         <VendorFooter />
      </div>
   )
}

export default VendorLayout
