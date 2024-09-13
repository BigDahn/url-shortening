import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = !state.isModalOpen
    },
    
  },
})

export const { openModal} = modalSlice.actions
export default modalSlice.reducer
