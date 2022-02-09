import classes from './SellerList.module.css'
import SellerItem from './SellerItem/SellerItem';

const SellerList = ({sellerList}) => {
  return <div>
        {
        sellerList && <ol className={classes.list}>
            {sellerList !== [] && sellerList.map((seller)=> {
                return <SellerItem
                  first_name={seller.first_name}
                  last_name={seller.last_name}
                  phone_number={seller.phone_number}
                  email={seller.email}
                  booksum={seller.booksum}
                  id={seller.id}
                  key={seller.id}
                  />
            })}
        </ol>
        }
  </div>;
};

export default SellerList;
