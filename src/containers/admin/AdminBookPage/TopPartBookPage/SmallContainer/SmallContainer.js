import classes from './SmallContainer.module.css'
// import AudioPlayer from '../../../../../components/UI/AudioPlayer/AudioPlayer'
// import { TYPEOFBOOK } from '../../../../../utils/constants/constants'
// аудио пока не работает
const SmallContainer = ({ book }) => {
   return (
      <div className={classes.smallContainer}>
         <p className={classes.price}>{book.price} c</p>
         {/* {book.typeOfBook === TYPEOFBOOK.AUDIOBOOK && (
            <AudioPlayer url={book.audio_url} time={book.player_time} />
         )} */}
      </div>
   )
}

export default SmallContainer
