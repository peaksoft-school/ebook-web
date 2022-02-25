import classes from './ClientMainPage.module.css'
import UserHeader from '../../../layout/headers/UserHeader/UserHeader'
import UserNavMenu from '../../../components/UI/UserNavMenu/UserNavMenu'
import SpinningBooksSection from './SpinningBooksSection/SpinningBooksSection'
import ViewingTheBestBooksSection from './ViewingTheBestBooksSection/ViewingTheBestBooksSection'
import LatestPublicationsSection from './LatestPublicationsSection/LatestPublicationsSection'
import AudioBooksSection from './AudioBooksSection/AudioBooksSection'
import { betsellerBooks } from '../../../utils/constants/books'
import SendEmailSection from './SendEmailSection/SendEmailSection'
import Footer from '../../../layout/footer/Footer'

const ClientMainPage = () => {
   return (
      <div className={classes.clientMainPageWrapper}>
         <div className={classes.clientMainPageContainer}>
            <UserHeader />
            <UserNavMenu />
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
         <Footer />
      </div>
   )
}

export default ClientMainPage
