import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import hotelsReducer from './hotelsReducer';

const store = configureStore({
  reducer: {
    hotels: hotelsReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const selectHotels = (state: RootState) => state.hotels;

console.log('Store contents', selectHotels)

export default store;
