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
   UPLOAD_IMAGE,
   UPLOAD_PDF_FILE,
} from '../../../../utils/constants/urls'
import classes from './AddElectroBook.module.css'
import PdfDropZone from '../../../../components/UI/pdfDropZone/PdfDropZone'
import { sendRequest, sendWithFormDataToApi } from '../../../../utils/helpers'
import Modal from '../../../../components/UI/modal-window/ModalWindow'
import SuccessfulMessage from '../../../../components/UI/successMessage/SuccessfulMessage'

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
      deleteAllPictureHandler,
   } = props
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      mode: 'all',
      resolver: yupResolver(schema),
   })

   const [genreId, setGenreId] = useState('')
   const [typeOfLanguage, setTypeOfLanguage] = useState('')
   const [bestSeller, setBestseller] = useState(false)
   const [isModal, setIsModal] = useState(false)
   const [responseAnswer, setResponseAnswer] = useState({
      error: null,
      bookName: '',
   })

   const onChangeModal = () => {
      setIsModal((prevState) => !prevState)
   }

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

   const submitHandler = async (data) => {
      const firstImageConfig = {
         file: mainPicture.avatar,
         url: UPLOAD_IMAGE,
      }
      const secondImageConfig = {
         file: secondPicture.avatar,
         url: UPLOAD_IMAGE,
      }
      const thridImageConfig = {
         file: thirdPicture.avatar,
         url: UPLOAD_IMAGE,
      }

      const pdfFileOption = {
         file: pdf.file,
         url: UPLOAD_PDF_FILE,
      }
      try {
         const firstImageId = await sendWithFormDataToApi(firstImageConfig)
         const secondImageId = await sendWithFormDataToApi(secondImageConfig)
         const thirdImageId = await sendWithFormDataToApi(thridImageConfig)
         const idOfElectronicBook = await sendWithFormDataToApi(pdfFileOption)
         if (
            firstImageId.ok &&
            secondImageId.ok &&
            thirdImageId.ok &&
            idOfElectronicBook.ok
         )
            await setResponseAnswer({
               error: firstImageId || secondImageId || thirdImageId,
            })

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
            images: [firstImageId.id, secondImageId.id, thirdImageId.id],
            bookName,
            author,
            genreId: +genreId,
            description,
            language: typeOfLanguage,
            yearOfIssue: +dataOfIssue,
            bestSeller,
            price: +price,
            discount: +discount,
            book: {
               fragment,
               pageSize: +pageSize,
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
         setResponseAnswer({
            bookName: response.bookName,
            error: null,
            message: '?????????????? ????????????????',
         })
         deleteAllPictureHandler()
         reset()
         return setIsModal(true)
      } catch (error) {
         setResponseAnswer({
            error: error.message || '?????????????? ???????????????????? ???????????? !',
         })
         return setIsModal(true)
      }
   }

   return (
      <form
         onSubmit={handleSubmit(submitHandler)}
         className={classes.formControl}
      >
         <WrapperOfForms>
            {isModal && (
               <Modal onClose={onChangeModal}>
                  <SuccessfulMessage
                     apiAnswer={responseAnswer}
                     onClose={onChangeModal}
                  />
               </Modal>
            )}
            <div className={classes.rightSection}>
               <Input
                  label="???????????????? ??????????"
                  type="text"
                  placeholder="???????????????? ???????????? ???????????????? ??????????"
                  className={classes.rightSectionInput}
                  id="name"
                  {...register('bookName')}
                  hasError={errors.bookName}
               />
               <Input
                  label="?????? ????????????"
                  type="text"
                  placeholder="???????????????? ?????? ????????????"
                  className={classes.rightSectionInput}
                  id="author"
                  {...register('author')}
                  hasError={errors.author}
               />
               <GenresSelect
                  label="???????????????? ????????"
                  data={genres}
                  className={classes.rightSectionSelect}
                  initialstate="????????????????????, ??????????, ??????????... "
                  onChangeGenreValue={onChangeGenreValue}
               />
               <Input
                  label="????????????????????????"
                  type="text"
                  placeholder="???????????????? ???????????????? ????????????????????????"
                  className={classes.rightSectionInput}
                  id="izdatelstvo"
                  {...register('publishingHouse')}
               />
               <CustomTextarea
                  label="O ??????????"
                  placeholder="???????????????? ?? ??????????"
                  maxlengthofletters="1234"
                  maxLength="1234"
                  {...register('description')}
                  hasError={errors.description}
                  className={classes.textAreaClass}
               />
               <CustomTextarea
                  label="???????????????? ??????????"
                  placeholder="???????????????? ???????????????? ??????????"
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
                     initialstate="??????????????"
                     label="????????"
                     className={classes.leftSideSelect}
                     onChangeLanguagesValue={onChangeLanguagesValue}
                  />
                  <Input
                     label="??????????"
                     type="number"
                     placeholder="??????."
                     className={classes.leftSideInput}
                     id="number"
                     {...register('pageSize')}
                     hasError={errors.pageSize}
                  />
                  <Input
                     label="??????????????????"
                     type="number"
                     placeholder="??????"
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
                     placeholder="????/????/????"
                     label="?????? ??????????????"
                     className={classes.leftSideDate}
                     {...register('dataOfIssue')}
                     hasError={errors.dataOfIssue}
                  />
                  <div className={classes.customcheckboxAdmin}>
                     <CustomCheckbox
                        label="????????????????????"
                        className={classes.bestseller}
                        onChangeCheckBoxValue={onChangeCheckBoxValue}
                     />
                  </div>
                  <Input
                     label="????????????"
                     type="number"
                     placeholder="%"
                     className={classes.leftSideInput}
                     id="discount"
                     {...register('discount')}
                  />
                  <button type="submit" className={classes.submitButton}>
                     ??????????????????
                  </button>
               </div>
            </div>
         </WrapperOfForms>
      </form>
   )
}

export default ElectroBook
