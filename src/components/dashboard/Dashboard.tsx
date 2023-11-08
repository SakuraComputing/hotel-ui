import React, { useState } from 'react';
import { sortHotelBy } from '../../app/store';
import { useSelector } from 'react-redux';
import HotelList from '../HotelsList/hotelsList';
import CustomRadioButton from '../../CustomRadioButton/CustomRadioButton';

export enum SortBy {
    Alpha = 'alpha',
    Price = 'price',
    Rating = 'rating'
}

const Dashboard: React.FC = () => {

    const [ 
        selectedValue, 
        setSelectedValue, 
    ] = useState(SortBy.Alpha); 

    const hotels = useSelector(sortHotelBy(selectedValue));

    return (
        <div className='dashboard'>
            <div className='sort'>
            <div className='container'> 
                <ul> 
                    <CustomRadioButton 
                        label="sort alphabetically"
                        selected={ 
                            selectedValue === 
                            SortBy.Alpha
                        } 
                        onSelect={() => 
                            setSelectedValue( 
                                SortBy.Alpha
                            ) 
                        } 
                    /> 
                    <CustomRadioButton 
                        label="sort by price"
                        selected={ 
                            selectedValue === 
                            SortBy.Price
                        } 
                        onSelect={() => 
                            setSelectedValue( 
                                SortBy.Price
                            ) 
                        } 
                    /> 
                    <CustomRadioButton 
                        label="sort by star rating"
                        selected={ 
                            selectedValue === 
                            SortBy.Rating
                        } 
                        onSelect={() => 
                            setSelectedValue( 
                                SortBy.Rating
                            ) 
                        } 
                    /> 
                </ul> 
            </div> 

            </div>
            <HotelList hotels={hotels} />
        </div>
    );
    };
export default Dashboard;