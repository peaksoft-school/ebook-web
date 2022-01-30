import classes from './SwitchButtons.module.css'

const SwitchButtons = (props) => {
    const {booklist,transition,redirectToAbout,redirectToFragment} = props

    return <div className={classes.containerForSwitch}>
        <button 
        className={transition === 'about'? 
        classes.redirectActiveButton 
        : classes.redirectButton} 
        onClick={redirectToAbout}>
            О книге
        </button>
        {
            booklist.book_type === 'electronic' &&
            <button 
            className={transition === 'fragment'? 
            classes.redirectActiveButton 
            : classes.redirectButton} 
            onClick={redirectToFragment}>
                Читать фрагмент
            </button>
        }
    </div>
};

export default SwitchButtons;
