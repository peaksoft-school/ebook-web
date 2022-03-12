import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUpdateBreadcrumb } from '../../../../../store/breadCrumbsSlice'
import { ROUTES, ROLES } from '../../../../../utils/constants/constants'
import classes from './SearchItem.module.css'
import WhiteWrapper from '../../../WhiteWrapper/WhiteWrapper'

const SearchItem = ({
   name,
   type,
   id,
   setFilteredData,
   setSearchValue,
   setFocused,
}) => {
   const role = useSelector((state) => state.role.roleData)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const breadCrumbs = [
      {
         route_name: name,
      },
   ]

   const navigateToType = () => {
      switch (type) {
         case 'GENRE':
            navigate(`${ROUTES.SORT_GENRE}/${id}`)
            break
         case 'AUTHOR':
            navigate(`${ROUTES.SORT_AUTHOR}/${name}`)
            break
         case 'PUBLISHER':
            navigate(`${ROUTES.SORT_PUBLISHING_HOUSE}/${name}`)
            break

         case 'BOOK' && role === ROLES.ADMIN:
            navigate(`${ROUTES.ADMIN_BOOK_PAGE}/${id}`)
            dispatch(asyncUpdateBreadcrumb(breadCrumbs))
            break

         case 'BOOK' && role === ROLES.VENDOR:
            navigate(`${ROUTES.VENDOR_BOOK_PAGE}/${id}`)
            dispatch(asyncUpdateBreadcrumb(breadCrumbs))
            break

         case 'BOOK':
            navigate(`${ROUTES.CLIENT_BOOK_PAGE}/${id}`)
            dispatch(asyncUpdateBreadcrumb(breadCrumbs))
            break

         default:
            break
      }
      setSearchValue('')
      setFilteredData([])
      setFocused((isFocused) => !isFocused)
   }
   return (
      <div role="presentation" onClick={navigateToType}>
         <WhiteWrapper className={classes.li}>{name}</WhiteWrapper>
      </div>
   )
}

export default SearchItem
