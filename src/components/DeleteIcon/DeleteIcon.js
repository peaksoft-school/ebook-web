import classes from './DeleteIcon.module.css'
import deleteIcon from '../../assets/icons/deleteIcon.svg'

const DeleteIcon = () => {
  return <div className={classes.borderDeleteIcon}>
    <img src={deleteIcon} alt='delete icon' />
  </div>
};

export default DeleteIcon;
