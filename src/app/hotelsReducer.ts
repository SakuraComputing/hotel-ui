import { createSlice } from '@reduxjs/toolkit';
import { IHotel } from '../types/types';
import hotelData from '../data/hotels';

const initialState: IHotel[] = hotelData;
  
export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {}
});

export default hotelsSlice.reducer;



