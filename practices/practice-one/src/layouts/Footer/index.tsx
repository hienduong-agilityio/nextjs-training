// Icon
import {
  FacebookIcon,
  LogoIcon,
  MasterCardIcon,
  PaypalIcon,
  TwitterIcon,
  VisaIcon,
  WesternIcon,
} from '@/icons';

// Mock
import { FOOTER_NAVIGATION } from '@/mocks';

// Components
import Link from 'next/link';

// Constants
import { ROUTE } from '@/constants';

export const Footer = () => {
  return (
    <footer className="w-full bg-primary-50">
      <div className="md:container px-4 pt-6 md:mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-16 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="py-8">
          {/* Main Footer Content */}
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            {/* Logo Section */}
            <div className="max-w-[290px] flex flex-col gap-4">
              <Link href={ROUTE.PRODUCTS} className="flex items-center gap-2">
                <LogoIcon aria-label="logo" />
                <span className="text-lg font-bold sm:text-xl lg:text-2xl">
                  E-Comm
                </span>
              </Link>
              <span className="text-sm font-normal leading-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever. Since the 1500s, when an unknown printer.
              </span>
            </div>

            <div className="flex flex-col w-full gap-8 sm:flex-row sm:justify-evenly lg:w-3/4">
              {/* Follow Us */}
              <div className="lg:max-w-[220px] flex flex-col gap-4">
                <h4 className="font-medium text-foreground-400">Follow Us</h4>
                <span className="text-sm">
                  Since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </span>
                <div className="flex gap-4">
                  <Link href="https://www.facebook.com/" aria-label="Facebook">
                    <FacebookIcon color="#385C8E" />
                  </Link>
                  <Link href="https://www.twitter.com/" aria-label="Twitter">
                    <TwitterIcon />
                  </Link>
                </div>
              </div>

              {/* Contact Us */}
              <div className="lg:max-w-[150px] flex flex-col gap-4">
                <h4 className="font-medium text-foreground-400">Contact Us</h4>
                <address className="text-sm not-italic">
                  E-Comm, 4578 Marmora Road, Glasgow D04 89GR
                </address>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 gap-8 pt-16 sm:grid-cols-2 lg:grid-cols-4">
            {FOOTER_NAVIGATION.map((item) => (
              <ul key={item.title}>
                <li>
                  <h4 className="mb-5 font-medium text-foreground-400">
                    {item.title}
                  </h4>
                  <ul>
                    {item.items.map((item) => (
                      <li
                        key={item.name}
                        className="mb-3 text-sm text-content2 hover:text-primary-700"
                      >
                        <Link href={item.url} className="hover:underline">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 py-6 border-t-2 border-secondary-100 lg:flex-row ">
          <p className="text-sm text-secondary-500">
            &#169; 2018 Ecommerce theme by www.bisenbaev.com
          </p>
          <div className="flex gap-2">
            <WesternIcon aria-label="Western" />
            <MasterCardIcon aria-label="MasterCard" />
            <PaypalIcon aria-label="Paypal" />
            <VisaIcon aria-label="Visa" />
          </div>
        </div>
      </div>
    </footer>
  );
};
