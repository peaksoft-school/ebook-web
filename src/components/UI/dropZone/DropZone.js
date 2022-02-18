import { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import DropImg from '../../../assets/png/Vector.png'
import classes from './DropZone.module.css'
import { sendRequest, getFromLocalStorage } from '../../../utils/helpers'

export default function DropZone({ avatar, setAvatar }) {
   const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      multiple: false,
      onDrop: (files) => {
         setAvatar({
            avatar: files[0],
            preview: URL.createObjectURL(files[0]),
         })
      },
   })
   const E_BOOK_USER_TOKEN = 'EbookUserToken'

   const amazonBasket3Url = 'static/upload/image'
   const sendMainImage = useCallback(async () => {
      if (!avatar) return
      const userInfo = getFromLocalStorage(E_BOOK_USER_TOKEN) || []
      const requestConfig = {
         url: amazonBasket3Url,
         body: avatar,
         method: 'POST',
         headers: userInfo,
      }
      const response = await sendRequest(requestConfig)
      console.log(response)
   }, [avatar])

   useEffect(() => {
      sendMainImage()
   }, [Object.keys(avatar).length !== 0])

   return (
      <div className={classes.dropZoneBox}>
         <span {...getRootProps()} className={classes.uploadedBook}>
            <input
               type="file"
               accept="image/png, image/gif, image/jpeg"
               {...getInputProps()}
            />
            {!avatar ? (
               <div className={classes.dromImgBox}>
                  <img
                     src={DropImg}
                     alt=""
                     className={classes.uploadedDropZone}
                  />
                  <span className={classes.span}>
                     Нажмите на иконку чтобы загрузить или перетащите фото
                  </span>
               </div>
            ) : (
               <>
                  <img
                     src={avatar?.preview}
                     alt=""
                     className={classes.uploadedBook}
                  />
                  <button
                     type="button"
                     className={classes.changeBtn}
                     {...getInputProps}
                  >
                     Заменить
                  </button>
               </>
            )}
         </span>
      </div>
   )
}
