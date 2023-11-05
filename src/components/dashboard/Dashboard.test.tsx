import { cleanup, render, screen } from '@testing-library/react';
import DashBoardPage from './Dashboard';
import { Provider } from 'react-redux';
import store from '../../app/store';

const createTestable = () => {
    render(<Provider store={store}>
        <DashBoardPage />
    </Provider>)
}

describe('/DashBoard', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render the dashboard page', () => {
        createTestable();
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    it('should contain the following hotel details', () => {
        createTestable();
        expect(screen.getByText('Hotel Gotham')).toBeInTheDocument();
        expect(screen.getByText('Tenerife')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('2 Adults, 2 Children & 1 Infant')).toBeInTheDocument();
        expect(screen.getByText('01/01/08')).toBeInTheDocument();
        expect(screen.getByText('7')).toBeInTheDocument();
        expect(screen.getByText('Airport')).toBeInTheDocument();
        expect(screen.getByText('1136')).toBeInTheDocument();
        expect(screen.getByText('Nice Place')).toBeInTheDocument();
    });
})