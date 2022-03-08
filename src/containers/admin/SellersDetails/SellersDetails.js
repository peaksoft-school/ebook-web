import { useState } from 'react'
import { Tabs, Tab, TabPanel } from '../../../components/UI/Tabs/Tabs'
import SellerProfile from '../../../components/admin/SellerProfile/SellerProfile'
import BreadCrumbs from '../../../components/UI/BreadCrumbs/BreadCrumbs'
import classes from './SellersDetails.module.css'
import VendorBooksInAdmin from '../VendorBooksInAdmin/VendorBooksInAdmin'

const SellerDetails = () => {
   const [activeTab, setActiveTab] = useState('profile')
   const [allVendorsBook, setAllVendorsBook] = useState([])

   const handleChange = (value) => {
      setActiveTab(value)
   }
   const onChangeVendorBooks = (books) => {
      setAllVendorsBook(books)
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
            <SellerProfile onChangeVendorBooks={onChangeVendorBooks} />
         </TabPanel>
         <TabPanel check="books" value={activeTab}>
            <VendorBooksInAdmin vendorBooks={allVendorsBook} />
         </TabPanel>
      </div>
   )
}

export default SellerDetails
