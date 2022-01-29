import classes from './PlayButton.module.css'
import play from '../../../assets/icons/playAudio.svg'
const PlayButton = (props) => {
  return <div onClick={props.onClick}>
    <img className={classes.playIcon} src={play} alt='this button for play audio'/>
  </div>
};

export default PlayButton;
