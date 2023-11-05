import React from 'react';
import { selectHotels } from '../../app/store';
import { useSelector } from 'react-redux';
import HotelList from '../hotelsList/hotelsList';
import Sort from '../Sort/Sort';

const Dashboard: React.FC = () => {

    const hotels = useSelector(selectHotels);

    return (
        <div className='dashboard'>
            <Sort />
            <HotelList hotels={hotels} />
        </div>
    );
    };
export default Dashboard;