import { createPortal } from 'react-dom'
import classes from './ModalWindow.module.css'

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	)
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
	return (
		<main>
			<Backdrop />
			<ModalOverlay >
				{props.children}
			</ModalOverlay>
			{createPortal(<Backdrop onClose={props.setIsModal}/>, portalElement)}
			{createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement,
			)}
		</main>
	)
}

export default Modal
