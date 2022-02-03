import { useState } from 'react'
import AudioBook from '../addAudioBook/AddAudioBook'
import ElectroBook from '../addElectroBook/AddElectroBook'
import Papperbook from '../addPapperBook/AddPapperBook'
import classes from './AddBookForm.module.css'
import UploadImageCart from '../imageUploader/UploadImageCart'
import {
	ISAUDIOBOOK,
	ISPAPPERBOOK,
	ISELECTROBOOK,
} from '../../../utils/constants'

const AddBookForm = () => {
	const [typeOfBook, setTypeOfBook] = useState(ISPAPPERBOOK)

	const isAudioChangeHandler = () => {
		setTypeOfBook(ISAUDIOBOOK)
	}

	const ISELECTROBOOKChangeHandler = () => {
		setTypeOfBook(ISELECTROBOOK)
	}
	const isBookChangeHandler = () => {
		setTypeOfBook(ISPAPPERBOOK)
	}

	const electroBook = typeOfBook === ISELECTROBOOK
	const papperBook = typeOfBook === ISPAPPERBOOK
	const audioBook = typeOfBook === ISAUDIOBOOK

	const onPaperBookSubmit = (data) => {
		console.log(data)
	}

	return (
		<form onSubmit={onPaperBookSubmit}>
			<main className={classes.adminBlog}>
				<p className={classes.uploadthreeBooks}>Загрузите 3 фото *</p>
				<UploadImageCart />
				<section className={classes.changeTypeofBook}>
					<h2 className={classes.type}>Тип</h2>
					<div className={classes.changeFormSection}>
						<label className={classes.checkbox}>
							<input
								type='radio'
								name='type'
								defaultChecked={papperBook}
								defaultValue={papperBook}
								onChange={isBookChangeHandler}
								className={classes.radioBtn}
							/>
							Бумажная
						</label>
						<label className={classes.checkbox}>
							<input
								type='radio'
								name='type'
								onChange={isAudioChangeHandler}
								defaultChecked={audioBook}
								defaultValue={audioBook}
								className={classes.radioBtn}
							/>
							Аудиокнига
						</label>
						<label className={classes.checkbox}>
							<input
								type='radio'
								name='type'
								onChange={ISELECTROBOOKChangeHandler}
								defaultChecked={electroBook}
								defaultValue={electroBook}
								className={classes.radioBtn}
							/>
							Электонная Книга
						</label>
					</div>
				</section>
				<section>
					{papperBook && <Papperbook onSubmit={onPaperBookSubmit} />}
					{audioBook && <AudioBook />}
					{electroBook && <ElectroBook />}
				</section>
			</main>
		</form>
	)
}

export default AddBookForm
