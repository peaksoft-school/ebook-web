import { useState } from 'react';
import classes from './BookTypeDropdown.module.css'
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
    },
    
    ]
    
    
     const BookGenreDropdown = () => {
        const [isOpen, setIsOpen] = useState(false)
        const toggling = () => setIsOpen(!isOpen)
        const [selectedOption, setSelectedOption] = useState(null)
        const onOptionClicked = value =>() => {
          setSelectedOption(value);
          setIsOpen(false);
        }
      
        return <div>
                    <div onClick={toggling} className={classes.selected}>
                            {selectedOption||'Genre'} 
                            <SelectIcon className={classes.icon}/>
                    </div>
                      {isOpen && 
                    <div  className={classes.frame}> 
                        <div className={`${classes.scroll} ${classes.content}`}>
                            {genre.map(option => (
                            <ul>
                                    <li 
                                        onClick={onOptionClicked(option)} 
                                        key={option}>
                                            {option}
                                    </li>
                            </ul>
                            ))} 
                        </div>
                    </div>}
             </div>;
      };
      
    export default BookGenreDropdown;

    // export const BookGenrePopUp = props => {
    //   return <div className={classes.frame}>
    //     <div className={`${classes.scroll} ${classes.content}`}>
    //         {genre.map (item => 
    //         <div className={classes.items} key ={item.id}>
    //           <p className={classes.title}>{item.title}</p> 
    //           <p className={classes.amount}>{item.amount}</p>
    //         </div>)}
    //         </div>
    //     </div>;
    // };