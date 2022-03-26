import { configureStore } from '@reduxjs/toolkit'
import carSlice from './carSlice'

export default configureStore({
    reducer:carSlice
})