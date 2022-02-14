import BlackWrapper from "../BlackWrapper/BlackWrapper"
import classes from './EBookLogo.module.css'
import ebookLogo from '../../../assets/icons/eBooK.svg'
import AuthModal from "../../auth/authModal/AuthModal";
import { useState } from "react";

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

export default EBookLogo;
