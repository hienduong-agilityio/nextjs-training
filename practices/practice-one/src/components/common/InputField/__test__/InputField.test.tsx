// Libraries
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react';

// Components
import { InputField } from '@/components';

describe('InputField Component', () => {
  const renderInputField = (props = {}) =>
    render(<InputField placeholder="Enter text" {...props} />);

  const errorMessage = 'This field is required';
  let renderResult: RenderResult;

  it('should render correctly without error', () => {
    renderResult = renderInputField();
    const inputElement = screen.getByPlaceholderText('Enter text');

    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'Hello' } });
    expect(inputElement).toHaveValue('Hello');

    expect(renderResult.container).toMatchSnapshot();
  });

  it('should render with custom classes', () => {
    renderResult = renderInputField({
      customClass: { container: 'custom-class' },
    });

    const inputElement = screen.getByPlaceholderText('Enter text');

    expect(inputElement).toBeInTheDocument();
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should render an error message', () => {
    renderResult = renderInputField({ errorMessage });

    const errorElement = screen.getByText(errorMessage);
    const inputElement = screen.getByPlaceholderText('Enter text');

    expect(errorElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should render with startIcon and endIcon', () => {
    renderResult = renderInputField({
      startIcon: <span>Start</span>,
      endIcon: <span>End</span>,
    });

    const startIcon = screen.getByText('Start');
    const endIcon = screen.getByText('End');
    const inputElement = screen.getByPlaceholderText('Enter text');

    expect(startIcon).toBeInTheDocument();
    expect(endIcon).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(renderResult.container).toMatchSnapshot();
  });
});
