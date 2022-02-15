import classes from './WhiteWrapper.module.css'

const WhiteWrapper = ({ children, className }) => {
   return (
      <div className={`${classes.WhiteWrapper} ${className}`}>{children}</div>
   )
}
export default WhiteWrapper
