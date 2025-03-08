import { configureStore } from '@reduxjs/toolkit'
import survey from './reducers/survey'

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
    reducer: {
        survey,
    },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
export type RootState = ReturnType<typeof store.getState>
