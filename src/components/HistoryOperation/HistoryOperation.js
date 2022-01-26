import classes from './HistoryOperation.module.css'
import { useState } from 'react';
import useHttp from '../../hooks/use-http';
const HistoryOperation = () => {
    const data = {hello:'hello'}
    const config = {
        url:'https://jsonplaceholder.typicode.com/users',
    }
    const history = useHttp(config);
    const [location,setLocation] = useState()
    const [colorOrangeBtn,setColorOrangeBtn] = useState()
    const [array,setArray] = useState(history)
    const changeToParchased=()=> {
        setColorOrangeBtn('parchased')
        setLocation('parchased')
        showHistory()
    }

    const changeToFavorites=()=> {
        setColorOrangeBtn('favorites')
        setLocation('favorites')
        showHistory() 
    }
    const changeToBasket=()=> {
        setColorOrangeBtn('basket')
        setLocation('basket')
        showHistory()
    }
    const showHistory=()=> {
        if(history) {
            const data = history.filter((book) => book.location === location)
            setArray(data)
        }
        return history
    }
  return <div className={classes.HistoryOperationContainer}>
      <div className={classes.HistoryOperationTitles}>
        <p className={classes.cleanHistory}>Очистить историю</p>
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
            className={colorOrangeBtn === 'parchased'? 
            classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            Купленные ()
        </button>
        <button
            onClick={changeToFavorites} 
            className={colorOrangeBtn === 'favorites'? 
            classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            Избранные ()
        </button>
        <button
            onClick={changeToBasket} 
            className={colorOrangeBtn === 'basket'? 
            classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            В корзине ()
        </button>
        </div>
          <div className={classes.BooksList}>
              {history && history.map((item) => {
                  return <div key={item.id} className={classes.bookLi}>
                  <img className={classes.historyImage} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457' alt='dsdfdf'/>
                  <div >
                      <p className={classes.bookNameInformation}>{item.login}</p>
                      <p className={classes.bookNameInformation}>Роулинг Джоан Кэтлин</p>
                  </div>
                  <p className={classes.smallBox}>1 шт</p>
                  <div>
                      <p className={classes.promocode}>Промокод 20%</p>
                      <p><span className={classes.discount}>545 c</span>345 c</p>
                  </div>
                  <p className={classes.smallBox}>12.12.21</p>
                  <p>Завершен</p>
              </div>
              })
            }
          </div>
      </div>
  </div>;
};

export default HistoryOperation;
