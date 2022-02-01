import SideDrawer from "./AdminSideDrawer"
import HeaderAdmin from "./HeaderAdmin"
import classes from './AdminPage.module.css'
import AdminPageRoute from '../../routes/AdminPage'
import ModalForDelete from "../ModalForDelete/ModalForDelete"

function AdminPage() {
    return (
        <div className={classes.adminPage}>
            <SideDrawer/>
            <div className={classes.box}>
                <HeaderAdmin/>
                <AdminPageRoute/>
                <ModalForDelete/>
            </div>
        </div>
    )
}

export default AdminPage