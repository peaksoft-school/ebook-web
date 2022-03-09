import classes from './ContainerForBriefInformation.module.css'

const ContainerForBriefInformation = ({ book }) => {
   const languageTranslate = () => {
      if (book.language === 'RUSSIAN') {
         return 'русский'
      }
      if (book.language === 'KYRGYZ') {
         return 'кыргызский'
      }
      if (book.language === 'ENGLISH') {
         return 'английский'
      }
      return ''
   }

   return (
      <div className={classes.containerForBriefInformation}>
         <div className={classes.smallContainerForBriefInformation}>
            <p>Автор</p>
            <p>Жанр</p>
            <p>Язык</p>
            <p>Издательство</p>
            <p>Год выпуска</p>
            {book.typeOfBook === 'ELECTRONIC_BOOK' ||
               ('PAPER_BOOK' && <p>Обьем</p>)}
            {book.typeOfBook === 'AUDIO_BOOK' && <p>Длительность</p>}
         </div>
         <div className={classes.smallContainerForBriefInformation}>
            <p>{book.author}</p>
            <p>{book.genre.genreName}</p>
            <p>{languageTranslate()}</p>
            <p>{book.publishingHouse}</p>
            <p>{book.yearOfIssue}</p>
            {book.typeOfBook === 'ELECTRONIC_BOOK' ||
               ('PAPER_BOOK' && <p>{book.pageSize} стр</p>)}
            {book.typeOfBook === 'AUDIO_BOOK' && <p>{book.duration}</p>}
         </div>
      </div>
   )
}

export default ContainerForBriefInformation
