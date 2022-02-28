import classes from './TextInBottomPart.module.css'

const TextInBottomPart = (props) => {
   const { book, transition } = props
   return (
      <div>
         {transition === 'about' && (
            <p className={classes.textAbout}>{book.book_about}</p>
         )}
         {transition === 'fragment' && (
            <p className={classes.textFragment}>{book.book_fragment}</p>
         )}
      </div>
   )
}

export default TextInBottomPart
