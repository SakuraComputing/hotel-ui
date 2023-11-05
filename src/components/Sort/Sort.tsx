import React from 'react';

const Sort = () => {

    return (
        <div className='sort'>
            <div className='button-group'>
                <button className='button'>sort alphabetically</button>
            </div>
            <div className='button-group'>
                <button className='button'>sort by price</button>
            </div>
            <div className='button-group'>
                <button className='button'>sort by star rating</button>
            </div>
        </div>
    )
}
export default Sort;