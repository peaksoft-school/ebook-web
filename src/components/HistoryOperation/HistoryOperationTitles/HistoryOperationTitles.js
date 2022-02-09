import classes from './HistoryOperationTitles.module.css'

const HistoryOperationTitles = (props) => {
    return <div className={classes.HistoryOperationTitles}>
        <p onClick={props.cleanHistory} className={classes.cleanHistory}>Очистить историю</p>
        <p>Фото</p>
        <p>Название/Автор</p>
        <p>Количество</p>
        <p>Цена</p>
        <p>Дата</p>
        <p>Состояние</p>
    </div>
};

export default HistoryOperationTitles;
