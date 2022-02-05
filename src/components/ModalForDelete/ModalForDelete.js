import classes from './ModalForDelete.module.css'
import Modal from '../UI/modal/ModalWindow';
import Button from '../UI/Button/Button'

const ModalForDelete = ({id,full_name,onCloseModal}) => {
    const onCloseModalHundler=()=> {
        onCloseModal(false)
    }
  return <Modal>
      <div className={classes.containerForContent}>
          <div className={classes.containerForText}>
              <p>Вы уверены, что хотите удалить</p>
              <p><b className={classes.name}>{full_name}</b> ?</p>
          </div>
          <div className={classes.containerForButtons}>
              <Button 
              className={classes.selectButton} 
              onClick={onCloseModalHundler}
              variant={"select"}
              >Отменить
              </Button>
              <Button
              onClick={onCloseModalHundler}
              >Удалить
              </Button>
          </div>
      </div>
  </Modal>
};

export default ModalForDelete;
