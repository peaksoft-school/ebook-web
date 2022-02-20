import { configureStore } from '@reduxjs/toolkit'
import breadCrumbsReducer from './breadCrumbsSlice'
import signInSlice from './authReducer/signInSlice'
import sendImagesSlice from './imageUploaderReducer/imageUploaderSlice'

const store = configureStore({
   reducer: {
      bread: breadCrumbsReducer,
      authorization: signInSlice,
      getImageId: sendImagesSlice,
   },
})
export default store
