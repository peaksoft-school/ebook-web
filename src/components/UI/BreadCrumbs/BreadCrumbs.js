import classes from './BreadCrumbs.module.css'
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BreadCrumbsReducerActions } from '../../../store/BreadCrumbsSlice';

const BreadCrumbs = () => {
  const breadCrumb = useSelector(state => state.bread.data)
  const dispatch = useDispatch()

  // console.log(breadCrumb.pop())
  return <div className={classes.containerForLocations}>
    {breadCrumb.map((item) => {
        return <Link 
        key={item.id}
        onClick={() => {
          dispatch(BreadCrumbsReducerActions.removeBreadCrumb(item.id))
        }}
        to={item.route}>
            <p 
            key={item.id} 
            className={classes.previousLocation}
            >{item.path_name} /
            </p>
            {/* <p 
            key={item.id} 
            className={classes.currentLocation}
            >{item.path_name}
            </p> */}
            </Link>
          })}
  </div>;
};

export default BreadCrumbs;
