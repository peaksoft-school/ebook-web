import classes from './BookPage.module.css'
import { useState } from 'react';
import useHttp from '../../hooks/useHttp';
import Button from '../UI/Button/Button';
const BookPage = () => {
  const [transiton,setTransition] = useState('about')
  const config = {
    url:"https://ebook-api-e48c7-default-rtdb.firebaseio.com/book.json"
  }
  const bookPagedata = useHttp(config)
  console.log(bookPagedata)

  let booklist = {}
  console.log(booklist)
  if(bookPagedata.response !== []){
    for (const key in bookPagedata.response) {
      console.log(bookPagedata.response[key])
      booklist = bookPagedata.response[key]
      console.log(booklist)
    }
  }
  console.log(booklist)
  
  const redirectToAbout=()=> {
    setTransition('about')
  }
  const redirectToFragment=()=> {
    setTransition('fragment')
  }
  return <div className={classes.ContainerForBook}>
    <div className={classes.containerForSmallInformation}>
      <img className={classes.firstImage} src='https://pbs.twimg.com/media/EKvrgoOX0AM1_oz.jpg' alt='some images'/>
      <img className={classes.secondImage} src='https://pbs.twimg.com/media/EKvrgoOX0AM1_oz.jpg' alt='some images'/>
      <div className={classes.containerForInformation}>
        <h1 className={classes.title}>{booklist.book_name}</h1>
        <div className={classes.container}>
          <p className={classes.price}>{booklist.price} c</p>
        </div>
        <div className={classes.containerForBriefInformation}>
          <div className={classes.smallContainerForBriefInformation}>
            <p>Автор</p>
            <p>Жанр</p>
            <p>Язык</p>
            <p>Издательство</p>
            <p>Год выпуска</p>
            <p>Обьем</p>
            <p>Длительность</p>
          </div>
          <div className={classes.smallContainerForBriefInformation}>
            <p>{booklist.author}</p>
            <p>{booklist.genre}</p>
            <p>{booklist.language}</p>
            <p>{booklist.publishing_house}</p>
            <p>{booklist.year_of_issue}</p>
            <p>{booklist.volume} стр</p>
            {/* <p>Длительность</p> */}
          </div>
        </div>
        <div className={classes.containerForBtn}>
          <Button variant={'light'} className={classes.button}>Отклонить</Button>
          <Button variant={'secondary'} className={classes.button}>Принять</Button>
        </div>
      </div>
    </div>
    <div className={classes.containerForInformationAboutBook}>
      <div className={classes.containerForAboutBookAndFragment}>
        <div className={classes.containerForSwitch}>
          <button 
          className={transiton === 'about'? 
          classes.redirectActiveButton 
          : classes.redirectButton} 
          onClick={redirectToAbout}>
            О книге
            </button>
          <button 
          className={transiton === 'fragment'? 
          classes.redirectActiveButton 
          : classes.redirectButton} 
          onClick={redirectToFragment}>
            Читать фрагмент
            </button>
        </div>
        {
          transiton === 'about' && <p className={classes.textAbout}>
          loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
        </p>
        }
        {
          transiton === 'fragment' && <p className={classes.textFragment}>
          loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
        </p>
        }
      </div>
      <img className={classes.thirdImage} src='https://pbs.twimg.com/media/EKvrgoOX0AM1_oz.jpg' alt='some images'/>
    </div>
  </div>;
};

export default BookPage;
