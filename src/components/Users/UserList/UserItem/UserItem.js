import classes from './UserItem.module.css'
import DeleteButton from '../../../UI/DeleteButton/DeleteButton';
import ModalForDelete from '../../../UI/ModalForDelete/ModalForDelete';
import { breadCrumbsReducerActions } from '../../../../store/breadCrumbsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserItem = (props) => {
  const {id,
    first_name,
    email
  } = props;
  
  const breadcrumbs = [
    {
      route_name: 'Пользователи',
      route: '/admin/users'
    },
    {
      route_name: first_name
    }
  ]
  
  const [isShowModal,setIsShowModal] = useState(false)
  const dispatch = useDispatch()

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

    return <div className={classes.containerLiFor}>
        <Link 
        to={`/admin/users/${id}`}
        >
          <li 
          className={classes.li}
          onClick={senBreadCrumbs}
          >
              <p className={classes.mediumBox}>{first_name}</p>
              <p className={classes.mediumBox}>{email}</p>
          </li>
        </Link>
        <DeleteButton onClick={onOpenHundler}/>
        {
        isShowModal 
        && <ModalForDelete
          full_name={first_name}
          id={id}
          onClose={onCloseHundler}
          onDelete={onDeleteHundler} 
          />
        }
    </div>;
};

export default UserItem;
