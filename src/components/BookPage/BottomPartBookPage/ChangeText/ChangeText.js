import classes from './ChangeText.module.css'

const ChangeText = (props) => {
    const {booklist, transition} = props
    return <div>
        {
            transition === 'about' 
            && <p className={classes.textAbout}>
            {booklist.book_about}
            </p>
        }
        {
            transition === 'fragment' 
            && <p className={classes.textFragment}>
            {booklist.book_fragment}
            </p>
        }
    </div>;
};

export default ChangeText;
