import classes from './ModalForDelete.module.css'
import Modal from '../UI/modal/ModalWindow';
import Button from '../UI/Button/Button'

const ModalForDelete = () => {
  return <Modal>
      <div className={classes.containerForContent}>
          <div className={classes.containerForText}>
              <p>Вы уверены, что хотите удалить</p>
              <p><b className={classes.name}>Мыктыбек Мыктыбеков</b> ?</p>
          </div>
          <div className={classes.containerForButtons}>
              <Button className={classes.selectButton} variant={"select"}>Отменить</Button>
              <Button>Удалить</Button>
          </div>
      </div>
  </Modal>
};

export default ModalForDelete;
