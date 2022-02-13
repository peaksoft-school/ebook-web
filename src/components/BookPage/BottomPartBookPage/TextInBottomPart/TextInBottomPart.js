import classes from './TextInBottomPart.module.css'

const TextInBottomPart = (props) => {
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

export default TextInBottomPart;
