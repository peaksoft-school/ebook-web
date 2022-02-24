import classes from './ClientMainPage.module.css'
import UserHeader from '../../../layout/headers/UserHeader/UserHeader'
import UserNavMenu from '../../../components/UI/UserNavMenu/UserNavMenu'
import SpinningBooksSection from './SpinningBooksSection/SpinningBooksSection'
import BestsellerBooksSection from './BestsellerBooksSection/BestsellerBooksSection'

const ClientMainPage = () => {
   return (
      <div className={classes.clientMainPageWrapper}>
         <div className={classes.clientMainPageContainer}>
            <UserHeader />
            <UserNavMenu />
            <SpinningBooksSection />
            <BestsellerBooksSection />
         </div>
      </div>
   )
}

export default ClientMainPage
