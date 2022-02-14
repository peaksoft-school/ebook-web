import SideDrawer from "./AdminSideDrawer"
import HeaderAdmin from "./HeaderAdmin"
import classes from './AdminPage.module.css'
import AdminPageRoute from '../../routes/AdminPage'

export default function AdminPage() {

    return (
        <div className={classes.adminPage}>
            <SideDrawer/>
            <div className={classes.box}>
                <HeaderAdmin/>
                <AdminPageRoute/>
            </div>
        </div>
    )
}