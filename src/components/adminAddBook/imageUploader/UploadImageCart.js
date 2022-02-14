import { useState } from 'react'
import classes from './UploadImageCart.module.css'

const UploadImageCart = () => {
   const [mainPicture, setMainPicture] = useState('')
   const [secondPicture, setSecondPicture] = useState('')
   const [thirdPicture, setThirdPicture] = useState('')

   const mainPictureChangeHandler = (e) => {
      setMainPicture(e.target.files[0])
   }

   const secondPictureChangeHandler = (e) => {
      setSecondPicture(e.target.files[0])
   }

   const thirdPictureChangeHandler = (e) => {
      setThirdPicture(e.target.files[0])
   }

   const deleteMainPictureHandler = () => {
      setMainPicture('')
   }

   const deleteSecondPictureHandler = () => {
      setSecondPicture('')
   }

   const deleteThirdPictureHandler = () => {
      setThirdPicture('')
   }

   const mainImage = !mainPicture ? (
      <>
         <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={mainPictureChangeHandler}
            value={mainPicture}
         />
         <span className={classes.span}>
            Нажмите на иконку чтобы загрузить или перетащите фото
         </span>
      </>
   ) : (
      <>
         <img
            className={classes.uploadedBook}
            src={mainPicture ? URL.createObjectURL(mainPicture) : null}
            alt=""
         />
         <button
            type="button"
            className={classes.changeBtn}
            onClick={deleteMainPictureHandler}
         >
            Заменить
         </button>
      </>
   )

   const secondImage = !secondPicture ? (
      <>
         <input
            type="file"
            alt=""
            id="canvasElem"
            accept="image/png, image/gif, image/jpeg"
            onChange={secondPictureChangeHandler}
         />
         <span className={classes.span}>
            Нажмите на иконку чтобы загрузить или перетащите фото
         </span>
      </>
   ) : (
      <>
         <img
            className={classes.uploadedBook}
            src={secondPicture ? URL.createObjectURL(secondPicture) : null}
            alt=""
         />
         <button
            type="button"
            className={classes.changeBtn}
            onClick={deleteSecondPictureHandler}
         >
            Заменить
         </button>
      </>
   )

   const thirdImage = !thirdPicture ? (
      <>
         <input
            type="file"
            alt=""
            id="canvasElem"
            accept="image/png, image/gif, image/jpeg"
            onChange={thirdPictureChangeHandler}
         />
         <span className={classes.span}>
            Нажмите на иконку чтобы загрузить или перетащите фото
         </span>
      </>
   ) : (
      <>
         <img
            className={classes.uploadedBook}
            src={thirdPicture ? URL.createObjectURL(thirdPicture) : null}
            alt=""
         />
         <button
            type="button"
            className={classes.changeBtn}
            onClick={deleteThirdPictureHandler}
         >
            Заменить
         </button>
      </>
   )

   const firstButton = mainPicture && (
      <button
         className={classes.deleteBtn}
         onClick={deleteMainPictureHandler}
         type="button"
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
         className={classes.deleteBtn}
         onClick={deleteThirdPictureHandler}
         type="button"
      >
         Удалить
      </button>
   )

   return (
      <section className={classes.uploadImageSection}>
         <div className={classes.imageblog}>
            <div className={classes.labelBlog}>
               <label className={classes.custom}>{mainImage}</label>
               <p className={classes.mainImage}>Главное фото</p>
               {firstButton}
            </div>
            <div className={classes.labelBlog}>
               <label className={classes.custom}>{secondImage}</label>
               <p className={classes.mainImage}>2</p>
               {secondButton}
            </div>
            <div className={classes.labelBlog}>
               <label className={classes.custom}>{thirdImage}</label>
               <p className={classes.mainImage}>3</p>
               {thirdButton}
            </div>
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
