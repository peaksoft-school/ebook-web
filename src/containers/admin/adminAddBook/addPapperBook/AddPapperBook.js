<<<<<<< HEAD
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
=======
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
import { useForm } from 'react-hook-form'
import classes from './AddPapperBook.module.css'
import WrapperOfForms from '../../../../components/admin/wrapperOfAdminBook/WrapperOfForm'
import Input from '../../../../components/UI/input/Input'
import CustomSelect from '../../../../components/UI/customSelect/CustomSelect'
import CustomTextarea from '../../../../components/UI/customTextarea/CustomTextarea'
import CustomCheckbox from '../../../../components/UI/customCheckbox/CustomCheckbox'

const schema = yup.object().shape({
   bookName: yup.string().required('Book name should be required please'),
   author: yup.string().required('Author should be required please'),
   publishingHouse: yup
      .string()
      .required('Publishinghouse should be required please'),
   description: yup.string().required('Description should be required please'),
   fragment: yup.string().required('Fragment should be required please'),
   language: yup.string().required('Language should be required please'),
   pageSize: yup.number().required('Pagesize should be required please'),
   price: yup.string().required('Price should be required please'),
   dataOfIssue: yup
      .number()
      .max(12 > 5)
      .required('Dataofissue should be required please'),
   quantityOfBooks: yup
      .number()
      .required('Quantity of Books should be required please'),
})

const Papperbook = (props) => {
   const { onSubmit } = props

<<<<<<< HEAD
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) })
=======
   const { register, handleSubmit } = useForm({ mode: 'onTouched' })
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178

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

   const getOptionLabel = (item) => item.title

   const getOptionValue = (item) => item.value

   return (
      <WrapperOfForms>
         <div className={classes.rightSection} onSubmit={submitHandler}>
            <Input
               label="Название книги"
<<<<<<< HEAD
               {...register('bookName')}
=======
               {...register('nameOfBook', {
                  required: true,
                  min: 1,
               })}
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
               type="text"
               placeholder="Напишите полное название книги"
               className={classes.rightSectionInput}
               id="name"
<<<<<<< HEAD
               hasError={errors.bookName}
=======
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
            />
            <Input
               label="ФИО автора"
               type="text"
               placeholder="Напишите ФИО автора"
<<<<<<< HEAD
               {...register('author')}
               className={classes.rightSectionInput}
               id="author"
               hasError={errors.author}
=======
               {...register('FIO', {
                  required: true,
               })}
               className={classes.rightSectionInput}
               id="author"
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
            />
            <CustomSelect
               label="Выберите жанр"
               data={genres}
               getOptionLabel={getOptionLabel}
               getOptionValue={getOptionValue}
               className={classes.rightSectionSelect}
               initialstate="Литература, роман, стихи... "
<<<<<<< HEAD
               {...register('genreId')}
            />
            <Input
               label="Издательство"
               {...register('publishingHouse')}
=======
               {...register('janr', { required: true })}
            />
            <Input
               label="Издательство"
               {...register('izdatelstvo', {
                  required: true,
                  minLength: 3,
               })}
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
               type="text"
               placeholder="Напишите название издательства"
               className={classes.rightSectionInput}
               id="izdatelstvo"
<<<<<<< HEAD
               hasError={errors.publishingHouse}
            />
            <CustomTextarea
               label="O книге"
               {...register('description')}
               placeholder="Напишите о книге"
               maxlengthofletters="1234"
               maxLength="1234"
               className={classes.customTextarea}
               hasError={errors.description}
=======
            />
            <CustomTextarea
               label="O книге"
               {...register('aboutBook', { required: true })}
               placeholder="Напишите о книге"
               maxlengthofletters="1234"
               maxLength="1234"
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
            />
            <CustomTextarea
               label="Фрагмент книги"
               {...register('fragment')}
               placeholder="Напишите фрагмент книги"
               maxlengthofletters="9234"
               maxLength="9234"
<<<<<<< HEAD
               className={classes.customTextarea}
               hasError={errors.fragment}
=======
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
            />
         </div>
         <div className={classes.leftSection}>
            <div className={classes.settingOfBook}>
               <CustomSelect
<<<<<<< HEAD
                  {...register('language')}
=======
                  {...register('lang')}
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
                  required
                  data={languagesFromApi}
                  getOptionLabel={getOptionLabel}
                  getOptionValue={getOptionValue}
                  initialstate="Русский"
                  label="Язык"
                  className={classes.leftSideSelect}
               />
               <Input
                  label="Объем"
<<<<<<< HEAD
                  {...register('pageSize')}
=======
                  {...register('obyom')}
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
                  type="number"
                  placeholder="стр."
                  className={classes.leftSideInput}
                  id="total"
<<<<<<< HEAD
                  hasError={errors.pageSize}
               />
               <Input
                  label="Стоимость"
                  {...register('price')}
=======
               />
               <Input
                  label="Стоимость"
                  {...register('qurent')}
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
                  type="number"
                  placeholder="сом"
                  className={classes.leftSideInput}
                  id="price"
<<<<<<< HEAD
                  hasError={errors.price}
               />
               <CustomCheckbox
                  label="Бестселлер"
                  {...register('bestSeller')}
=======
               />
               <CustomCheckbox
                  label="Бестселлер"
                  {...register('bestsellers')}
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
                  className={classes.bestsellers}
               />
            </div>
            <div className={classes.settingOfPrice}>
               <Input
<<<<<<< HEAD
                  {...register('dataOfIssue')}
                  type="number"
                  maxLength="4"
=======
                  {...register('year')}
                  type="number"
                  maxLength="4"
                  step="1"
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
                  placeholder="гг"
                  label="Год выпуска"
                  className={classes.leftSideDate}
                  id="year"
<<<<<<< HEAD
                  hasError={errors.dataOfIssue}
               />
               <Input
                  label="Кол-во книг"
                  {...register('quantityOfBooks')}
=======
               />
               <Input
                  label="Кол-во книг"
                  {...register('how')}
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
                  type="number"
                  placeholder="шт."
                  className={classes.leftSideInput}
                  id="number"
<<<<<<< HEAD
                  hasError={errors.quantityOfBooks}
=======
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
               />
               <Input
                  label="Скидка"
                  {...register('discount')}
                  type="number"
                  placeholder="%"
                  className={classes.leftSideInput}
                  id="discount"
               />
               <button type="submit" className={classes.submitButton}>
<<<<<<< HEAD
                  Добавить
=======
                  Отправить
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
                  {/* Изменю как возьму custom button  */}
               </button>
            </div>
         </div>
      </WrapperOfForms>
   )
}

export default Papperbook
