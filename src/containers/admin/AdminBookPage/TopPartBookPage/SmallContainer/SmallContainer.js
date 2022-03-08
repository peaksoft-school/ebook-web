import classes from './SmallContainer.module.css'
import AudioPlayer from '../../../../../components/UI/AudioPlayer/AudioPlayer'

const SmallContainer = ({ book }) => {
   return (
      <div className={classes.smallContainer}>
         <p className={classes.price}>{book.price} c</p>
         {book.typeOfBook === 'AUDIO_BOOK' && (
            <AudioPlayer url={book.audio_url} time={book.player_time} />
         )}
      </div>
   )
}

export default SmallContainer
