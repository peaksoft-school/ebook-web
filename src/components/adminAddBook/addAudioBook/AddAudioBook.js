import classes from './AddAudioBook.module.css'
import WrapperOfForms from '../../../containers/wrapperOfAdminBook/WrapperOfForm'
import Input from '../../UI/input/Input'
import CustomCheckbox from '../../../components/UI/customCheckbox/CustomCheckbox'
import CustomTextarea from '../../UI/customTextarea/CustomTextarea'
import CustomSelect from '../../UI/customSelect/CustomSelect'
import { ReactComponent as Uploadsvg } from '../../../assets/icons/upload.svg'

const AudioBook = () => {
	const genres = [
		{ value: 'chocolate', title: 'Литература' },
		{ value: 'strawberry', title: 'Роман' },
		{ value: 'vanilla', title: 'Трагедия' },
	]

	const languagesFromApi = [
		{ value: 'f1', title: 'Русский' },
		{ value: 'f2', title: 'Немецкий' },
		{ value: 'f3', title: 'English' },
	]

	const getOptionLabel = (item) => item.title

	const getOptionValue = (item) => item.value

	return (
		<WrapperOfForms>
			<section className={classes.rightSection}>
				<Input
					label={'Название книги'}
					type='text'
					placeholder='Напишите полное название книги'
					className={classes.rightSectionInput}
					id='nameOfBook'
				/>
				<Input
					label='ФИО автора'
					type='text'
					placeholder='Напишите ФИО автора'
					className={classes.rightSectionInput}
					id='author'
				/>
				<CustomSelect
					label={'Выберите жанр'}
					data={genres}
					className={classes.rightSectionSelect}
					initialstate={'Литература, роман, стихи... '}
					getOptionValue={getOptionValue}
					getOptionLabel={getOptionLabel}
				/>
				<CustomTextarea
					label='O книге'
					placeholder='Напишите о книге'
					maxlengthofletters='1234'
					maxLength='1234'
				/>
			</section>
			<section className={classes.leftSection}>
				<section className={classes.settingOfBook}>
					<div className={classes.languages}>
						<CustomSelect
							required
							data={languagesFromApi}
							initialstate='Русский'
							label='Язык'
							className={classes.leftSideSelect}
							getOptionValue={getOptionValue}
							getOptionLabel={getOptionLabel}
						/>
						<Input
							type='number'
							maxLength='4'
							step='1'
							placeholder='гг'
							label='Год выпуска'
							className={classes.leftSideDate}
							id='year'
						/>
					</div>
					<div className={classes.timecontrol}>
						<Input
							label='Длительность'
							onFocus={(e) => (e.target.type = 'time')}
							step='1'
							placeholder='ч'
							className={classes.leftSideInputTimeFirst}
							id='time'
						/>
						<Input
							label='Длительность'
							step='1'
							placeholder='мин'
							className={classes.leftSideInputTime}
							id='time'
						/>
						<Input
							label='Длительность'
							step='1'
							placeholder='сек'
							className={classes.leftSideInputTime}
							id='time'
						/>
					</div>
					<div className={classes.bestsellerControll}>
						<CustomCheckbox
							label='Бестселлер'
							className={classes.bestseller}
						/>
					</div>
					<div className={classes.priceControl}>
						<Input
							label='Стоимость'
							type='number'
							placeholder='сом'
							className={classes.leftSideInput}
							id='price'
						/>
						<Input
							label='Скидка'
							type='number'
							placeholder='%'
							className={classes.leftSideInput}
							id='discount'
						/>
					</div>
					<div className={classes.uploadFrag}>
						<h1 className={classes.uploadFragText}>
							Загрузите фрагмент аудиозаписи
						</h1>
						<div className={classes.flexBoxed}>
							<Input
								type='file'
								label='Загрузите аудиозапись'
								className={classes.fix}
								accept='audio/mp3'
								id='upload'
							/>
							<span className={classes.maximumLenght}>
								максимум 10 мин.
							</span>
						</div>
						<Uploadsvg className={classes.uploadSvg} />
						<h1 className={classes.uploadFragText}>
							Загрузите аудиозапись
						</h1>
						<Input
							type='file'
							label='Загрузите аудиозапись'
							className={classes.fix}
							accept='audio/mp3'
							id='uploadBook'
						/>
						<Uploadsvg className={classes.uploadSvg} />
					</div>
					<button className={classes.submitButton}>Отправить</button>
				</section>
			</section>
		</WrapperOfForms>
	)
}

export default AudioBook
