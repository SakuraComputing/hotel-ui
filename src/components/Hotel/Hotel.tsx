import React from 'react';
import { IHotel } from '../../types/types';

interface IHotelProps {
    hotel: IHotel
}

const Hotel: React.FC<IHotelProps> = ({hotel}) => {

    const { name, resort, rating, occupants, date, duration, departure, price, overview } = hotel;

    return (
        <React.Fragment>
            <div>{name}</div>
            <div>{resort}</div>
            <div>{rating}</div>            
            <div>{occupants}</div>            
            <div>{date}</div>            
            <div>{duration}</div>            
            <div>{departure}</div>            
            <div>{price}</div>            
            <div>{overview}</div>            
        </React.Fragment>
    )
};
export default Hotel;