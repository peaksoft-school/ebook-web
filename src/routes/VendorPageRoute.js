import { Route, Routes} from "react-router-dom";
import { ROUTES } from '../utils/constants/constants' 

function VendorPageRoute() {
    return (
        <>
            <Routes>
                <Route path={ROUTES.VENDORAREA} element={<h1>VENDORAREA</h1>}/>
                <Route path={ROUTES.BOOKPAGE} element={<h1>BOOKPAGE</h1>} />
                <Route path={ROUTES.BOOKADD} element={<h1>BOOKADD</h1>}/>
                <Route path={ROUTES.PROFILE} element={<h1>PROFILE</h1>}/>
            </Routes>
        </>
    )
}

export default VendorPageRoute 