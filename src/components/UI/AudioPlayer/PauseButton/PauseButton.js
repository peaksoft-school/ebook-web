import classes from './PauseButton.module.css'
import pause from '../../../../assets/icons/pause.svg'

const PauseButton = (props) => {
  return <div onClick={props.onClick}>
    <img className={classes.pauseIcon} src={pause} alt='this button for pause audio'/>
  </div>
};

export default PauseButton;
