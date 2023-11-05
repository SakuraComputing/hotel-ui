import React, { useState } from 'react';
import { IHotel } from '../../types/types';
import { formatDate } from '../../helpers/utils';

interface IHotelProps {
    hotel: IHotel
}

const Hotel: React.FC<IHotelProps> = ({hotel}) => {

    const { name, resort, rating, occupants, date, duration, departure, price, overview } = hotel;

    const  [ isExpanded, setIsExpanded ] = useState(false);

    const onClickOverview = () => {setIsExpanded(!isExpanded)};

    return (
        <React.Fragment>
            <aside className='hotel-container'>
                <div className='img-container'>
                    <div role='button' onClick={onClickOverview} data-testid='overview-toggle'>Read more about this hotel</div>
                </div>
                <div className='details-container'>
                    <div>{name}</div>
                    <div>{resort}</div>
                    <div>{rating}</div>            
                    <div>{occupants}</div>  
                    <span><div>{formatDate(date)}</div><div>{duration}</div></span>                                  
                    <div>{departure}</div>            
                    <div>{price}</div>            
                </div>
                {isExpanded && <p>{overview}</p>}            
            </aside>
        </React.Fragment>
    )
};
export default Hotel;