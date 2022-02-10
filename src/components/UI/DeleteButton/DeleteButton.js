import classes from './DeleteButton.module.css'
import deleteIcon from '../../../assets/icons/deleteIcon.svg'

const DeleteButton = (props) => {

  return <div>
      <div onClick={props.onClick} className={classes.borderDeleteIcon}>
      <img src={deleteIcon} alt='delete icon' />
    </div>
  </div>
};

export default DeleteButton;
