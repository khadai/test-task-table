import { configureStore } from '@reduxjs/toolkit';
import reducer from './slice';

const store = configureStore({
    reducer: {
        package: reducer,
    },
});

export default store;
