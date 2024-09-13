import { configureStore } from '@reduxjs/toolkit'
import ModalReducer from './Feature/modal/modalSlice'

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
  },
})
