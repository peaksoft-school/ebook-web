import classes from './AddPapperBook.module.css'
import { useForm } from 'react-hook-form'
import WrapperOfForms from '../../../containers/wrapperOfAdminBook/WrapperOfForm'
import Input from '../../UI/input/Input'
import CustomSelect from '../../UI/customSelect/CustomSelect'
import CustomTextarea from '../../UI/customTextarea/CustomTextarea'
import CustomCheckbox from '../../UI/customCheckbox/CustomCheckbox'

const Papperbook = (props) => {
	const { onSubmit } = props

	const { register, handleSubmit } = useForm({ mode: 'onTouched' })

	const submitHandler = (event) => {
		event.preventDefault()

		handleSubmit(onSubmit)
	}

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

	const arrayValueChanges = (item) => item.value

	const arrayLabelChanges = (item) => item.title

	return (
		<WrapperOfForms>
			<div className={classes.rightSection} onSubmit={submitHandler}>
				<Input
					label={'Название книги'}
					{...register('nameOfBook', {
						required: true,
						min: 1,
					})}
					type='text'
					placeholder='Напишите полное название книги'
					className={classes.rightSectionInput}
					id='name'
				/>
				<Input
					label='ФИО автора'
					type='text'
					placeholder='Напишите ФИО автора'
					{...register('FIO', {
						required: true,
					})}
					className={classes.rightSectionInput}
					id='author'
				/>
				<CustomSelect
					label={'Выберите жанр'}
					data={genres}
					arrayValueChanges={arrayValueChanges}
					arrayLabelChanges={arrayLabelChanges}
					className={classes.rightSectionSelect}
					initialstate={'Литература, роман, стихи... '}
					{...register('janr', { required: true })}
				/>
				<Input
					label='Издательство'
					{...register('izdatelstvo', {
						required: true,
						minLength: 3,
					})}
					type='text'
					placeholder='Напишите название издательства'
					className={classes.rightSectionInput}
					id='izdatelstvo'
				/>
				<CustomTextarea
					label='O книге'
					{...register('aboutBook', { required: true })}
					placeholder='Напишите о книге'
					maxlengthofletters='1234'
					maxLength='1234'
				/>
				<CustomTextarea
					label='Фрагмент книги'
					{...register('fragment')}
					placeholder='Напишите фрагмент книги'
					maxlengthofletters='9234'
					maxLength='9234'
				/>
			</div>
			<div className={classes.leftSection}>
				<div className={classes.settingOfBook}>
					<CustomSelect
						{...register('lang')}
						required
						data={languagesFromApi}
						arrayValueChanges={arrayValueChanges}
						arrayLabelChanges={arrayLabelChanges}
						initialstate='Русский'
						label='Язык'
						className={classes.leftSideSelect}
					/>
					<Input
						label='Объем'
						{...register('obyom')}
						type='number'
						placeholder='стр.'
						className={classes.leftSideInput}
						id='total'
					/>
					<Input
						label='Стоимость'
						{...register('qurent')}
						type='number'
						placeholder='сом'
						className={classes.leftSideInput}
						id='price'
					/>
					<CustomCheckbox
						label='Бестселлер'
						{...register('bestsellers')}
						className={classes.bestsellers}
					/>
				</div>
				<div className={classes.settingOfPrice}>
					<Input
						{...register('year')}
						type='number'
						maxLength='4'
						step='1'
						placeholder='гг'
						label='Год выпуска'
						className={classes.leftSideDate}
						id='year'
					/>
					<Input
						label='Кол-во книг'
						{...register('how')}
						type='number'
						placeholder='шт.'
						className={classes.leftSideInput}
						id='number'
					/>
					<Input
						label='Скидка'
						{...register('discount')}
						type='number'
						placeholder='%'
						className={classes.leftSideInput}
						id='discount'
					/>
					<button type='submit' className={classes.submitButton}>
						Отправить
						{/* Изменю как возьму custom button  */}
					</button>
				</div>
			</div>
		</WrapperOfForms>
	)
}

export default Papperbook
