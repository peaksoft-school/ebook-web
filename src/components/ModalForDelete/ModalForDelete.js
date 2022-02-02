import classes from './ModalForDelete.module.css'
import Modal from '../UI/modal/ModalWindow';
import Button from '../UI/Button/Button'
import { useState } from 'react';

const ModalForDelete = ({id,full_name,ExitHundler}) => {
    const [isShowModal,setShowModal]= useState(ExitHundler)
    console.log(isShowModal)
  return <Modal>
      <div className={classes.containerForContent}>
          <div className={classes.containerForText}>
              <p>Вы уверены, что хотите удалить</p>
              <p><b className={classes.name}>{full_name}</b> ?</p>
          </div>
          <div className={classes.containerForButtons}>
              <Button 
              className={classes.selectButton} 
              variant={"select"}
            //   onClick={onExitHundler}
              >Отменить
              </Button>
              <Button>Удалить</Button>
          </div>
      </div>
  </Modal>
};

export default ModalForDelete;
