import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import classes from './AddPapperBook.module.css'
import WrapperOfForms from '../../../../components/admin/wrapperOfAdminBook/WrapperOfForm'
import Input from '../../../../components/UI/input/Input'
import CustomSelect from '../../../../components/UI/customSelect/CustomSelect'
import CustomTextarea from '../../../../components/UI/customTextarea/CustomTextarea'
import CustomCheckbox from '../../../../components/UI/customCheckbox/CustomCheckbox'
import GenresSelect from '../../../../components/UI/genresSelect/GenresSelect'
import { sendFileToApi, sendRequest } from '../../../../utils/helpers'
import { UPLOAD_IMAGE } from '../../../../utils/constants/urls'

const schema = yup.object().shape({
   bookName: yup.string().required(),
   author: yup.string().required(),
   publishingHouse: yup.string().required(),
   description: yup.string().required(),
   fragment: yup.string().required(),
   pageSize: yup.number().required(),
   price: yup.number().required(),
   discount: yup.number().required(),
   dataOfIssue: yup.string().required(),
   quantityOfBooks: yup
      .number()
      .required('Quantity of Books should be required please'),
})

const Papperbook = (props) => {
   const {
      languagesFromApi,
      genres,
      mainPicture,
      secondPicture,
      thirdPicture,
   } = props

   const [genreId, setGenreId] = useState('')
   const [typeOfLanguage, setTypeOfLanguage] = useState('')
   const [bestSeller, setBestseller] = useState(false)

   const onChangeLanguagesValue = (lang) => {
      setTypeOfLanguage(lang)
   }

   const onChangeGenreValue = (genreId) => {
      setGenreId(genreId)
   }

   const onChangeCheckBoxValue = (value) => {
      setBestseller(value)
   }

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: 'all',
      resolver: yupResolver(schema),
   })

   const sendMainImageToApi = () => {
      const formData = new FormData()
      formData.append('file', mainPicture.avatar)
      const requestConfig = {
         method: 'POST',
         url: UPLOAD_IMAGE,
         body: formData,
      }
      const response = sendFileToApi(requestConfig)
      return response
   }
   const sendSecondImageToApi = () => {
      const formData = new FormData()
      formData.append('file', secondPicture.avatar)
      const requestConfig = {
         method: 'POST',
         url: UPLOAD_IMAGE,
         body: formData,
      }
      const response = sendFileToApi(requestConfig)
      return response
   }
   const sendThirdImageToApi = () => {
      const formData = new FormData()
      formData.append('file', thirdPicture.avatar)
      const requestConfig = {
         method: 'POST',
         url: UPLOAD_IMAGE,
         body: formData,
      }
      const response = sendFileToApi(requestConfig)
      return response
   }

   const submitHandler = async (data) => {
      const idOfMainImage = await sendMainImageToApi()
      const idOfSecondImage = await sendSecondImageToApi()
      const idOfThirdImage = await sendThirdImageToApi()
      const {
         bookName,
         author,
         description,
         price,
         discount,
         fragment,
         quantityOfBooks,
         pageSize,
         publishingHouse,
         dataOfIssue,
      } = data
      const trasformedBook = {
         images: [idOfMainImage.id, idOfSecondImage.id, idOfThirdImage.id],
         bookName,
         author,
         description,
         price: `${price}`,
         discount: `${discount}`,
         genreId: +genreId,
         language: typeOfLanguage,
         dataOfIssue,
         bestSeller,
         book: { fragment, quantityOfBooks, pageSize, publishingHouse },
      }

      const sendPaperBookUrl = 'api/books/save/paper_book'
      const requestConfig = {
         method: 'POST',
         url: sendPaperBookUrl,
         body: trasformedBook,
      }
      const response = await sendRequest(requestConfig)
      return response
   }
   const getOptionLabel = (item) => item

   const getOptionValue = (item) => item

   return (
      <form
         onSubmit={handleSubmit(submitHandler)}
         className={classes.formControl}
      >
         <WrapperOfForms>
            <div className={classes.rightSection}>
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
               <GenresSelect
                  label="Выберите жанр"
                  data={genres}
                  className={classes.rightSectionSelect}
                  initialstate="Литература, роман, стихи... "
                  onChangeGenreValue={onChangeGenreValue}
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
                     required
                     data={languagesFromApi}
                     getOptionLabel={getOptionLabel}
                     getOptionValue={getOptionValue}
                     initialstate="Русский"
                     label="Язык"
                     className={classes.leftSideSelect}
                     onChangeLanguagesValue={onChangeLanguagesValue}
                  />
                  <Input
                     label="Объем"
                     {...register('pageSize')}
                     type="number"
                     placeholder="стр."
                     className={classes.leftSideInput}
                     id="total"
                     hasError={errors.pageSize}
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
                     className={classes.bestsellers}
                     onChangeCheckBoxValue={onChangeCheckBoxValue}
                  />
               </div>
               <div className={classes.settingOfPrice}>
                  <Input
                     {...register('dataOfIssue')}
                     // maxLength="4"
                     step="1"
                     placeholder="0000-00-00"
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
                  <button type="submit" className={classes.submitButton}>
                     Отправить
                  </button>
               </div>
            </div>
         </WrapperOfForms>
      </form>
   )
}

export default Papperbook
