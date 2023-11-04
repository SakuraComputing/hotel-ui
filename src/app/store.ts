import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { IHotels } from '../types/types';
import hotelsReducer from './hotelsReducer';

const preloadedState: IHotels = {
  hotels: [{
    id: 1,
    name: 'Hotel Gotham',
    resort: 'Tenerife',
    rating: 5,
    occupants: '2 Adults, 2 Children & 1 Infant',
    date: '01/01/08',
    duration: 7,
    departure: 'Airport',
    price: 1136,
    overview: 'Nice Place'
  }]
};

const store = configureStore({
  reducer: hotelsReducer,
  preloadedState
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
