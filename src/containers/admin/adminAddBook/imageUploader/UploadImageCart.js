import { useState } from 'react'
import { useSelector } from 'react-redux'
import DropZone from '../../../../components/UI/dropZone/DropZone'
import classes from './UploadImageCart.module.css'
import LoadingSpinner from '../../../../components/UI/modal-window/loadingSpinner/LoadingSpinner'

const UploadImageCart = () => {
   const { status } = useSelector((state) => state.getImageId)

   const showLoadingSpinner = status === 'loading' && <LoadingSpinner />

   const [mainPicture, setMainPicture] = useState('')
   const [secondPicture, setSecondPicture] = useState('')
   const [thirdPicture, setThirdPicture] = useState('')

   const deleteMainPictureHandler = () => {
      setMainPicture('')
   }

   const deleteSecondPictureHandler = () => {
      setSecondPicture('')
   }

   const deleteThirdPictureHandler = () => {
      setThirdPicture('')
   }

   const firstButton = mainPicture && (
      <button
         type="button"
         className={classes.deleteBtn}
         onClick={deleteMainPictureHandler}
      >
         Удалить
      </button>
   )

   const secondButton = secondPicture && (
      <button
         type="button"
         className={classes.deleteBtn}
         onClick={deleteSecondPictureHandler}
      >
         Удалить
      </button>
   )

   const thirdButton = thirdPicture && (
      <button
         type="button"
         className={classes.deleteBtn}
         onClick={deleteThirdPictureHandler}
      >
         Удалить
      </button>
   )

   return (
      <section className={classes.uploadImageSection}>
         <div className={classes.imageblog}>
            <div className={classes.labelBlog}>
               <DropZone avatar={mainPicture} setAvatar={setMainPicture} />
               <p className={classes.mainImage}>Главное фото</p>
               {firstButton}
            </div>
            <div className={classes.labelBlog}>
               <DropZone avatar={secondPicture} setAvatar={setSecondPicture} />
               <p className={classes.mainImage}>2</p>
               {secondButton}
            </div>
            <div className={classes.labelBlog}>
               <DropZone avatar={thirdPicture} setAvatar={setThirdPicture} />
               <p className={classes.mainImage}>3</p>
               {thirdButton}
            </div>
            {showLoadingSpinner}
         </div>
         <div className={classes.imageUploadRules}>
            <div className={classes.rullsTextContent}>
               <p className={classes.publication}>
                  Публикации с качественными фото получают больше откликов!
               </p>
               <h1 className={classes.imagesMustBe}>Фотографии должны быть:</h1>
               <ul className={classes.ulrules}>
                  <li className={classes.liRuls}>
                     Фон должен быть нейтральным, без теней, рисунков,
                     посторонних объектов или засветов
                  </li>
                  <li className={classes.midleLiFoto}>
                     Фото обязательно должно быть цветным
                  </li>
                  <li className={classes.lastLiFoto}>Фото</li>
               </ul>
            </div>
         </div>
      </section>
   )
}

export default UploadImageCart
