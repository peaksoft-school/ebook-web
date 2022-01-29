import classes from './HistoryOperation.module.css'
import HistoryOperationBooksList from './HistoryOperationBooksList/HistoryOperationBooksList';
import HistoryOperationButtons from './HistoryOperationButtons/HistoryOperationButtons';
import HistoryOperationTitles from './HistoryOperationTitles/HistoryOperationTitles';
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
        return <HistoryOperationBooksList history={history}/>
    }
    
    return <div className={classes.HistoryOperationContainer}>
        <HistoryOperationTitles cleanHistory={cleanHistory}/>
        <div className={classes.showHistoryContainer}>
            <HistoryOperationButtons
            changeToParchased={changeToParchased}
            changeToFavorites={changeToFavorites}
            changeToBasket={changeToBasket}
            location={location}
            />
            <div className={classes.BooksList}>
                {showBooks()}
            </div>
        </div>
    </div>;
};

export default HistoryOperation;
