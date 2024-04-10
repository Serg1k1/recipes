import { configureStore } from '@reduxjs/toolkit';

import favorites from "./favorites";

export const store = configureStore({
    reducer: { favorites },
    devTools: process.env.NODE_ENV !== 'production',
});