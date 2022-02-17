import BlackWrapper from '../BlackWrapper/BlackWrapper'
import classes from './EBookLogo.module.css'
import ebookLogo from '../../../assets/icons/eBooK.svg'

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

export default EBookLogo
