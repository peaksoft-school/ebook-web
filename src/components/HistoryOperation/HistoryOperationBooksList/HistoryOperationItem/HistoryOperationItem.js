import classes from './HistoryOperationItem.module.css'

const HistoryOperationItem = (props) => {
    return <div className={classes.bookLi}>
        <img className={classes.historyImage} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457' alt='dsdfdf'/>
        <div >
            <p className={classes.bookNameInformation}>{props.book_name}</p>
            <p className={classes.bookNameInformation}>{props.author}</p>
        </div>
        <p className={classes.smallBox}>{props.booksum} шт</p>
        <div>
            <p className={classes.promocode}>промокод {props.promocode}%</p>
            <p><span className={classes.withoutDiscount}>{props.price} c</span>{props.discount} c</p>
        </div>
        <p className={classes.smallBox}>{props.data_registration}</p>
        <p className={classes.state}>{props.state}</p>
    </div>
};

export default HistoryOperationItem;
