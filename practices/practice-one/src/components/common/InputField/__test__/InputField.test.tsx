// Libraries
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react';

// Components
import InputField from '@/components/common/InputField';

describe('InputField Component', () => {
  const errorMessage = 'This field is required';

  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<InputField placeholder="Enter text" />);
  });

  it('should render correctly without error', () => {
    const inputElement = screen.getByPlaceholderText('Enter text');

    expect(inputElement).toBeInTheDocument();
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should render with custom classes', () => {
    renderResult.rerender(
      <InputField
        placeholder="Enter text"
        customClass={{
          container: 'custom-class ',
        }}
      />,
    );

    const inputElement = screen.getByPlaceholderText('Enter text');

    expect(inputElement).toBeInTheDocument();
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should render an error message', () => {
    renderResult.rerender(
      <InputField placeholder="Enter text" errorMessage={errorMessage} />,
    );

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();

    expect(renderResult.container).toMatchSnapshot();
  });

  it('should render with startIcon and endIcon', () => {
    renderResult.rerender(
      <InputField
        placeholder="Enter text"
        startIcon={<span>Start</span>}
        endIcon={<span>End</span>}
      />,
    );

    const startIcon = screen.getByText('Start');
    const endIcon = screen.getByText('End');
    const inputElement = screen.getByPlaceholderText('Enter text');

    expect(startIcon).toBeInTheDocument();
    expect(endIcon).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should handle user input', () => {
    const inputElement = screen.getByPlaceholderText('Enter text');

    fireEvent.change(inputElement, { target: { value: 'Hello' } });
    expect(inputElement).toHaveValue('Hello');
    expect(renderResult.container).toMatchSnapshot();
  });
});
