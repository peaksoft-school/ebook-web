import BlackWrapper from '../BlackWrapper/BlackWrapper'
import classes from './EBookLogo.module.css'
import ebookLogo from '../../../assets/icons/eBooK.svg'
import AuthModal from "../../auth/authModal/AuthModal";
import { useState } from "react";

<<<<<<< HEAD
const EBookLogo = props => {
  const [state,setState] = useState(false)
  const modalChangeHandler = () => {
    setState(prevState => !prevState)
  }
  return <BlackWrapper className={`${classes.ebookbox} ${props.className}`}>
      <img className={`${classes.ebookLogo} `} src={ebookLogo} alt="ebook logo" onClick={modalChangeHandler}/>
      {state && <AuthModal onClose={modalChangeHandler}/>}
  </BlackWrapper>;
};
=======
const EBookLogo = (props) => {
   const { propsClassName } = props
   return (
      <BlackWrapper className={`${classes.ebookbox} ${propsClassName}`}>
         <img
            className={`${classes.ebookLogo} `}
            src={ebookLogo}
            alt="ebook logo"
         />
      </BlackWrapper>
   )
}
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178

export default EBookLogo
