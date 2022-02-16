import classes from './AddElectroBook.module.css'
import WrapperOfForms from '../../../../components/admin/wrapperOfAdminBook/WrapperOfForm'
import Input from '../../../../components/UI/input/Input'
import CustomSelect from '../../../../components/UI/customSelect/CustomSelect'
import CustomTextarea from '../../../../components/UI/customTextarea/CustomTextarea'
import CustomCheckbox from '../../../../components/UI/customCheckbox/CustomCheckbox'
import { ReactComponent as Uploadsvg } from '../../../../assets/icons/upload.svg'

const ElectroBook = () => {
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
         <div className={classes.rightSection}>
            <Input
               label="Название книги"
               type="text"
               placeholder="Напишите полное название книги"
               className={classes.rightSectionInput}
               id="name"
            />
            <Input
               label="ФИО автора"
               type="text"
               placeholder="Напишите ФИО автора"
               className={classes.rightSectionInput}
               id="author"
            />
            <CustomSelect
               label="Выберите жанр"
               data={genres}
               className={classes.rightSectionSelect}
               initialstate="Литература, роман, стихи... "
               getOptionValue={getOptionValue}
               getOptionLabel={getOptionLabel}
            />
            <Input
               label="Издательство"
               type="text"
               placeholder="Напишите название издательства"
               className={classes.rightSectionInput}
               id="izdatelstvo"
            />
            <CustomTextarea
               label="O книге"
               placeholder="Напишите о книге"
               maxlengthofletters="1234"
               maxLength="1234"
            />
            <CustomTextarea
               label="Фрагмент книги"
               placeholder="Напишите фрагмент книги"
               maxlengthofletters="9234"
               maxLength="9234"
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
                  getOptionValue={getOptionValue}
                  getOptionLabel={getOptionLabel}
               />
               <Input
                  label="Объем"
                  type="number"
                  placeholder="стр."
                  className={classes.leftSideInput}
                  id="number"
               />
               <Input
                  label="Стоимость"
                  type="number"
                  placeholder="сом"
                  className={classes.leftSideInput}
                  id="price"
               />
               <div className={classes.uploadFrag}>
                  <h1 className={classes.uploadFragText}>Загрузите книгу</h1>
                  <div className={classes.flexBoxed}>
                     <Input
                        type="file"
                        label="Загрузите PDF"
                        className={classes.fix}
                        accept="application/pdf,application/vnd.ms-excel"
                        id="upload"
                     />
                  </div>
                  <Uploadsvg className={classes.uploadSvg} />
               </div>
            </div>
            <div className={classes.rigthSideOfBox}>
               <Input
                  type="number"
                  maxLength="4"
                  step="1"
                  placeholder="гг"
                  label="Год выпуска"
                  className={classes.leftSideDate}
                  id="year"
               />
               <CustomCheckbox
                  label="Бестселлер"
                  className={classes.bestseller}
               />
               <Input
                  label="Скидка"
                  type="number"
                  placeholder="%"
                  className={classes.leftSideInput}
                  id="discount"
               />
               <button type="button" className={classes.submitButton}>
                  Отправить
               </button>
            </div>
         </div>
      </WrapperOfForms>
   )
}

export default ElectroBook