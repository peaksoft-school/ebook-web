import { useState } from 'react'
import { Tabs, Tab, TabPanel } from '../UI/tabs/Tabs'

import SellerProfile from '../SellerProfile/SellerProfile'
import BreadCrumbs from '../UI/BreadCrumbs/BreadCrumbs'
import classes from './SellersDetails.module.css'

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
            <h1>books</h1>
         </TabPanel>
      </div>
   )
}

export default SellerDetails
