import SideDrawer from './AdminSideDrawer'
import HeaderAdmin from './HeaderAdmin'
import classes from './AdminLayout.module.css'
import AdminRoutes from '../../routes/AdminRoutes'

function AdminLayout() {
   return (
      <div className={classes.adminPage}>
         <SideDrawer />
         <div className={classes.box}>
            <HeaderAdmin />
            <AdminRoutes />
         </div>
      </div>
   )
}

export default AdminLayout
