import React, { useState } from 'react';
import { IHotel } from '../../types/types';
import { formatDate } from '../../helpers/utils';

interface IHotelProps {
    hotel: IHotel
}

const Hotel: React.FC<IHotelProps> = ({hotel}) => {

    const { name, resort, rating, occupants, date, duration, departure, price, overview, id } = hotel;

    const  [ isOverviewOpen, setOverviewOpen ] = useState(false);

    const onClickOverview = () => {setOverviewOpen(!isOverviewOpen)};

    const toggleString = isOverviewOpen ? 'less' : 'more';

    return (
        <React.Fragment>
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
                        <div>{name}</div>
                        <div>{resort}</div>
                        <div>{rating}</div>            
                        <div>{occupants}</div>  
                        <span><div>{formatDate(date)}</div><div>{duration}</div></span>                                  
                        <div>Departing from {departure}</div>            
                        <div>{price}</div>            
                    </div>
                </div>
                {isOverviewOpen &&                 
                    <div className='overview-container'>
                        <div className='overview-title'>Overview</div>
                        <p className='overview'>{overview}</p>
                    </div>                    
                }            
            </aside>
        </React.Fragment>
    )
};
export default Hotel;