import { useEffect, useState } from 'react'
import classes from './Buttons.module.css'
import Button from '../../../../../components/UI/Button/Button'
import ModalForReject from '../../ModalForReject/ModalForReject'
import ModalForAccept from '../../ModalForAccept/ModalForAccept'

const Buttons = ({ bookName }) => {
   const [isShowRejectModal, setShowRejectModal] = useState(false)
   const [isShowAcceptModal, setShowAcceptModal] = useState(false)

   const showRejectModal = () => {
      setShowRejectModal((isShowRejectModal) => !isShowRejectModal)
   }

   const showAcceptModal = () => {
      setShowAcceptModal((isShowAcceptModal) => !isShowAcceptModal)
   }

   const checkAccepting = isShowAcceptModal === true
   useEffect(() => {
      if (checkAccepting) {
         setTimeout(() => {
            showAcceptModal()
         }, 2000)
      }
   }, [checkAccepting])

   const sendRejectingBookHundler = (sendingText) => {
      setShowRejectModal((isShowRejectModal) => !isShowRejectModal)
      // пока нету api отклонения
      console.log(sendingText)
   }

   return (
      <div className={classes.containerForBtn}>
         <Button
            onClick={showRejectModal}
            variant="light"
            className={classes.button}
         >
            Отклонить
         </Button>
         <Button
            onClick={showAcceptModal}
            variant="secondary"
            className={classes.button}
         >
            Принять
         </Button>
         {isShowRejectModal && (
            <ModalForReject
               sendRejectingBookHundler={sendRejectingBookHundler}
            />
         )}
         {isShowAcceptModal && <ModalForAccept bookName={bookName} />}
      </div>
   )
}

export default Buttons
