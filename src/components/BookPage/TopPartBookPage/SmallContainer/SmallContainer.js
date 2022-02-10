import classes from './SmallContainer.module.css'
import AudioPlayer from '../../../UI/AudioPlayer/AudioPlayer';
const SmallContainer = ({booklist}) => {
    return <div className={classes.smallContainer}>
        <p className={classes.price}>{booklist.price} c</p>
        {
            booklist.book_type === 'audio' &&
            <AudioPlayer 
            url={booklist.audio_url}
            time={booklist.player_time}
            />
        }
    </div>
};

export default SmallContainer;
