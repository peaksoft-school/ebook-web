// export const BusketPopUp = props => {
//     return <div>
//         <ul>
//           <li onClick={props.onClick}>{props.option}</li>
//           {props.option == 'Со скидками'? !<hr className={classes.line2}/> : <hr className={classes.line2}/> }
//         </ul> 
//     </div>;
//     <BusketPopUp onClick={onOptionClicked(option)} option={option} key={option}/>
//   };
  
  
  const options = [
    'Все',
    'В избранном',
    'В корзине',
    'Проданы',
    'Со скидками'
  ]
 const BookStatusDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggling = () => setIsOpen(!isOpen)
    const [selectedOption, setSelectedOption] = useState(null)
    const onOptionClicked = value =>() => {
      setSelectedOption(value);
      setIsOpen(false);
    }
  
    return <div className={classes.content}>
      <div onClick={toggling} className={classes.selected}>{selectedOption||'Все'} <SelectIcon/></div>
      {isOpen && 
       <div  className={classes.container2}> <div className={classes.context}>{options.map(option => (
        <ul>
        <li onClick={onOptionClicked(option)} key={option}>{option}</li>
        {props.option == 'Со скидками'? !<hr className={classes.line2}/> : <hr className={classes.line2}/> }
      </ul>
       ))} </div></div>}
    </div>;
  };
  
export default BookStatusDropdown
 