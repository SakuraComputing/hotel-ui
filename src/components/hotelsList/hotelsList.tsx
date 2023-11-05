import React from 'react';
import { IHotel } from '../../types/types';
import Hotel from '../Hotel/Hotel';

interface IHotelListProps {
    hotels: IHotel[];
}

const HotelList: React.FC<IHotelListProps> = ({hotels}) => {

    return (
        <div className='hotel-list-container'>
            Hotel List
            {hotels.map((hotel, id) => <Hotel key={id} hotel={hotel} />)}
        </div>
    )
}  

export default HotelList;