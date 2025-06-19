import { ResultComponent } from './ResultComponent';

import { render, screen } from '@/test/setupTests';

describe('ResultComponent', () => {
  it('renders table headers correctly', () => {
    render(<ResultComponent hourlyResult={undefined} />);

    expect(screen.getByText('Time')).toBeInTheDocument();
    expect(screen.getByText('Cost')).toBeInTheDocument();
  });

  it('displays "0" for all costs when hourlyResult is undefined', () => {
    render(<ResultComponent hourlyResult={undefined} />);

    const costCells = screen.getAllByText('0');
    expect(costCells).toHaveLength(7); // 7 rows with costs
  });

  it('calculates and displays correct costs when hourlyResult is provided', () => {
    const hourlyResult = 10;
    render(<ResultComponent hourlyResult={hourlyResult} />);

    expect(screen.getByText('5.00 €')).toBeInTheDocument(); // 0.5 hours
    expect(screen.getByText('10.00 €')).toBeInTheDocument(); // 1 hour
    expect(screen.getByText('20.00 €')).toBeInTheDocument(); // 2 hours
    expect(screen.getByText('50.00 €')).toBeInTheDocument(); // 5 hours
    expect(screen.getByText('80.00 €')).toBeInTheDocument(); // 8 hours
    expect(screen.getByText('160.00 €')).toBeInTheDocument(); // 16 hours
    expect(screen.getByText('240.00 €')).toBeInTheDocument(); // 24 hours (1 day)
  });

  it('displays time labels correctly', () => {
    render(<ResultComponent hourlyResult={10} />);

    expect(screen.getByText('1/2 Hours')).toBeInTheDocument();
    expect(screen.getByText('1 Hour')).toBeInTheDocument();
    expect(screen.getByText('2 Hours')).toBeInTheDocument();
    expect(screen.getByText('5 Hours')).toBeInTheDocument();
    expect(screen.getByText('8 Hours')).toBeInTheDocument();
    expect(screen.getByText('16 Hours')).toBeInTheDocument();
    expect(screen.getByText('1 Day')).toBeInTheDocument();
  });

  it('formats decimal values correctly', () => {
    const hourlyResult = 1.234;
    render(<ResultComponent hourlyResult={hourlyResult} />);

    expect(screen.getByText('0.62 €')).toBeInTheDocument(); // 0.5 * 1.234 = 0.617
    expect(screen.getByText('1.23 €')).toBeInTheDocument(); // 1 * 1.234 = 1.234
  });
});
