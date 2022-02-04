import { useState } from 'react';
import classes from './BookGenreDropdown.module.css'
import {ReactComponent as SelectIcon} from '../../../assets/icons/Vector.svg'
const genre = [
    {
      id: 'id1',
      title :'Образование',
      amount: "1234"
    },
    {
      id: 'id2',
      title :'Художественнная лит...',
      amount: "1234"
    },
    {
      id: 'id3',
      title :'Книги для детей',
      amount: "1234"
    },
    {
      id: 'id4',
      title :'Наука и техника',
      amount: "1234"
    },
    {
      id: 'id5',
      title :'Общество',
      amount: "1234"
    },
    {
      id: 'id6',
      title :'Деловая литература',
      amount: "1234"
    },
    {
      id: 'id7',
      title :'Красота. Здоровье.Спорт',
      amount: "1234"
    },
    {
      id: 'id8',
      title :'Увлечения',
      amount: "1234"
    },{
      id: 'id9',
      title :'Красота. Здоровье.Спорт',
      amount: "1234"
    },
    {
      id: 'id10',
      title :'Увлечения',
      amount: "1234"
    },
    ]
    
    
     const BookGenreDropdown = () => {
        const [isOpen, setIsOpen] = useState(false)
        const toggling = () => setIsOpen(!isOpen)
        const [selectedOption, setSelectedOption] = useState(null)
        const onOptionClicked = value =>() => {
          setSelectedOption(value.title);
          setIsOpen(false);
        }
      
        return <div>
                    <div onClick={toggling} className={classes.selected}>
                            {selectedOption||'Жанры'} 
                            <SelectIcon className={classes.icon}/>
                    </div>
                      {isOpen && 
                    <div  className={classes.frame}> 
                        <div className={`${classes.scroll} ${classes.content}`}>
                            {genre.map(option => (
                            <ul key={option.id}>
                                    <li onClick={onOptionClicked(option)}>
                                            {
                                              <div className={classes.items} key ={option.id}>
                                                <p className={classes.title}>{option.title}</p> 
                                                <p className={classes.amount}>{option.amount}</p>
                                            </div> }
                                    </li>
                            </ul>
                            ))} 
                        </div>
                    </div>}
             </div>;
      };
      
    export default BookGenreDropdown;

    