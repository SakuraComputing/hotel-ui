import { cleanup, fireEvent, render, screen, findByText } from '@testing-library/react';
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

    it('should contain the following hotel details', () => {
        createTestable();
        expect(screen.getByText('Hotel Gotham')).toBeInTheDocument();
        expect(screen.getByText('Tenerife')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('2 Adults, 2 Children & 1 Infant')).toBeInTheDocument();
        expect(screen.getByText('3rd Jul 2019')).toBeInTheDocument();
        expect(screen.getByText('7')).toBeInTheDocument();
        expect(screen.getByText('Airport')).toBeInTheDocument();
        expect(screen.getByText('1136')).toBeInTheDocument();
        expect(screen.queryByText('Nice Place')).not.toBeInTheDocument();
    });

    it('should show the sort component', () => {
        createTestable();

        expect(screen.getByText('sort alphabetically')).toBeInTheDocument();
        expect(screen.getByText('sort by price')).toBeInTheDocument();
        expect(screen.getByText('sort by star rating')).toBeInTheDocument();
    });

    it('should show the overview details when the view over icon is clicked', () => {
        createTestable();

        const showOverviewIcon = screen.getByTestId('overview-toggle');
        fireEvent.click(showOverviewIcon);

        expect(screen.getByText('Nice Place')).toBeInTheDocument();
    })
})