import classes from './SellerItem.module.css'
import DeleteButton from '../../../UI/DeleteButton/DeleteButton';

const SellerItem = (props) => {
    const {
      id,
      first_name,
      last_name,
      phone_number,
      email,booksum
    } = props

  return <div>
        <li className={classes.li}>
            <p className={classes.mediumAndLongBox}>{first_name} {last_name}</p>
            <p className={classes.mediumBox}>{phone_number}</p>
            <p className={classes.mediumAndLongBox}>{email}</p>
            <p className={classes.mediumBox}>{booksum}</p>
            <DeleteButton full_name={`${first_name} ${last_name}`} id={id}/>
        </li>
  </div>;
};

export default SellerItem