import { Route, Routes} from "react-router-dom";
import { ROUTES } from '../utils/constants/constants' 

function VendorRoutes() {
    return (
            <Routes>
                <Route path={ROUTES.VENDOR_AREA} element={<h1>VENDORAREA</h1>}/>
                <Route path={ROUTES.BOOK_PAGE} element={<h1>BOOKPAGE</h1>} />
                <Route path={ROUTES.ADD_BOOK} element={<h1>BOOKADD</h1>}/>
                <Route path={ROUTES.PROFILE} element={<h1>PROFILE</h1>}/>
            </Routes>
    )
}

export default VendorRoutes 