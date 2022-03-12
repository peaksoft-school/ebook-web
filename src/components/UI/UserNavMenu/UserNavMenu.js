import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ROUTES } from '../../../utils/constants/constants'
import { ReactComponent as ClientIcon } from '../../../assets/icons/clientProfile.svg'
import classes from './UserNavMenu.module.css'
import { ReactComponent as GenreIcon } from '../../../assets/icons/genreIcon.svg'
import AuthModal from '../../auth/authModal/AuthModal'
// import GengreDropDownList from './GengreDropDownList/GengreDropDownList'
import Button from '../Button/Button'
import { deleteFromLocalStorage } from '../../../utils/helpers'
import { setAuth } from '../../../store/authReducer/signInSlice'
import { userRoleReducerActions } from '../../../store/userRoleSlice'
// import { GET_CLIENT_BY_ID } from '../../../utils/constants/urls'

const UserNavMenu = () => {
   const role = useSelector((state) => state.role.roleData)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   // const [isShowGenres, setIsShowGenres] = useState(false)
   const [isShow, setShow] = useState(false)
   const [isShowPopUp, setShowPopUp] = useState(false)

   // const getClientName = async () => {
   //    const configRequest = { url: 'api/clients/show/info', method: 'GET' }
   //    const response = await sendRequest(configRequest)
   //    console.log(response)
   // }

   // useEffect(() => {
   //    getClientName()
   // }, [])

   const logOut = () => {
      deleteFromLocalStorage('EbookUserToken')
      dispatch(setAuth.logout())
      dispatch(userRoleReducerActions.cleanRoleData())
      navigate(ROUTES.CLIENT_MAIN_PAGE)
   }

   // const showGenres = () => {
   //    setIsShowGenres((isShowGenres) => !isShowGenres)
   // }
   const showModalHandler = () => {
      setShow((isShow) => !isShow)
   }
   const showPopUpHandler = () => {
      setShowPopUp((isShowPopUp) => !isShowPopUp)
   }

   return (
      <div className={classes.userNavMenuContainer}>
         <Link to={ROUTES.SORT} className={classes.link}>
            <div role="presentation" className={classes.genreContainer}>
               <GenreIcon className={classes.genreIcon} />
               <p>Жанры</p>
            </div>
         </Link>
         <div className={classes.containerForLinks}>
            <p className={classes.linkText}>Электронные книги</p>
            <p className={classes.linkText}>Audio books</p>
            <Link to={ROUTES.PROMO_CODE}>
               <p className={classes.linkText}>Промокоды</p>
            </Link>
            <Link to={ROUTES.BECOME_VENDOR}>
               <p className={classes.linkActiveText}>
                  Начать продавать на eBook
               </p>
            </Link>
         </div>
         {role === 'CLIENT' ? (
            <div>
               <Button variant="profile" onClick={showPopUpHandler}>
                  <ClientIcon className={classes.icon} /> MAKSAT
               </Button>
               {isShowPopUp && (
                  <div className={classes.popUp}>
                     <p
                        role="presentation"
                        onClick={logOut}
                        className={classes.logout}
                     >
                        Выйти
                     </p>
                     <p className={classes.profile}> Профиль</p>
                  </div>
               )}
            </div>
         ) : (
            <Button className={classes.buttonSize} onClick={showModalHandler}>
               Войти
            </Button>
         )}

         {isShow && <AuthModal onClose={showModalHandler} />}
         {/* {isShowGenres && <GengreDropDownList />} */}
      </div>
   )
}

export default UserNavMenu
