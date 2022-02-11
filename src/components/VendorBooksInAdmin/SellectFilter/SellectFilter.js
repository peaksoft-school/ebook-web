import classes from './SellectFilter.module.css'
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg'
import { useState } from 'react';
import Option from './Option/Option';

const SellectFilter = () => {
    const [keyName,setKeyName] = useState('Все')
    const [showOptions,setShowOptions] = useState(false)

    const changeKeyName=(newKeyName)=> {
        setKeyName(newKeyName)
        setShowOptions((showOptions)=> !showOptions)
    }

    const changeShowOptions=()=> {
        setShowOptions((showOptions)=> !showOptions)
    }

    return <div>
        <div onClick={changeShowOptions} className={classes.select}>
            <p className={classes.optionWithoutLine}>{keyName}</p>
            <ArrowIcon className={classes.arrowIcon}/>
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
