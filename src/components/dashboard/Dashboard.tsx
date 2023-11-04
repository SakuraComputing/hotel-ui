import React from 'react';
import './Dashboard.css';
import { selectHotels } from '../../app/store';
import { useSelector } from 'react-redux';
import HotelList from '../hotelsList/hotelsList';

const Dashboard: React.FC = () => {

    const hotels = useSelector(selectHotels);

    return (
        <div className='dashboard'>
            Dashboard
            <HotelList hotels={hotels} />
        </div>
    );
    };
export default Dashboard;