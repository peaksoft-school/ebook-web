import { useState } from 'react'
<<<<<<< HEAD
import { Tabs, Tab, TabPanel } from '../../../components/UI/Tabs/Tabs'

=======
import { Tabs, Tab, TabPanel } from '../../../components/UI/tabs/Tabs'
>>>>>>> 0efd51e27c352bb1bbfee74bc9106e33fedc5f91
import SellerProfile from '../../../components/admin/SellerProfile/SellerProfile'
import BreadCrumbs from '../../../components/UI/BreadCrumbs/BreadCrumbs'
import classes from './SellersDetails.module.css'
import VendorBooksInAdmin from '../VendorBooksInAdmin/VendorBooksInAdmin'

const SellerDetails = () => {
   const [activeTab, setActiveTab] = useState('profile')

   const handleChange = (value) => {
      setActiveTab(value)
   }

   return (
      <div className={classes.constainerForSellerDetailscontent}>
         <BreadCrumbs />
         <Tabs>
            <Tab
               changeTab={handleChange}
               isActive={activeTab}
               label="profile"
            />
            <Tab changeTab={handleChange} isActive={activeTab} label="books" />
         </Tabs>

         <TabPanel check="profile" value={activeTab}>
            <SellerProfile />
         </TabPanel>
         <TabPanel check="books" value={activeTab}>
            <VendorBooksInAdmin />
         </TabPanel>
      </div>
   )
}

export default SellerDetails
