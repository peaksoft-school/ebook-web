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
            {book.book_type === 'electronic' && <p>Обьем</p>}
            {book.book_type === 'audio' && <p>Длительность</p>}
         </div>
         <div className={classes.smallContainerForBriefInformation}>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.language}</p>
            <p>{book.publishing_house}</p>
            <p>{book.year_of_issue}</p>
            {book.book_type === 'electronic' && (
               <p>{book.volume} стр</p>
            )}
            {book.book_type === 'audio' && <p>{book.duration}</p>}
         </div>
      </div>
   )
}

export default ContainerForBriefInformation
