import classes from './SellerList.module.css'
import SellerItem from './SellerItem/SellerItem';

const SellerList = ({sellerList}) => {
  return <div>
        {
        sellerList && <ol className={classes.list}>
            {sellerList !== [] && sellerList.map((seller)=> {
                return <SellerItem
                  key={seller.id}
                  first_name={seller.first_name}
                  last_name={seller.last_name}
                  phone_number={seller.phone_number}
                  email={seller.email}
                  booksum={seller.booksum}
                  />
            })}
        </ol>
        }
  </div>;
};

export default SellerList;
