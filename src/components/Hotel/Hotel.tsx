import React from 'react';
import { IHotel } from '../../types/types';

interface IHotelProps {
    hotel: IHotel
}

const Hotel: React.FC<IHotelProps> = ({hotel}) => {

    const { name, resort, rating, occupants, date, duration, departure, price, overview } = hotel;

    return (
        <React.Fragment>
            <aside>
                <div>{name}</div>
                <div>{resort}</div>
                <div>{rating}</div>            
                <div>{occupants}</div>  
                <span><div>{date}</div><div>{duration}</div></span>                                  
                <div>{departure}</div>            
                <div>{price}</div>            
                <p>{overview}</p>            
            </aside>
        </React.Fragment>
    )
};
export default Hotel;