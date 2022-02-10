import classes from './ContainerForBriefInformation.module.css'

const ContainerForBriefInformation = ({booklist}) => {
    return <div className={classes.containerForBriefInformation}>
        <div className={classes.smallContainerForBriefInformation}>
            <p>Автор</p>
            <p>Жанр</p>
            <p>Язык</p>
            <p>Издательство</p>
            <p>Год выпуска</p>
            {booklist.book_type === 'electronic' && <p>Обьем</p>}
            {booklist.book_type === 'audio' && <p>Длительность</p>}
        </div>
        <div className={classes.smallContainerForBriefInformation}>
            <p>{booklist.author}</p>
            <p>{booklist.genre}</p>
            <p>{booklist.language}</p>
            <p>{booklist.publishing_house}</p>
            <p>{booklist.year_of_issue}</p>
            {booklist.book_type === 'electronic' && <p>{booklist.volume} стр</p>}
            {booklist.book_type === 'audio' && <p>{booklist.duration}</p>}
        </div>
    </div>
};

export default ContainerForBriefInformation;
