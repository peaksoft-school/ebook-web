import classes from './BottomPartBookPage.module.css'
import SwitchButtons from './SwitchButtons/SwitchButtons';
import ChangeText from './ChangeText/ChangeText';
import { useState } from 'react';

const BottomPartBookPage = ({booklist}) => {
  const [transition,setTransition] = useState('about')

    const redirectToAbout=()=> {
        setTransition('about')
      }
      const redirectToFragment=()=> {
        setTransition('fragment')
      }

    return <div className={classes.containerForInformationAboutBook}>
        <div className={classes.containerForAboutBookAndFragment}>
            <SwitchButtons
            redirectToAbout={redirectToAbout}
            redirectToFragment={redirectToFragment}
            booklist={booklist}
            transition={transition}
            />
            <ChangeText
            booklist={booklist}
            transition={transition}
            />
        </div>
        <img className={classes.thirdImage} src={booklist.thirdImage} alt='some images'/>
    </div>
};

export default BottomPartBookPage;
