import classes from './VendorBooksInAdmin.module.css'
import Button from '../UI/Button/Button'
import VendorBookCard from '../UI/VendorBookCard/VendorBookCard';

const VendorBooksInAdmin = () => {
    // const vendorBooks = [
    //     {
    //         id: 1,
    //         book: {
    //             url: 'https://anifilm.tv/static/upload/releases/poster/975-boku-dake-ga-inai-machi-1493399141.jpg'
    //         }
    //     }
    // ]
  return <div className={classes.containerForVendorBookContent}>
      <div className={classes.containerForTopPartInVendorBooks}>
          <p className={classes.numberOfBooks}>всего 23 книг</p>
          {/* there will be pop up with text all */}
      </div>
      <hr className={classes.lineInVendorBooks}/>
      <div>
          {/* {
              vendorBooks.map((vendorbooks) => {
                  <VendorBookCard/>
              })
          } */}
      </div>
      <div className={classes.containerForDelleteButton}>
          <Button variant={'deleteProfile'}>Удалить профиль</Button>
      </div>
  </div>;
};

export default VendorBooksInAdmin;
