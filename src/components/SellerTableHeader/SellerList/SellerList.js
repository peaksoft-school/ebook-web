import classes from './SellerList.module.css'
import SellerItem from './SellerItem/SellerItem';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { userlist } from '../../../utils/constants/mock-data';

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
    <Outlet />
  </div>;
};

export default SellerList;
