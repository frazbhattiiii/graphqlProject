import { configureStore } from '@reduxjs/toolkit'
import clientReducer from '../features/clientSlice/client';
const store = configureStore({
    reducer: {
        client: clientReducer,
    }
})
export default store