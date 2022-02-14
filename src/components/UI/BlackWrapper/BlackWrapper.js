import classes from './BlackWrapper.module.css'

const BlackWrapper = ({ className, size, children }) => {
   return (
      <div className={`${classes.BlackWrapper} ${className}`} style={size}>
         {children}
      </div>
   )
}
export default BlackWrapper
