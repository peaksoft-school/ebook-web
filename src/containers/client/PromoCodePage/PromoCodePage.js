import UserNavMenu from '../../../components/UI/UserNavMenu/UserNavMenu'
import UserHeader from '../../../layout/headers/UserHeader/UserHeader'
import { ReactComponent as PromoCode } from '../../../assets/icons/promocode.svg'
import classes from './PromoCode.module.css'

const PromoCodePage = () => {
   return (
      <div>
         <header>
            <UserHeader />
            <UserNavMenu />
         </header>
         <div className={classes.promo}>
            <PromoCode />
            <span>Активация промокода eBook</span>
            <div>
               <input />
               <button type="button">add</button>
            </div>
            <span>
               Промокоды eBook на скидки и подарки вы можете получить в
               рассылках.
            </span>
         </div>
      </div>
   )
}

export default PromoCodePage
