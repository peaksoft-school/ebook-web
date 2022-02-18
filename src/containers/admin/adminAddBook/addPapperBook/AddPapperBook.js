import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
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
   genres: yup.string().required('Description should be required please'),
   fragment: yup.string().required('Fragment should be required please'),
   language: yup.string().required('Language should be required please'),
   pageSize: yup.number().required('Pagesize should be required please'),
   price: yup.number().required('Price should be required please'),
   discount: yup.number().required('Price should be required please'),
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

   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm({
      mode: 'all',
      resolver: yupResolver(schema),
   })

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
               {...register('bookName')}
               type="text"
               placeholder="Напишите полное название книги"
               className={classes.rightSectionInput}
               id="name"
               hasError={errors.bookName}
            />
            <Input
               label="ФИО автора"
               type="text"
               placeholder="Напишите ФИО автора"
               {...register('author')}
               className={classes.rightSectionInput}
               id="author"
               hasError={errors.author}
            />
            <CustomSelect
               label="Выберите жанр"
               data={genres}
               getOptionLabel={getOptionLabel}
               getOptionValue={getOptionValue}
               className={classes.rightSectionSelect}
               initialstate="Литература, роман, стихи... "
               {...register('genres')}
               hasError={errors.genres}
            />
            <Input
               label="Издательство"
               {...register('publishingHouse')}
               type="text"
               placeholder="Напишите название издательства"
               className={classes.rightSectionInput}
               id="izdatelstvo"
               hasError={errors.publishingHouse}
            />
            <CustomTextarea
               label="O книге"
               {...register('description')}
               placeholder="Напишите о книге"
               maxlengthofletters="1234"
               maxLength="1234"
               className={classes.textAreaClass}
               hasError={errors.description}
            />
            <CustomTextarea
               label="Фрагмент книги"
               {...register('fragment')}
               placeholder="Напишите фрагмент книги"
               maxlengthofletters="9234"
               maxLength="9234"
               className={classes.textAreaClass}
               hasError={errors.fragment}
            />
         </div>
         <div className={classes.leftSection}>
            <div className={classes.settingOfBook}>
               <CustomSelect
                  {...register('language')}
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
                  {...register('pageSize')}
                  type="number"
                  placeholder="стр."
                  className={classes.leftSideInput}
                  id="total"
               />
               <Input
                  label="Стоимость"
                  {...register('price')}
                  type="number"
                  placeholder="сом"
                  className={classes.leftSideInput}
                  id="price"
                  hasError={errors.price}
               />
               <CustomCheckbox
                  label="Бестселлер"
                  {...register('bestsellers')}
                  className={classes.bestsellers}
               />
            </div>
            <div className={classes.settingOfPrice}>
               <Input
                  {...register('dataOfIssue')}
                  type="number"
                  maxLength="4"
                  step="1"
                  placeholder="гг"
                  label="Год выпуска"
                  className={classes.leftSideDate}
                  id="year"
                  hasError={errors.dataOfIssue}
               />
               <Input
                  label="Кол-во книг"
                  {...register('quantityOfBooks')}
                  type="number"
                  placeholder="шт."
                  className={classes.leftSideInput}
                  id="number"
                  hasError={errors.quantityOfBooks}
               />
               <Input
                  label="Скидка"
                  {...register('discount')}
                  type="number"
                  placeholder="%"
                  className={classes.leftSideInput}
                  id="discount"
               />
               <button
                  type="submit"
                  className={classes.submitButton}
                  disabled={!isValid}
               >
                  Отправить
               </button>
            </div>
         </div>
      </WrapperOfForms>
   )
}

export default Papperbook
