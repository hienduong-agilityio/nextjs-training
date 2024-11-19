'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type TabItem = {
  title: string;
  content: React.ReactNode;
};

type TabsComponentProps = {
  items: TabItem[];
};

type ProductProps = {
  image: string;
  name: string;
  price: string;
};

const Product: React.FC<ProductProps> = ({ image, name, price }) => (
  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Image
      src={image}
      alt={name}
      width={128}
      height={128}
      className="rounded-md mb-3 object-cover"
    />
    <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
    <span className="text-blue-600 font-medium">{price}</span>
  </div>
);

export const TabsComponent: React.FC<TabsComponentProps> = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="max-w-6xl flex flex-col gap-y-6 w-full">
        {/* Tabs Header */}
        <div className="flex rounded-lg bg-gray-100 shadow-sm overflow-auto">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`flex-1 p-3 text-sm font-medium rounded-lg transition-colors duration-200 text-center outline-none
                ${
                  selectedTab === index
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="bg-white rounded-lg shadow p-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${
                selectedTab === index
                  ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                  : 'hidden'
              }`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

type Category = 'Electronics' | 'Fashion' | 'Home';

// Todo: Mock data to test
const mockProducts: Record<
  Category,
  { name: string; image: string; price: string }[]
> = {
  Electronics: [
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Laptop', image: '/images/laptop.jpg', price: '$1299' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Laptop', image: '/images/laptop.jpg', price: '$1299' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Laptop', image: '/images/laptop.jpg', price: '$1299' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Laptop', image: '/images/laptop.jpg', price: '$1299' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
  ],
  Fashion: [
    { name: 'T-Shirt', image: '/images/tshirt.jpg', price: '$25' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Laptop', image: '/images/laptop.jpg', price: '$1299' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Laptop', image: '/images/laptop.jpg', price: '$1299' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Laptop', image: '/images/laptop.jpg', price: '$1299' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Sneakers', image: '/images/sneakers.jpg', price: '$99' },
  ],
  Home: [
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Laptop', image: '/images/laptop.jpg', price: '$1299' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Laptop', image: '/images/laptop.jpg', price: '$1299' },
    { name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
    { name: 'Sofa', image: '/images/sofa.jpg', price: '$799' },
    { name: 'Dining Table', image: '/images/dining_table.jpg', price: '$499' },
  ],
};

const ProductTabs = () => {
  const items = (Object.keys(mockProducts) as Category[]).map((category) => ({
    title: category,
    content: mockProducts[category].map((product, index) => (
      <Product
        key={index}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    )),
  }));

  return <TabsComponent items={items} />;
};

export default ProductTabs;
