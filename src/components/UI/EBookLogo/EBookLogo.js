import BlackWrapper from '../BlackWrapper/BlackWrapper'
import classes from './EBookLogo.module.css'
import ebookLogo from '../../../assets/icons/eBooK.svg'

const EBookLogo = ({ className }) => {
   return (
      <BlackWrapper className={`${classes.ebookbox} ${className}`}>
         <img
            className={`${classes.ebookLogo} `}
            src={ebookLogo}
            alt="ebook logo"
         />
      </BlackWrapper>
   )
}

export default EBookLogo
