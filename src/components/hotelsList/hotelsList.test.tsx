import { render, screen } from '@testing-library/react';
import HotelsList from './hotelsList';

describe('/HotelList', () => {
    const props = [{
        id: 1,
        name: 'Hotel Gotham',
        resort: 'Tenerife',
        rating: 5,
        occupants: '2 Adults, 2 Children & 1 Infant',
        date: '01/01/08',
        duration: 7,
        departure: 'Airport',
        price: 1136,
        overview: 'Nice Place'    
    }];

    it('should render the hotel list', () => {
        render(<HotelsList hotels={props}/>)
        expect(screen.getByText('Hotel Gotham')).toBeInTheDocument();
    })
})