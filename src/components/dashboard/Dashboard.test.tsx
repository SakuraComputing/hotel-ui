import { render, screen } from '@testing-library/react';
import DashBoardPage from './Dashboard';

describe('/DashBoard', () => {
    it('should render the dashboard page', () => {
        render(<DashBoardPage />)
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    it('should contain the following hotel', () => {
        render(<DashBoardPage />)
        expect(screen.getByText('Iberostar Grand Salome')).toBeInTheDocument();
    });

})