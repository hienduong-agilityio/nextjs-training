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
      <InputField placeholder="Enter text" customClasses="custom-class" />,
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

  it('should render with startContent and endContent', () => {
    renderResult.rerender(
      <InputField
        placeholder="Enter text"
        startContent={<span>Start</span>}
        endContent={<span>End</span>}
      />,
    );

    const startContent = screen.getByText('Start');
    const endContent = screen.getByText('End');
    const inputElement = screen.getByPlaceholderText('Enter text');

    expect(startContent).toBeInTheDocument();
    expect(endContent).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should handle user input', () => {
    const inputElement = screen.getByPlaceholderText('Enter text');

    fireEvent.change(inputElement, { target: { value: 'Hello' } });
    expect(inputElement).toHaveValue('Hello');
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should forward ref correctly', () => {
    const ref = jest.fn();
    renderResult.rerender(<InputField ref={ref} placeholder="Enter text" />);

    expect(ref).toHaveBeenCalled();
  });
});
