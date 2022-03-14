import React, { useEffect, useState } from 'react'
import { GET_VENDORS_BOOK } from '../../../utils/constants/urls'
import { sendRequest } from '../../../utils/helpers'
import VendorBooks from '../../VendorBooks/VendorBooks'

const VendorArea = () => {
   const [books, setVendorsBook] = useState([])
   const getVendorsBooks = async () => {
      const configOptions = {
         url: GET_VENDORS_BOOK,
         method: 'GET',
      }
      const response = await sendRequest(configOptions)
      setVendorsBook(response)
   }
   useEffect(() => {
      getVendorsBooks()
   }, [])

   const vendorsBookContent =
      books.length !== 0 ? (
         <VendorBooks vendorBooks={books} />
      ) : (
         <p>У вас нету добавленных книг</p>
      )
   return <div>{vendorsBookContent}</div>
}

export default VendorArea
