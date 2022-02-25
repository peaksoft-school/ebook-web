import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import WrapperOfForms from '../../../../components/admin/wrapperOfAdminBook/WrapperOfForm'
import Input from '../../../../components/UI/input/Input'
import CustomSelect from '../../../../components/UI/customSelect/CustomSelect'
import CustomTextarea from '../../../../components/UI/customTextarea/CustomTextarea'
import CustomCheckbox from '../../../../components/UI/customCheckbox/CustomCheckbox'
import GenresSelect from '../../../../components/UI/genresSelect/GenresSelect'
import {
   SEND_ELECTRONIC_BOOK_URL,
   UPLOAD_AUDIO_FILE,
   UPLOAD_IMAGE,
} from '../../../../utils/constants/urls'
import classes from './AddElectroBook.module.css'
import PdfDropZone from '../../../../components/UI/pdfDropZone/PdfDropZone'
import { sendRequest, sendWithFormDataToApi } from '../../../../utils/helpers'

const schema = yup.object().shape({
   bookName: yup.string().required(),
   author: yup.string().required(),
   publishingHouse: yup.string().required(),
   description: yup.string().required(),
   fragment: yup.string().required(),
   price: yup.number().required(),
   dataOfIssue: yup.string().required(),
})

const ElectroBook = (props) => {
   const {
      languagesFromApi,
      genres,
      mainPicture,
      secondPicture,
      thirdPicture,
   } = props
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: 'all',
      resolver: yupResolver(schema),
   })

   const [genreId, setGenreId] = useState('')
   const [typeOfLanguage, setTypeOfLanguage] = useState('')
   const [bestSeller, setBestseller] = useState(false)

   const [pdf, setPdf] = useState({ file: {} })

   const onChangeLanguagesValue = (lang) => {
      setTypeOfLanguage(lang)
   }

   const onChangeGenreValue = (genreId) => {
      setGenreId(genreId)
   }

   const onChangeCheckBoxValue = (value) => {
      setBestseller(value)
   }

   const mainAvatar = {
      file: mainPicture.avatar,
      url: UPLOAD_IMAGE,
   }
   const secondAvatar = {
      file: secondPicture.avatar,
      url: UPLOAD_IMAGE,
   }
   const thirdAvatar = {
      file: thirdPicture.avatar,
      url: UPLOAD_IMAGE,
   }

   const pdfFileOption = {
      file: pdf.file,
      url: UPLOAD_AUDIO_FILE,
   }

   const submitHandler = async (data) => {
      const idOfMainAvatar = await sendWithFormDataToApi(mainAvatar)
      const idOfSecondAvatar = await sendWithFormDataToApi(secondAvatar)
      const idOfThirdAvatar = await sendWithFormDataToApi(thirdAvatar)

      const idOfElectronicBook = await sendWithFormDataToApi(pdfFileOption)
      const {
         author,
         bookName,
         dataOfIssue,
         description,
         discount,
         fragment,
         pageSize,
         price,
         publishingHouse,
      } = data
      const transformedData = {
         images: [idOfMainAvatar.id, idOfSecondAvatar.id, idOfThirdAvatar.id],
         bookName,
         author,
         genreId,
         description,
         typeOfLanguage,
         dataOfIssue,
         bestSeller,
         price,
         discount,
         book: {
            fragment,
            pageSize,
            publishingHouse,
            electronicBookId: idOfElectronicBook.id,
         },
      }
      const requestConfig = {
         method: 'POST',
         url: SEND_ELECTRONIC_BOOK_URL,
         body: transformedData,
      }
      const response = await sendRequest(requestConfig)
      return response
   }

   return (
      <form
         onSubmit={handleSubmit(submitHandler)}
         className={classes.formControl}
      >
         <WrapperOfForms>
            <div className={classes.rightSection}>
               <Input
                  label="Название книги"
                  type="text"
                  placeholder="Напишите полное название книги"
                  className={classes.rightSectionInput}
                  id="name"
                  {...register('bookName')}
                  hasError={errors.bookName}
               />
               <Input
                  label="ФИО автора"
                  type="text"
                  placeholder="Напишите ФИО автора"
                  className={classes.rightSectionInput}
                  id="author"
                  {...register('author')}
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
                  type="text"
                  placeholder="Напишите название издательства"
                  className={classes.rightSectionInput}
                  id="izdatelstvo"
                  {...register('publishingHouse')}
               />
               <CustomTextarea
                  label="O книге"
                  placeholder="Напишите о книге"
                  maxlengthofletters="1234"
                  maxLength="1234"
                  {...register('description')}
                  hasError={errors.description}
                  className={classes.textAreaClass}
               />
               <CustomTextarea
                  label="Фрагмент книги"
                  placeholder="Напишите фрагмент книги"
                  maxlengthofletters="9234"
                  maxLength="9234"
                  {...register('fragment')}
                  hasError={errors.fragment}
                  className={classes.textAreaClass}
               />
            </div>
            <div className={classes.containerOfSideBox}>
               <div className={classes.leftSideBox}>
                  <CustomSelect
                     required
                     data={languagesFromApi}
                     initialstate="Русский"
                     label="Язык"
                     className={classes.leftSideSelect}
                     onChangeLanguagesValue={onChangeLanguagesValue}
                  />
                  <Input
                     label="Объем"
                     type="number"
                     placeholder="стр."
                     className={classes.leftSideInput}
                     id="number"
                     {...register('pageSize')}
                     hasError={errors.pageSize}
                  />
                  <Input
                     label="Стоимость"
                     type="number"
                     placeholder="сом"
                     className={classes.leftSideInput}
                     id="price"
                     {...register('price')}
                  />
                  <div className={classes.uploadFrag}>
                     <PdfDropZone pdf={pdf} setPdf={setPdf} />
                  </div>
               </div>
               <div className={classes.rigthSideOfBox}>
                  <Input
                     placeholder="ГГ/ММ/ДД"
                     label="Год выпуска"
                     className={classes.leftSideDate}
                     {...register('dataOfIssue')}
                     hasError={errors.dataOfIssue}
                  />
                  <CustomCheckbox
                     label="Бестселлер"
                     className={classes.bestseller}
                     onChangeCheckBoxValue={onChangeCheckBoxValue}
                  />
                  <Input
                     label="Скидка"
                     type="number"
                     placeholder="%"
                     className={classes.leftSideInput}
                     id="discount"
                     {...register('discount')}
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

export default ElectroBook
