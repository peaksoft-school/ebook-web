import classes from './SellectFilter.module.css'
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg'
import { useState } from 'react';
import Option from './Option/Option';

const SellectFilter = ({selectedСategory}) => {
    const [keyName,setKeyName] = useState('All')
    const [showOptions,setShowOptions] = useState(false)

    const changeKeyName=(newKeyName,category)=> {
        setKeyName(newKeyName)
        setShowOptions((showOptions)=> !showOptions)
        // selectedСategory(category)
    }

    const changeShowOptions=()=> {
        setShowOptions((showOptions)=> !showOptions)
    }

    return <div>
        <div 
        onClick={changeShowOptions} 
        className={classes.select}
        >
            <p className={classes.optionWithoutLine}>{keyName}</p>
            <ArrowIcon 
            className={showOptions? 
            classes.arrowUpIcon 
            : classes.arrowDownIcon}
            />
        </div>
        {
            showOptions 
            && <div className={classes.containerForOptions}>
                <Option 
                optionName='Все'
                changeKeyName={changeKeyName}
                optionWithLine={true}
                />
                <Option 
                optionName='В избранном'
                changeKeyName={changeKeyName}
                optionWithLine={true}
                />
                <Option 
                optionName='В корзине'
                changeKeyName={changeKeyName}
                optionWithLine={true}
                />
                <Option 
                optionName='Проданы'
                changeKeyName={changeKeyName}
                optionWithLine={true}
                />
                <Option 
                optionName='Со скидками'
                changeKeyName={changeKeyName}
                optionWithLine={false}
                />
            </div>
        }
    </div>
};

export default SellectFilter;
