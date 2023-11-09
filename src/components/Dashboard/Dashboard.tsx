import React, { useState } from 'react';
import { sortHotelBy } from '../../app/store';
import { useSelector } from 'react-redux';
import HotelList from '../HotelsList/hotelsList';
import CustomRadioButton from '../CustomRadioButton/CustomRadioButton';
import { AiFillStar, AiOutlinePoundCircle } from 'react-icons/ai';
import { ImSortAlphaAsc } from 'react-icons/im';

export enum SortType {
    Alpha = 'alpha',
    Price = 'price',
    Rating = 'rating'
}

export function getButtonIcon(sortType: SortType) {

    switch(sortType) {
        case SortType.Alpha:
                return <ImSortAlphaAsc style={{ marginLeft: 'auto', marginTop: '3px' }}/>
        case SortType.Price:
            return <AiOutlinePoundCircle style={{ marginLeft: 'auto', marginTop: '3px' }}/>
        case SortType.Rating:
            return <AiFillStar style={{ marginLeft: 'auto', marginTop: '3px' }}/>
        default: 
            return null;
    }
  }

const Dashboard: React.FC = () => {
    const [ 
        selectedValue, 
        setSelectedValue, 
    ] = useState(SortType.Alpha); 

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
                                SortType.Alpha
                            } 
                            onSelect={() => 
                                setSelectedValue( 
                                    SortType.Alpha
                                ) 
                            } 
                            icon={getButtonIcon(SortType.Alpha)}
                        /> 
                        <CustomRadioButton 
                            label="sort by price"
                            selected={ 
                                selectedValue === 
                                SortType.Price
                            } 
                            onSelect={() => 
                                setSelectedValue( 
                                    SortType.Price
                                ) 
                            } 
                            icon={getButtonIcon(SortType.Price)}
                        /> 
                        <CustomRadioButton 
                            label="sort by star rating"
                            selected={ 
                                selectedValue === 
                                SortType.Rating
                            } 
                            onSelect={() => 
                                setSelectedValue( 
                                    SortType.Rating
                                ) 
                            } 
                            icon={getButtonIcon(SortType.Rating)}
                        /> 
                    </ul> 
                </div> 
            </div>
            <HotelList hotels={hotels} />
        </div>
    );
    };
export default Dashboard;