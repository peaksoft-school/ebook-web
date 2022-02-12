import classes from './SellerItem.module.css'
import DeleteButton from '../../../UI/DeleteButton/DeleteButton';
import ModalForDelete from '../../../UI/ModalForDelete/ModalForDelete';
import { breadCrumbsReducerActions } from '../../../../store/breadCrumbsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SellerItem = (props) => {
  const {
    id,first_name,
    last_name,phone_number,
      email,booksum
    } = props

    const breadcrumbs = [
      {
        route_name: 'Продавцы',
        route: '/admin/sellers'
      },
      {
        route_name: `${first_name} ${last_name}`
      }
    ]

    const dispatch = useDispatch()
    const [isShowModal,setIsShowModal] = useState(false)

    const onOpenHundler =()=> {
        setIsShowModal(isShowModal => !isShowModal)
    }
  
    const onCloseHundler =()=> {
      setIsShowModal(isShowModal => !isShowModal)
    }
  
    const onDeleteHundler =()=> {
      setIsShowModal(isShowModal => !isShowModal)
      //there will be dispatch function
    }
  

    const senBreadCrumbs =()=> {
      dispatch(breadCrumbsReducerActions.updateBreadCrumbs(breadcrumbs))
    }
    
  return <div className={classes.containerForLi}>
        <Link  
        to={`/admin/sellers/${id}`}
        key={id}
        >
        <li 
        className={classes.li}
        onClick={senBreadCrumbs}
        >
        <p className={classes.mediumBox}>{first_name} {last_name}</p>
        <p className={classes.mediumBox}>{phone_number}</p>
        <p className={classes.mediumBox}>{email}</p>
        <p className={classes.mediumBox}>{booksum}</p>
      </li>
      </Link>
      <DeleteButton onClick={onOpenHundler}/>
      {
      isShowModal 
      && <ModalForDelete
        full_name={`${first_name} ${last_name}`}
        id={id}
        onClose={onCloseHundler}
        onDelete={onDeleteHundler} 
        />
      }
  </div>;
};

export default SellerItem