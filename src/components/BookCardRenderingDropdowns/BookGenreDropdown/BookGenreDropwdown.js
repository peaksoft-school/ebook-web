import { useState } from 'react'
import classes from './BookGenreDropdown.module.css'
import { ReactComponent as SelectIcon } from '../../../assets/icons/Vector.svg'

const BookGenreDropdown = ({ onSelectOption, genre }) => {
   const [isOpen, setIsOpen] = useState(false)
   const toggling = () => setIsOpen(!isOpen)
   const [selectedOption, setSelectedOption] = useState(null)
   const onOptionClicked = (value) => () => {
      setSelectedOption(value.title)
      setIsOpen(false)
   }

   return (
      <div>
         <div
            role="presentation"
            onClick={toggling}
            className={classes.selected}
         >
            {selectedOption || 'Жанры'}
            <SelectIcon className={classes.icon} />
         </div>
         {isOpen && (
            <div className={classes.frame}>
               <div className={`${classes.scroll} ${classes.content}`}>
                  <ul>
                     {genre.map((option) => (
                        <li
                           role="presentation"
                           onClick={onOptionClicked(option)}
                           key={option.id}
                           onSelect={onSelectOption}
                        >
                           <div className={classes.items}>
                              <p className={classes.title}>{option.title}</p>
                              <p className={classes.amount}>{option.amount}</p>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         )}
      </div>
   )
}

export default BookGenreDropdown
