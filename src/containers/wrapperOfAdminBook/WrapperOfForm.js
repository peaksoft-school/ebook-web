import styles from './WrapperOfForm.module.css'
const WrapperOfForms = (props) => {
	return (
			<div
				className={`${styles.mainBlogOfPapperBook} ${props.className}`}
			>
				{props.children}
			</div>
	)
}

export default WrapperOfForms
