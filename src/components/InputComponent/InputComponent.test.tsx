import userEvent from '@testing-library/user-event';

import { InputComponent } from './InputComponent';

import { render, screen, waitFor } from '@/test/setupTests';

describe('InputComponent', () => {
  const mockSetHourlyResult = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with all form elements', () => {
    render(<InputComponent setHourlyResult={mockSetHourlyResult} />);

    expect(screen.getByLabelText('Power')).toBeInTheDocument();
    expect(screen.getByLabelText('Price per kWh')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /calculate/i })).toBeInTheDocument();
    expect(screen.getByText('W')).toBeInTheDocument();
    expect(screen.getByText('€/kWh')).toBeInTheDocument();
  });

  it('allows user to input power and price values', async () => {
    const user = userEvent.setup();
    render(<InputComponent setHourlyResult={mockSetHourlyResult} />);

    const powerInput = screen.getByLabelText('Power');
    const priceInput = screen.getByLabelText('Price per kWh');

    await user.type(powerInput, '1000');
    await user.type(priceInput, '0.15');

    expect(powerInput).toHaveValue(1000);
    expect(priceInput).toHaveValue(0.15);
  });

  it('calculates and calls setHourlyResult on form submission', async () => {
    const user = userEvent.setup();
    render(<InputComponent setHourlyResult={mockSetHourlyResult} />);

    const powerInput = screen.getByLabelText('Power');
    const priceInput = screen.getByLabelText('Price per kWh');
    const submitButton = screen.getByRole('button', { name: /calculate/i });

    await user.type(powerInput, '2000');
    await user.type(priceInput, '0.20');
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockSetHourlyResult).toHaveBeenCalledWith(0.4);
    });
  });

  it('disables submit button when form is submitting', async () => {
    render(<InputComponent setHourlyResult={mockSetHourlyResult} />);

    const submitButton = screen.getByRole('button', { name: /calculate/i });
    expect(submitButton).toBeEnabled();
  });
});
