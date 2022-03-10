import { Outlet } from 'react-router-dom'
import VendorHeader from '../../../layout/headers/VendorHeader/VendorHeader'
import VendorFooter from '../../../layout/VendorFooter/VendorFooter'
import classes from './VendorLayout.module.css'

const VendorLayout = () => {
   return (
      <div>
         <VendorHeader />
         <div className={classes.vendorLayoutContainer}>
            <Outlet />
         </div>
         <VendorFooter />
      </div>
   )
}

export default VendorLayout
