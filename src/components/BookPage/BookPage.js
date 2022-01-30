import classes from './BookPage.module.css'
import TopPartBookPage from './TopPartBookPage/TopPartBookPage';
import BottomPartBookPage from './BottomPartBookPage/BottomPartBookPage';
import useHttp from '../../hooks/useHttp';

const BookPage = () => {
  const config = {
    url:"https://ebook-api-e48c7-default-rtdb.firebaseio.com/electronic_book.json"
  }
  const bookPagedata = useHttp(config)

  let booklist = {}
  console.log(booklist)
  if(bookPagedata.response !== []){
    for (const key in bookPagedata.response) {
      console.log(bookPagedata.response[key])
      booklist = bookPagedata.response[key]
      console.log(booklist)
    }
  }
  
  return <div className={classes.ContainerForBook}>
    <TopPartBookPage booklist={booklist}/>
    <BottomPartBookPage booklist={booklist}/>
  </div>;
};

export default BookPage;
