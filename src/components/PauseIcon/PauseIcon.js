import classes from './PauseIcon.module.css'
import pause from '../../assets/icons/pause.svg'
const PauseIcon = (props) => {
  return <img onClick={props.onClick} className={classes.pauseIcon} src={pause} alt='this button for pause audio'/>
};

export default PauseIcon;
