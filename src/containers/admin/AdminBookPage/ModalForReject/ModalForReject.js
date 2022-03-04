import { useState } from 'react'
import classes from './ModalForReject.module.css'
import Modal from '../../../../components/UI/modal-window/ModalWindow'
import Button from '../../../../components/UI/Button/Button'

const ModalForReject = ({ sendRejectingBookHundler }) => {
   const [text, setText] = useState('')

   const saveTextHundler = (event) => {
      setText(event.target.value)
   }

   const rejectBookHundler = () => {
      sendRejectingBookHundler(text)
   }

   return (
      <Modal>
         <div>
            <h3 className={classes.title}>Причина вашего отклонения</h3>
            <textarea onChange={saveTextHundler} className={classes.textarea} />
            <div className={classes.containerForButton}>
               <Button onClick={rejectBookHundler}>Отправить</Button>
            </div>
         </div>
      </Modal>
   )
}

export default ModalForReject
