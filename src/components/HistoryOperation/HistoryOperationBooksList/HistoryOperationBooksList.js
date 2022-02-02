import HistoryOperationItem from './HistoryOperationItem/HistoryOperationItem';

const HistoryOperationBooksList = ({history}) => {
    return <div>
        {
            history && history.map((item) => {
                return <HistoryOperationItem
                key={item.id}
                book_name={item.book_name}
                author={item.author}
                booksum={item.booksum}
                promocode={item.promocode}
                price={item.price}
                discount={item.discount}
                data_registration={item.data_registration}
                state={item.state}
                />
            })
        }
    </div>;
};

export default HistoryOperationBooksList;
