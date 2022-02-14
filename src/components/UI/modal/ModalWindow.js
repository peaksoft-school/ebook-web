import { createPortal } from 'react-dom'
import classes from './ModalWindow.module.css'

const Backdrop = (props) => {
   const { onClose } = props
   return (
      <div
         className={classes.backdrop}
         onClick={onClose}
         onKeyUp={onClose}
         role="presentation"
      />
   )
}

const ModalOverlay = (props) => {
   const { children } = props
   return (
      <div className={classes.modal}>
         <div className={classes.content}>{children}</div>
      </div>
   )
}

const portalElement = document.getElementById('modal')

const Modal = (props) => {
   const { onClose, children } = props
   return (
      <>
         {createPortal(<Backdrop onClose={onClose} />, portalElement)}
         {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
      </>
   )
}

export default Modal
