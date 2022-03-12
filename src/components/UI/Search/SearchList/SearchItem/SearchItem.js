import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import classes from './SearchItem.module.css'
import WhiteWrapper from '../../../WhiteWrapper/WhiteWrapper'
import { ROUTES } from '../../../../../utils/constants/constants'
import { asyncUpdateBreadcrumb } from '../../../../../store/breadCrumbsSlice'

const SearchItem = ({ name, type, id }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const breadCrumbs = [
      {
         route_name: name,
      },
   ]
   // console.log(id)
   const navigateToType = () => {
      if (type === 'GENRE') {
         navigate(`${ROUTES.SORT_GENRE}/${id}`)
      }
      if (type === 'AUTHOR') {
         navigate(`${ROUTES.SORT_AUTHOR}/${name}`)
      }
      if (type === 'PUBLISHER') {
         navigate(`${ROUTES.SORT_PUBLISHING_HOUSE}/${name}`)
      }
      if (type === 'BOOK') {
         navigate(`${ROUTES.CLIENT_BOOK_PAGE}/${id}`)
         dispatch(asyncUpdateBreadcrumb(breadCrumbs))
      }
   }
   return (
      <div role="presentation" onClick={navigateToType}>
         <WhiteWrapper className={classes.li}>{name}</WhiteWrapper>
      </div>
   )
}

export default SearchItem
