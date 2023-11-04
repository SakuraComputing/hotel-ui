import { render, screen } from '@testing-library/react';
import DashBoardPage from './Dashboard';

describe('/DashBoard', () => {
    it('should render the dashboard page', () => {
        render(<DashBoardPage />)
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    })
})