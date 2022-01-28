import classes from './HistoryOperation.module.css'
import useHttp from '../../hooks/use-http';
import { useState } from 'react';

const HistoryOperation = () => {
    const [location,setLocation] = useState('parchased')
    const config = {
        url:'https://ebook-api-e48c7-default-rtdb.firebaseio.com/books.json',
    }
    const getHistory = useHttp(config);

    let history = []

    if(getHistory.response !== []){
      for (const key in getHistory.response) {
        for (let i = 0; i < getHistory.response[key].length; i++) {
          const element = getHistory.response[key][i];
          history.push({
              id: element.id,
              author:element.author,
              book_name:element.book_name,
              booksum:element.booksum,
              promocode:element.promocode,
              discount:element.discount,
              price:element.price,
              data_registration:element.data_registration,
              location:element.location,
              state:element.state
          })
        }
      }
    }

    const changeToParchased=()=> {
        setLocation('parchased')
    }

    const changeToFavorites=()=> {
        setLocation('favorites') 
    }

    const changeToBasket=()=> {
        setLocation('basket')
    }

    const cleanHistory=()=> {
        // there will be some function, which delete data from server
    }

    const showBooks=()=> {
        history = history.filter((book) => book.location === location)
        return history.map((item) => {
            return <div key={item.id} className={classes.bookLi}>
            <img className={classes.historyImage} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457' alt='dsdfdf'/>
            <div >
                <p className={classes.bookNameInformation}>{item.book_name}</p>
                <p className={classes.bookNameInformation}>{item.author}</p>
            </div>
            <p className={classes.smallBox}>{item.booksum} шт</p>
            <div>
                <p className={classes.promocode}>промокод {item.promocode}%</p>
                <p><span className={classes.withoutDiscount}>{item.price} c</span>{item.discount} c</p>
            </div>
            <p className={classes.smallBox}>{item.data_registration}</p>
            <p className={classes.state}>{item.state}</p>
        </div>
        })      
    }
    
  return <div className={classes.HistoryOperationContainer}>
      <div className={classes.HistoryOperationTitles}>
        <p onClick={cleanHistory} className={classes.cleanHistory}>Очистить историю</p>
        <p>Фото</p>
        <p>Название/Автор</p>
        <p>Количество</p>
        <p>Цена</p>
        <p>Дата</p>
        <p>Состояние</p>
      </div>
      <div className={classes.showHistoryContainer}>
          <div className={classes.BooksLocationBar}>
          <button
            onClick={changeToParchased} 
            className={location === 'parchased'? 
            classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            Купленные ()
        </button>
        <button
            onClick={changeToFavorites} 
            className={location === 'favorites'? 
            classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            Избранные ()
        </button>
        <button
            onClick={changeToBasket} 
            className={location === 'basket'? 
            classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            В корзине ()
        </button>
        </div>
          <div className={classes.BooksList}>
              {showBooks()}
          </div>
      </div>
  </div>;
};

export default HistoryOperation;
