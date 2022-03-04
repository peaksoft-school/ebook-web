import classes from './Genres.module.css'
import Genre from './Genre/Genre'

const Genres = ({ setGengreCounter }) => {
   const switchToGenre = (changedGenreCounter) => {
      setGengreCounter(changedGenreCounter)
   }

   return (
      <div className={classes.genres}>
         <Genre
            genreName="Бизнес-литература"
            genreCounter={0}
            switchToGenre={switchToGenre}
         />
         <Genre
            genreName="Детские книги"
            genreCounter={1}
            switchToGenre={switchToGenre}
         />
         <Genre
            genreName="Хобби и досуг"
            genreCounter={2}
            switchToGenre={switchToGenre}
         />
         <Genre
            genreName="Публицистика"
            genreCounter={3}
            switchToGenre={switchToGenre}
         />
         <Genre
            genreName="Учебная литература"
            genreCounter={4}
            switchToGenre={switchToGenre}
         />
         <Genre
            genreName="Поэзия"
            genreCounter={5}
            switchToGenre={switchToGenre}
         />
      </div>
   )
}

export default Genres
