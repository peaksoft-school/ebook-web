import { useEffect, useState } from 'react'
import classes from './BookActionButtons.module.css'
import Button from '../../../../../components/UI/Button/Button'
import ModalForReject from '../../ModalForReject/ModalForReject'
import ModalForAccept from '../../ModalForAccept/ModalForAccept'

const BookActionButtons = ({
   bookName,
   bookId,
   sendRequestRejectingBook,
   sendRequestAcceptingBook,
}) => {
   const [isShowRejectModal, setShowRejectModal] = useState(false)
   const [isShowAcceptModal, setShowAcceptModal] = useState(false)

   const showRejectModal = () => {
      setShowRejectModal((isShowRejectModal) => !isShowRejectModal)
   }

   const showAcceptModal = () => {
      setShowAcceptModal((isShowAcceptModal) => !isShowAcceptModal)
      sendRequestAcceptingBook(bookId)
   }

   const checkAccepting = isShowAcceptModal === true
   useEffect(() => {
      const acceptTimer = setTimeout(() => {
         showAcceptModal()
      }, 1500)
      if (checkAccepting) {
         return acceptTimer
      }
      return () => {
         clearTimeout(acceptTimer)
      }
   }, [checkAccepting])

   const sendRejectingBookHundler = (sendingText) => {
      setShowRejectModal((isShowRejectModal) => !isShowRejectModal)
      sendRequestRejectingBook(sendingText)
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

export default BookActionButtons
