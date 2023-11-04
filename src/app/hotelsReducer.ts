import { createSlice } from '@reduxjs/toolkit';
import { IHotel } from '../types/types';

const initialState: IHotel[] = [
    {
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
    }
];
  
export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {}
});

export default hotelsSlice.reducer;



