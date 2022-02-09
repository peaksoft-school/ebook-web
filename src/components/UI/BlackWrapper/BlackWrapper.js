import classes from './BlackWrapper.module.css'

const BlackWrapper =(props)=> {
    return <div className={`${classes.BlackWrapper} ${props.className}`} style={props.size} >
        {props.children}
    </div>
}
export default BlackWrapper
