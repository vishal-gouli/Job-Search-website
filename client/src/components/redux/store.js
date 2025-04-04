import {configureStore} from '@reduxjs/toolkit';
import  cartSystem from './slices/slice.js'
import notifyReduxSystem from './slices/notifySlice.js'

const store = configureStore({
    reducer:{
        cart:cartSystem,
        cart2:notifyReduxSystem,
    }
})
export default store;