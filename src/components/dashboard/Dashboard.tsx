import React, { useState } from 'react';
import { sortHotelBy } from '../../app/store';
import { useSelector } from 'react-redux';
import HotelList from '../HotelsList/hotelsList';

interface IParams {
    label: string;
    selected: boolean;
    onSelect: React.MouseEventHandler<HTMLButtonElement>;
}

const Dashboard: React.FC = () => {

    const [ 
        selectedValue, 
        setSelectedValue, 
    ] = useState(""); 

    const hotels = useSelector(sortHotelBy(selectedValue));

    const styles = { 
        container: { 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
        }, 
        heading: { 
            color: "green", 
            textAlign: "center", 
        }, 
        radioButton: { 
            padding: "12px 16px", 
            borderRadius: "8px", 
            margin: "8px", 
            border: "2px solid #007BFF", 
            background: "#fff", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            width: "280px", 
            cursor: "pointer", 
            transition: 
                "background-color 0.3s, color 0.3s", 
        }, 
        selected: { 
            background: "#007BFF", 
            color: "#fff", 
            borderColor: "#007BFF", 
        }, 
        list: { 
            listStyleType: "none", 
            padding: 0, 
            textAlign: "center", 
        }, 
    }; 
      
    const CustomRadioButton: React.FC<IParams> = ({ 
        label, 
        selected, 
        onSelect, 
    }) => ( 
        <li> 
            <button 
                style={{ 
                    ...styles.radioButton, 
                    ...(selected 
                        ? styles.selected 
                        : {}), 
                }} 
                onClick={onSelect} 
            > 
                {label} 
            </button> 
        </li> 
    ); 

    return (
        <div className='dashboard'>
            <div className='sort'>
            <div 
                style={styles.container} 
            > 
                <ul> 
                    <CustomRadioButton 
                        label="sort alphabetically"
                        selected={ 
                            selectedValue === 
                            "alpha"
                        } 
                        onSelect={() => 
                            setSelectedValue( 
                                "alpha"
                            ) 
                        } 
                    /> 
                    <CustomRadioButton 
                        label="sort by price"
                        selected={ 
                            selectedValue === 
                            "price"
                        } 
                        onSelect={() => 
                            setSelectedValue( 
                                "price"
                            ) 
                        } 
                    /> 
                    <CustomRadioButton 
                        label="sort by star rating"
                        selected={ 
                            selectedValue === 
                            "rating"
                        } 
                        onSelect={() => 
                            setSelectedValue( 
                                "rating"
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