import { Fragment } from 'react'
import { createPortal } from 'react-dom'
import classes from './ModalWindow.module.css'

const Backdrop = ({ onClose }) => {
   return (
      <div role="presentation" className={classes.backdrop} onClick={onClose} />
   )
}

const ModalOverlay = (children) => {
   return (
      <div className={classes.modal}>
         <div className={classes.content}>{children}</div>
      </div>
   )
}

const portalElement = document.getElementById('modal')

const Modal = ({ children, onClose }) => {
   return (
      <>
         {createPortal(<Backdrop onClose={onClose} />, portalElement)}
         {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
      </>
   )
}

export default Modal
