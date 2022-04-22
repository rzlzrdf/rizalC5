import {configureStore} from '@reduxjs/toolkit'
import carSlicer from './carSlicer'

const store = configureStore({
    reducer: {
        carSlicer: carSlicer.reducer,
    },

})

export default store;