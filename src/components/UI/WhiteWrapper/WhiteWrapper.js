import classes from './WhiteWrapper.module.css'
const WhiteWrapper =(props)=> {
    return <div className={`${classes.WhiteWrapper} ${props.className}`} >
        {props.children}
    </div>
}
export default WhiteWrapper