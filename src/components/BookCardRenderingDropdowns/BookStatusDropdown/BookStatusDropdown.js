import { useState } from 'react';
import classes from './BookStatusDropdown.module.css'
import {ReactComponent as SelectIcon} from '../../../assets/icons/Vector.svg'
  
  const options = [
   {title: 'Все', value: 'ALL'},
   {title: 'В избранном', value: 'LIKED'},
   {title: 'В корзине', value: 'CART'},
   {title: 'Проданы', value: 'SOLD'},
   {title: 'Со скидками', value: 'DISCOUNT'}
  ]
 const BookStatusDropdown = props => {
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
                        <ul>
                        {options.map(option => (
                                <li 
                                 key={option.value} 
                                 value={option.value} 
                                 onClick={onOptionClicked(option.title)} 
                                 onSelect={props.onSelectOption}>
                                        {option.title}
                                    {option.title === 'Со скидками'
                                    ? !<hr className={classes.line2}/> 
                                    : <hr className={classes.line2}/> 
                                }
                                </li>
                                 ))}     
                        </ul>
                    </div>
                </div>}
         </div>;
  };
  
export default BookStatusDropdown;
 