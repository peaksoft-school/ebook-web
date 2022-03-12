import classes from './ClientMainPage.module.css'
import SpinningBooksSection from './SpinningBooksSection/SpinningBooksSection'
import ViewingTheBestBooksSection from './ViewingTheBestBooksSection/ViewingTheBestBooksSection'
import LatestPublicationsSection from './LatestPublicationsSection/LatestPublicationsSection'
import AudioBooksSection from './AudioBooksSection/AudioBooksSection'
import { betsellerBooks } from '../../../utils/constants/books'
import SendEmailSection from './SendEmailSection/SendEmailSection'

const ClientMainPage = () => {
   return (
      <div className={classes.clientMainPageContainer}>
         <SpinningBooksSection />
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
