import classes from './ModalForDelete.module.css'
import Modal from '../modal/ModalWindow'
import Button from '../Button/Button'

<<<<<<< HEAD
const ModalForDelete = ({ id, full_name, onClose, onDelete }) => {
=======
const ModalForDelete = ({ fullName, onClose, onDelete }) => {
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
   return (
      <Modal>
         <div className={classes.containerForContent}>
            <div className={classes.containerForText}>
               <p>Вы уверены, что хотите удалить</p>
               <p>
<<<<<<< HEAD
                  <b className={classes.name}>{full_name}</b> ?
=======
                  <b className={classes.name}>{fullName}</b> ?
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
               </p>
            </div>
            <div className={classes.containerForButtons}>
               <Button
                  className={classes.selectButton}
                  onClick={onClose}
                  variant="select"
               >
                  Отменить
               </Button>
               <Button onClick={onDelete}>Удалить</Button>
            </div>
         </div>
      </Modal>
   )
}

export default ModalForDelete
