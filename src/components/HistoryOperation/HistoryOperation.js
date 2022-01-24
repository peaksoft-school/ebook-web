import classes from './HistoryOperation.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getHistoryOperationData } from '../../store/HistoryOperationSlice';
const HistoryOperation = () => {
    const history = useSelector(state => state.history.list)
    const status = useSelector(state => console.log(state.history.status))
    console.log(history)
    const dispatch = useDispatch()
    const [colorOrangeBtn,setColorOrangeBtn] = useState()

    useEffect(() => {
      dispatch(getHistoryOperationData());
      console.log('sddfsd')
    }, [dispatch]);
    const changeToParchased=()=> {
        setColorOrangeBtn('parchased')
    }
    const changeToFavorites=()=> {
        setColorOrangeBtn('favorites')
    }
    const changeToBasket=()=> {
        setColorOrangeBtn('basket')
    }
    const mapHistory=()=> {
        if(status=== 'success'){
            history.map((item) => {
                return <div className={classes.bookLi}>
                <img className={classes.historyImage} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457' alt='dsdfdf'/>
                <div >
                    <p className={classes.bookNameInformation}>{item.login}</p>
                    <p className={classes.bookNameInformation}>Роулинг Джоан Кэтлин</p>
                </div>
                <p>1 шт</p>
                <div>
                    <p className={classes.promocode}>Промокод 20%</p>
                    <p><span className={classes.discount}>545 c</span>345 c</p>
                </div>
                <p>12.12.21</p>
                <p>Завершен</p>
            </div>
            })
        }else if(status === 'loading') {
            return <p>loading</p>
        }
    }
  return <div className={classes.HistoryOperationContainer}>
      <div className={classes.HistoryOperationTitles}>
      <p>Очистить историю</p>
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
              {mapHistory()}
          </div>
      </div>
  </div>;
};

export default HistoryOperation;
