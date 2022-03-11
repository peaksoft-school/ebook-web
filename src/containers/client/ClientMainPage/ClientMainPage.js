import { useEffect, useState } from 'react'
import classes from './ClientMainPage.module.css'
// import SpinningBooksSection from './SpinningBooksSection/SpinningBooksSection'
import ViewingTheBestBooksSection from './ViewingTheBestBooksSection/ViewingTheBestBooksSection'
import LatestPublicationsSection from './LatestPublicationsSection/LatestPublicationsSection'
import AudioBooksSection from './AudioBooksSection/AudioBooksSection'
import { betsellerBooks } from '../../../utils/constants/books'
import SendEmailSection from './SendEmailSection/SendEmailSection'
import { CLIENT_MAIN_PAGE_URLS } from '../../../utils/constants/urls'
import { sendRequest } from '../../../utils/helpers'

const ClientMainPage = () => {
   const [topBooks, setTopBooks] = useState([])
   const getTopThreeBooks = async () => {
      const configRequest = {
         url: CLIENT_MAIN_PAGE_URLS.GET_TOP_THREE_BOOKS,
      }
      const response = await sendRequest(configRequest)
      setTopBooks(response)
   }

   useEffect(async () => {
      await getTopThreeBooks()
   }, [])
   console.log(topBooks)

   return (
      <div className={classes.clientMainPageContainer}>
         {/* <SpinningBooksSection setTopBooks={setTopBooks} topBooks={topBooks} /> */}
         <ViewingTheBestBooksSection
            sectionTitle="Бестселлеры"
            books={betsellerBooks}
         />
         <LatestPublicationsSection />
         <AudioBooksSection />
         <ViewingTheBestBooksSection
            sectionTitle="Электронные книги"
            books={betsellerBooks}
         />
         <SendEmailSection />
      </div>
   )
}

export default ClientMainPage
