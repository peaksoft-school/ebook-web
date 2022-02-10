import classes from './VendorBooksInAdmin.module.css'
import Button from '../UI/Button/Button'
import VendorBookCard from '../UI/VendorBookCard/VendorBookCard';

const VendorBooksInAdmin = () => {
    const vendorBooks = [
        {
            id: 1,
            book: {
                url: 'https://i.pinimg.com/originals/6a/f3/87/6af387457739795e0b206aa27b17b457.jpg',
                title: "ONE PIECE",
                date: '24.12.1999',
                price: 1000000,
            }
        },
        {
            id: 2,
            book: {
                url: 'https://i.pinimg.com/originals/6a/f3/87/6af387457739795e0b206aa27b17b457.jpg',
                title: "ONE PIECE",
                date: '24.12.1999',
                price: 1000000,
            }
        },
        {
            id: 3,
            book: {
                url: 'https://i.pinimg.com/originals/6a/f3/87/6af387457739795e0b206aa27b17b457.jpg',
                title: "ONE PIECE",
                date: '24.12.1999',
                price: 1000000,
            }
        },
        {
            id: 4,
            book: {
                url: 'https://i.pinimg.com/originals/6a/f3/87/6af387457739795e0b206aa27b17b457.jpg',
                title: "ONE PIECE",
                date: '24.12.1999',
                price: 1000000,
            }
        },
        {
            id: 5,
            book: {
                url: 'https://i.pinimg.com/originals/6a/f3/87/6af387457739795e0b206aa27b17b457.jpg',
                title: "ONE PIECE",
                date: '24.12.1999',
                price: 1000000,
            }
        },
        {
            id: 6,
            book: {
                url: 'https://i.pinimg.com/originals/6a/f3/87/6af387457739795e0b206aa27b17b457.jpg',
                title: "ONE PIECE",
                date: '24.12.1999',
                price: 1000000,
            }
        },
        {
            id: 7,
            book: {
                url: 'https://i.pinimg.com/originals/6a/f3/87/6af387457739795e0b206aa27b17b457.jpg',
                title: "ONE PIECE",
                date: '24.12.1999',
                price: 1000000,
            }
        },
        {
            id: 8,
            book: {
                url: 'https://i.pinimg.com/originals/6a/f3/87/6af387457739795e0b206aa27b17b457.jpg',
                title: "ONE PIECE",
                date: '24.12.1999',
                price: 1000000,
            }
        },
    ]
  return <div className={classes.containerForVendorBookContent}>
      <div className={classes.containerForTopPartInVendorBooks}>
          <p className={classes.numberOfBooks}>всего 23 книг</p>
          {/* there will be pop up with text all */}
      </div>
      <hr className={classes.lineInVendorBooks}/>
      <div className={classes.containerForbookContnet}>
          {
              vendorBooks && vendorBooks.map((vendorbooks) => {
                  return <VendorBookCard
                  key={vendorbooks.id}
                  book={vendorbooks.book}
                  />
              })
          }
      </div>
      <div className={classes.containerForDelleteButton}>
          <Button variant={'deleteProfile'}>Удалить профиль</Button>
      </div>
  </div>;
};

export default VendorBooksInAdmin;
