import React from 'react';
import { IHotel } from '../../types/types';

interface IHotelProps {
    hotels: IHotel[];
}

const HotelList: React.FC<IHotelProps> = ({hotels}) => {

    return (
        <div className='hotel-list-container'>
            Hotel List
            {hotels.map((hotel, id) => <div key={id}>{hotel.name}</div>)}
        </div>
    )
}  

export default HotelList;