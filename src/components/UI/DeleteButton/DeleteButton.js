import classes from './DeleteButton.module.css'
import deleteIcon from '../../../assets/icons/deleteIcon.svg'

const DeleteButton = () => {
  return <div className={classes.borderDeleteIcon}>
    <img src={deleteIcon} alt='delete icon' />
  </div>
};

export default DeleteButton;
