import { getImageUrl } from '../../../utils/helpers'
import classes from './SortPageCard.module.css'

const SortPageCard = ({ bookName, author, price, id }) => {
   const imgSrc = getImageUrl(id)

   return (
      <div className={classes.card}>
         <div>
            <img src={imgSrc} alt="" className={classes.img} />
         </div>
         <div>
            <p className={classes.name}>{bookName}</p>
            <p className={classes.author}>{author}</p>
            <p className={classes.price}>{price} c</p>
         </div>
      </div>
   )
}

export default SortPageCard
