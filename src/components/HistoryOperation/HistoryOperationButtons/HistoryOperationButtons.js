import classes from './HistoryOperationButtons.module.css'

const HistoryOperationButtons = (props) => {
    return <div className={classes.BooksLocationBar}>
            <button
            onClick={props.changeToParchased} 
            className={props.location === 'parchased'? 
            classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            Купленные ()
            </button>
            <button
            onClick={props.changeToFavorites} 
            className={props.location === 'favorites'? 
            classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            Избранные ()
            </button>
            <button
            onClick={props.changeToBasket} 
            className={props.location === 'basket'? 
             classes.historyOperationOrangeBtn 
            : classes.historyOperationBtn}>
            В корзине ()
        </button>
    </div>
};

export default HistoryOperationButtons;
