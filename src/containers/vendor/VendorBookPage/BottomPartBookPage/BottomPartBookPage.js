import { useState } from 'react'
import classes from './BottomPartBookPage.module.css'
import SwitchButtons from './SwitchButtons/SwitchButtons'
import TextInBottomPart from './TextInBottomPart/TextInBottomPart'

const BottomPartBookPage = ({ book }) => {
   const [transition, setTransition] = useState('about')

   const redirectToAbout = () => {
      setTransition('about')
   }

   const redirectToFragment = () => {
      setTransition('fragment')
   }

   return (
      <div className={classes.containerForInformationAboutBook}>
         <div className={classes.containerForAboutBookAndFragment}>
            <SwitchButtons
               redirectToAbout={redirectToAbout}
               redirectToFragment={redirectToFragment}
               book={book}
               transition={transition}
            />
            <TextInBottomPart book={book} transition={transition} />
         </div>
         <img
            className={classes.thirdImage}
            src={book.thirdImage}
            alt="some images"
         />
      </div>
   )
}

export default BottomPartBookPage
