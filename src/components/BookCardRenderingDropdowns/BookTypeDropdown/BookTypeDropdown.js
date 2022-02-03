import { useState } from 'react';
import classes from './BookTypeDropdown.module.css'
import {ReactComponent as SelectIcon} from '../../../assets/icons/Vector.svg'
  
  const options = [
    'Бумажные книги',
    'Аудиокниги',
    'Электронные книги',
  ]

 const BookTypeDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggling = () => setIsOpen(!isOpen)
    const [selectedOption, setSelectedOption] = useState(null)
    const onOptionClicked = value =>() => {
      setSelectedOption(value);
      setIsOpen(false);
    }
  
    return <div>
                <div onClick={toggling} className={classes.selected}>
                        {selectedOption||'Все'} 
                        <SelectIcon className={classes.icon}/>
                </div>
                  {isOpen && 
                <div  className={classes.container2}> 
                    <div className={classes.context}>
                        {options.map(option => (
                        <ul>
                                <li onClick={onOptionClicked(option)} key={option}>{option}</li>
                                {option == 'Электронные книги'? !(<hr className={classes.line2}/>) : <hr className={classes.line2}/> }
                        </ul>
                        ))} 
                    </div>
                </div>}
         </div>;
  };
  
export default BookTypeDropdown;