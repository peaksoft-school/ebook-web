import classes from './HistoryOperationButtons.module.css'

const HistoryOperationButtons = (props) => {
    return <div className={classes.BooksLocationBar}>
            <button
            onClick={props.changeToParchased} 
            className={props.location === 'parchased'? 
            classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            Купленные ({props.numberOfParchased} книг)
            </button>
            <button
            onClick={props.changeToFavorites} 
            className={props.location === 'favorites'? 
            classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            Избранные ({props.numberOfFavorites} книг)
            </button>
            <button
            onClick={props.changeToBasket} 
            className={props.location === 'basket'? 
             classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            В корзине ({props.numberOfBasket} книг)
        </button>
    </div>
};

export default HistoryOperationButtons;
