import classes from './Client.module.css'
import AuthentificatioRoute from '../../routes/Authentication'
import HeaderClient from './HeaderClient'

export default function ClientPage() {
   return (
      <div className={classes.clientPage}>
         <HeaderClient />
         <div className={classes.route}>
            <AuthentificatioRoute />
         </div>
      </div>
   )
}
