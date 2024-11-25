// Libraries
import { render, screen, within } from '@testing-library/react';

// Components
import { Footer } from '@/components';
import { FOOTER_NAVIGATION } from '@/mocks';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the logo and description', () => {
    const logo = screen.getByLabelText('logo');
    expect(logo).toBeInTheDocument();

    expect(screen.getByText('E-Comm')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever. Since the 1500s, when an unknown printer.',
      ),
    ).toBeInTheDocument();
  });

  it('renders the follow us section with social media links', () => {
    const followUsHeading = screen.getByText('Follow Us');
    expect(followUsHeading).toBeInTheDocument();

    const facebookLink = screen.getByLabelText('Facebook');
    const twitterLink = screen.getByLabelText('Twitter');

    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/');
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com/');
  });

  it('renders the contact us section', () => {
    const contactUsHeading = screen.getByText('Contact Us');
    expect(contactUsHeading).toBeInTheDocument();

    expect(
      screen.getByText('E-Comm, 4578 Marmora Road, Glasgow D04 89GR'),
    ).toBeInTheDocument();
  });

  it('renders the footer navigation links', () => {
    FOOTER_NAVIGATION.forEach((section) => {
      const sectionHeading = screen.getByRole('heading', {
        name: section.title,
      });
      expect(sectionHeading).toBeInTheDocument();

      const sectionContainer = sectionHeading.closest('li');
      expect(sectionContainer).toBeInTheDocument();

      const links = within(sectionContainer!).getAllByRole('link');
      section.items.forEach((item) => {
        const link = links.find((link) => link.textContent === item.name);
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', item.url);
      });
    });
  });

  it('renders the footer bottom with copyright and payment icons', () => {
    expect(
      screen.getByText('© 2018 Ecommerce theme by www.bisenbaev.com'),
    ).toBeInTheDocument();

    const paymentIcons = ['Western', 'MasterCard', 'Paypal', 'Visa'];

    paymentIcons.forEach((iconName) => {
      expect(screen.getByLabelText(iconName)).toBeInTheDocument();
    });
  });
});
