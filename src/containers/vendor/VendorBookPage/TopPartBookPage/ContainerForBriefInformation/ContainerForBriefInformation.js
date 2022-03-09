import classes from './ContainerForBriefInformation.module.css'

const ContainerForBriefInformation = ({ book }) => {
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
            <p>{book.language}</p>
            <p>{book.publishingHouse}</p>
            <p>{book.yearOfIssue}</p>
            {book.typeOfBook === 'ELECTRONIC_BOOK' ||
               ('PAPER_BOOK' && <p>{book.bookSize} стр</p>)}
            {book.typeOfBook === 'AUDIO_BOOK' && <p>{book.duration}</p>}
         </div>
      </div>
   )
}

export default ContainerForBriefInformation
