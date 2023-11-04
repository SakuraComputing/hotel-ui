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

    it('should contain the following hotel', () => {
        createTestable();
        expect(screen.getByText('Hotel Gotham')).toBeInTheDocument();
    });
})