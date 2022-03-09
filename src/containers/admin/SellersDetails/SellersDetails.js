import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Tabs, Tab, TabPanel } from '../../../components/UI/Tabs/Tabs'
import SellerProfile from '../../../components/admin/SellerProfile/SellerProfile'
import BreadCrumbs from '../../../components/UI/BreadCrumbs/BreadCrumbs'
import classes from './SellersDetails.module.css'
import VendorBooks from '../../VendorBooks/VendorBooks'
import { sendRequest } from '../../../utils/helpers'

const SellerDetails = () => {
   const [activeTab, setActiveTab] = useState('profile')
   const [allVendorsBook, setAllVendorsBook] = useState([])
   const [sellerById, setSellerById] = useState('')

   const params = useParams()

   const handleChange = (value) => {
      setActiveTab(value)
   }
   const onChangeVendorBooks = (books) => {
      setAllVendorsBook(books)
   }

   const getSellerById = async () => {
      const userUrl = {
         url: `api/vendor/getById/${params.sellerId}`,
      }
      const response = await sendRequest(userUrl)
      await onChangeVendorBooks(response.vendorBooks)
      await setSellerById(response)
   }

   useEffect(() => {
      getSellerById()
   }, [])

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
            <SellerProfile sellerById={sellerById} />
         </TabPanel>
         <TabPanel check="books" value={activeTab}>
            <VendorBooks vendorBooks={allVendorsBook} />
         </TabPanel>
      </div>
   )
}

export default SellerDetails
