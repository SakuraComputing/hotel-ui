import React, { useState } from 'react';
import { IHotel } from '../../types/types';
import { currencyFormat, formatDate } from '../../helpers/utils';
import Button from '../common/Button';

interface IHotelProps {
    hotel: IHotel
}

const Hotel: React.FC<IHotelProps> = ({hotel}) => {

    const { name, resort, rating, occupants, date, duration, departure, price, overview, id } = hotel;

    const  [ isOverviewOpen, setOverviewOpen ] = useState(false);

    const onClickOverview = () => {setOverviewOpen(!isOverviewOpen)};

    const toggleString = isOverviewOpen ? 'less' : 'more';

    return (
        <div>
            <aside className={isOverviewOpen ? 'hotel-container--expanded' : 'hotel-container'}>
                <div className={isOverviewOpen ? 'top-container-expanded' : 'top-container-not-expanded'}>
                    <div className='img-container' style={{ backgroundImage: `url(/img/hotel-image-${id}.png)`}}>
                        <div 
                            className='overview-toggle' 
                            role='button' 
                            onClick={onClickOverview} 
                            data-testid='overview-toggle'
                        >
                            <span className='overview-toggle-text'>{`Read ${toggleString} about this hotel`}</span>
                            <img 
                                src={`/img/chevron-${isOverviewOpen ? 'down' : 'up'}.png`} 
                                alt={isOverviewOpen ? 'overview__open' : 'overview__closed'} 
                                className='icon'
                            />
                        </div>
                    </div>
                    <div className='details-container'>
                        <header className='hotel-title'>{name}</header>
                        <div className='hotel-location'>{resort}</div>
                        <div>{rating}</div>            
                        <div>{occupants}</div>  
                        <span><strong>{formatDate(date)}</strong> for <strong>{duration}</strong> days</span>                                  
                        <div className='departure'>departing from <strong>{departure}</strong></div>       
                        <Button
                            border='none'
                            color='#F5E12B'
                            height='60px'
                            onClick={() => alert('Booking Now')}
                            radius='5%'
                            width='100%'
                            children={<div><div><small className='header'>Book Now</small></div><strong className='price'>{currencyFormat(price)}</strong></div>}
                        />                 
                    </div>
                </div>
                {isOverviewOpen &&                 
                    <div className='overview-container'>
                        <div className='overview-title'>Overview</div>
                        <p className='overview'>{overview}</p>
                    </div>                    
                }            
            </aside>
        </div>
    )
};
export default Hotel;