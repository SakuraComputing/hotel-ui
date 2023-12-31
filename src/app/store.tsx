import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import hotelsReducer from './hotelsReducer';
import { SortType } from '../components/Dashboard/Dashboard';

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const sortHotelBy = (sortBy: SortType) => (store: any) => {

    const sortArray = [...store.hotels];

    switch(sortBy) {
      case SortType.Price:
        return sortArray.sort((a: any, b: any) => a.price - b.price);
      case SortType.Alpha:
        return sortArray.sort((a: any, b: any) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      case SortType.Rating:
        return sortArray.sort((a: any, b: any) => b.rating - a.rating);
      default:
        return sortArray.sort((a: any, b: any) => b.price - a.price);
    }
};

export default store;
