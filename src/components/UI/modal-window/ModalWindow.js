import { Fragment } from 'react'
import { createPortal } from 'react-dom'
import classes from './ModalWindow.module.css'

<<<<<<< HEAD
const Backdrop = (props) => {
   const { onClose } = props
   return (
      <div className={classes.backdrop} onClick={onClose} role="presentation" />
   )
}

const ModalOverlay = (props) => {
   const children = props
=======
const Backdrop = ({ onClose }) => {
   return (
      <div role="presentation" className={classes.backdrop} onClick={onClose} />
   )
}

const ModalOverlay = (children) => {
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
   return (
      <div className={classes.modal}>
         <div className={classes.content}>{children}</div>
      </div>
   )
}

const portalElement = document.getElementById('modal')

<<<<<<< HEAD
const Modal = (props) => {
   const { onClose, children } = props
=======
const Modal = ({ children, onClose }) => {
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
   return (
      <>
         {createPortal(<Backdrop onClose={onClose} />, portalElement)}
         {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
      </>
   )
}

export default Modal
