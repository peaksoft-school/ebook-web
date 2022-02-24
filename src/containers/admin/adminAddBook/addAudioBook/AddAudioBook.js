import { useState } from 'react'
import { useForm } from 'react-hook-form'
import classes from './AddAudioBook.module.css'
import WrapperOfForms from '../../../../components/admin/wrapperOfAdminBook/WrapperOfForm'
import Input from '../../../../components/UI/input/Input'
import CustomCheckbox from '../../../../components/UI/customCheckbox/CustomCheckbox'
import CustomTextarea from '../../../../components/UI/customTextarea/CustomTextarea'
import CustomSelect from '../../../../components/UI/customSelect/CustomSelect'
import { ReactComponent as Uploadsvg } from '../../../../assets/icons/upload.svg'
import GenresSelect from '../../../../components/UI/genresSelect/GenresSelect'

const AudioBook = (props) => {
   const {
      languagesFromApi,
      genres,
      // mainPicture,
      // secondPicture,
      // thirdPicture,
   } = props
   const {
      // register,
      handleSubmit,
      // formState: { errors },
   } = useForm({
      mode: 'all',
   })
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

   const submitHandler = (data) => {
      console.log(data)
   }

   console.log(genreId, typeOfLanguage, bestSeller)
   return (
      <form
         onSubmit={handleSubmit(submitHandler)}
         className={classes.formControl}
      >
         <WrapperOfForms>
            <section className={classes.rightSection}>
               <Input
                  label="Название книги"
                  type="text"
                  placeholder="Напишите полное название книги"
                  className={classes.rightSectionInput}
                  id="nameOfBook"
               />
               <Input
                  label="ФИО автора"
                  type="text"
                  placeholder="Напишите ФИО автора"
                  className={classes.rightSectionInput}
                  id="author"
               />
               <GenresSelect
                  label="Выберите жанр"
                  data={genres}
                  className={classes.rightSectionSelect}
                  initialstate="Литература, роман, стихи... "
                  onChangeGenreValue={onChangeGenreValue}
               />
               <CustomTextarea
                  label="O книге"
                  placeholder="Напишите о книге"
                  maxlengthofletters="1234"
                  maxLength="1234"
                  className={classes.textAreaClasses}
               />
            </section>
            <section className={classes.leftSection}>
               <section className={classes.settingOfBook}>
                  <div className={classes.languagesBox}>
                     <CustomSelect
                        required
                        data={languagesFromApi}
                        initialstate="Русский"
                        label="Язык"
                        className={classes.leftSideSelect}
                        onChangeLanguagesValue={onChangeLanguagesValue}
                     />
                     <Input
                        type="number"
                        step="1"
                        placeholder="YYYY/DD/MM"
                        label="Год выпуска"
                        className={classes.leftSideDate}
                        id="year"
                     />
                  </div>
                  <div className={classes.timeDuration}>
                     <Input
                        label="Длительность"
                        step="1"
                        placeholder="ч"
                        className={classes.timeDurationInput}
                        id="time"
                     />
                     <Input
                        step="1"
                        placeholder="мин"
                        className={classes.timeDurationInputSec}
                        id="time"
                     />
                     <Input
                        step="1"
                        placeholder="сек"
                        className={classes.timeDurationInputSec}
                        id="time"
                     />
                  </div>
                  <div className={classes.bestSellerBox}>
                     <CustomCheckbox
                        label="Бестселлер"
                        className={classes.bestseller}
                        onChangeCheckBoxValue={onChangeCheckBoxValue}
                     />
                  </div>
                  <div className={classes.priceSelection}>
                     <Input
                        label="Скидка"
                        type="number"
                        placeholder="%"
                        className={classes.leftSideInput}
                        id="discount"
                     />
                     <Input
                        label="Стоимость"
                        type="number"
                        placeholder="сом"
                        className={classes.leftSideInput}
                        id="price"
                     />
                  </div>
                  <div className={classes.uploadFrag}>
                     <h1 className={classes.uploadFragText}>
                        Загрузите фрагмент аудиозаписи
                     </h1>
                     <div className={classes.flexBoxed}>
                        <Input
                           type="file"
                           label="Загрузите аудиозапись"
                           className={classes.fix}
                           accept="audio/mp3"
                           id="upload"
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
                        type="file"
                        label="Загрузите аудиозапись"
                        className={classes.fix}
                        accept="audio/mp3"
                        id="uploadBook"
                     />
                     <Uploadsvg className={classes.uploadSvg} />
                  </div>
                  <button type="button" className={classes.submitButton}>
                     Отправить
                  </button>
               </section>
            </section>
         </WrapperOfForms>
      </form>
   )
}

export default AudioBook
