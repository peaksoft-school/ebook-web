import SideDrawer from "./AdminSideDrawer"
import HeaderAdmin from "./HeaderAdmin"
import classes from './AdminPage.module.css'
import AdminPageRoute from '../../routes/AdminPage'

function AdminPage() {
    return (
        <div className={classes.adminPage}>
            <SideDrawer/>
            <div className={classes}>
                <HeaderAdmin/>
                <AdminPageRoute/>
            </div>
        </div>
    )
}

export default AdminPage