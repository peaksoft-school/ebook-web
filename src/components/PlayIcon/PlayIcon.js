import classes from './PlayIcon.module.css'
import play from '../../assets/icons/playAudio.svg'
const PlayIcon = (props) => {
  return <img className={classes.playIcon} onClick={props.onClick} src={play} alt='this button for play audio'/>
};

export default PlayIcon;
