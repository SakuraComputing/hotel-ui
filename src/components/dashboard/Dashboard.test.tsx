import { cleanup, fireEvent, render, screen } from '@testing-library/react';
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
        expect(screen.getByText('Iberostar Grand Salome')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('2 Adults, 2 Children & 1 Infant')).toBeInTheDocument();
        expect(screen.getByText('5th Mar 2019')).toBeInTheDocument();
        expect(screen.getByText('for 14 days')).toBeInTheDocument();
        expect(screen.getByText('Departing from Manchester')).toBeInTheDocument();
        expect(screen.getByText('1136.5')).toBeInTheDocument();
    });

    it('should show the sort component', () => {
        createTestable();

        expect(screen.getByText('sort alphabetically')).toBeInTheDocument();
        expect(screen.getByText('sort by price')).toBeInTheDocument();
        expect(screen.getByText('sort by star rating')).toBeInTheDocument();
    });

    it('should show the overview details when the view over icon is clicked', () => {
        createTestable();

        const showOverviewIcon = screen.getAllByTestId('overview-toggle')[0];
        fireEvent.click(showOverviewIcon);

        expect(screen.getByText(/he Iberostar Grand Salome has an exceptional/)).toBeInTheDocument();
        expect(screen.getByText('Read less about this hotel')).toBeInTheDocument();
    })
})