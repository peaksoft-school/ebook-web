import { audioBooks } from '../../../../utils/constants/books'
import FirstBook from './Books/FirstBook/FirstBook'
import SecondBook from './Books/SecondBook/SecondBook'
import ThirdBook from './Books/ThirdBook/ThirdBook'
import classes from './AudioBooksSection.module.css'
import Button from '../../../../components/UI/Button/Button'

const AudioBooksSection = () => {
   const firstBook = audioBooks[0]
   const secondBook = audioBooks[1]
   const thirdBook = audioBooks[2]
   return (
      <div className={classes.audioBooksSectionContainer}>
         <div className={classes.sectionTopPart}>
            <h2>Аудиокниги</h2>
            <Button variant="aboutMoreBtn">Смотреть все</Button>
         </div>
         <div className={classes.bookContent}>
            <FirstBook
               bookImage={firstBook.imgUrl}
               bookAuthor={firstBook.bookAuthor}
               bookName={firstBook.bookName}
               bookDuration={firstBook.duration}
               bookPrice={firstBook.bookPrice}
            />
            <SecondBook
               bookImage={secondBook.imgUrl}
               bookAuthor={secondBook.bookAuthor}
               bookName={secondBook.bookName}
               bookDuration={secondBook.duration}
               bookPrice={secondBook.bookPrice}
            />
            <ThirdBook
               bookImage={thirdBook.imgUrl}
               bookAuthor={thirdBook.bookAuthor}
               bookName={thirdBook.bookName}
               bookDuration={thirdBook.duration}
               bookPrice={thirdBook.bookPrice}
            />
         </div>
      </div>
   )
}

export default AudioBooksSection
