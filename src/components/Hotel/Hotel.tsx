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

    const toggleString = isExpanded ? 'less' : 'more';

    return (
        <React.Fragment>
            <aside className='hotel-container'>
                <div className='img-container'>
                    <div 
                        className='overview-toggle' 
                        role='button' 
                        onClick={onClickOverview} 
                        data-testid='overview-toggle'
                    >
                        <span>{`Read ${toggleString} about this hotel`}</span>
                        <img 
                            src={`/img/chevron-${isExpanded ? 'up' : 'down'}.png`} 
                            alt={isExpanded ? 'overview__open' : 'overview__closed'} 
                            className='icon'
                        />
                    </div>
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