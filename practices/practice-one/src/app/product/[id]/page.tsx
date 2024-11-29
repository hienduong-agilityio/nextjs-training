import { Button } from '@/components';
import { BUTTON_VARIANTS } from '@/enums';
import {
  AddToCartIcon,
  FacebookIcon,
  HeartIcon,
  StarRating,
  TwitterIcon,
} from '@/icons';
import { getProductById } from '@/services';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const productData = await getProductById(id);

  return (
    <div className="bg-gray-50">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-wrap ">
          {/* Left Section - Images */}
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <div className="mb-4">
              <Image
                src={productData.images[0]}
                alt={productData.name}
                width={150}
                height={150}
                className="object-cover mx-auto rounded-lg"
              />
            </div>
            {productData.images.length > 1 && (
              <div className="flex justify-center gap-4">
                {productData.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-16 h-16 transition-shadow duration-300 border border-gray-300 rounded-md cursor-pointer hover:shadow-lg"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Section - Details */}
          <div className="w-full lg:w-1/2">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
              {productData.name}
            </h2>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold text-primary-600">
                ${productData.price}
              </span>
              <span className="text-lg text-gray-500 line-through">
                ${productData.originalPrice}
              </span>
              <span className="text-lg font-semibold text-red-500">% Off</span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <StarRating size={16} rating={productData.rating} />
              <span className="text-gray-600">
                {productData.reviews?.length || 0} reviews
              </span>
              <Link href="#" className="text-sm text-blue-500 hover:underline">
                Submit a review
              </Link>
            </div>

            <p className="mb-6 text-gray-700">{productData.description}</p>

            <div className="flex flex-col justify-between gap-4 mb-6 md:flex-row">
              <div className="flex items-center gap-4 mb-6">
                <label htmlFor="quantity" className="text-sm text-gray-600">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button className="px-3 py-1 text-gray-500 hover:text-gray-800">
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    defaultValue="1"
                    className="w-12 text-center border-0 bg-gray-50 focus:ring-0"
                  />
                  <button className="px-3 py-1 text-gray-500 hover:text-gray-800">
                    +
                  </button>
                </div>
              </div>
              <div className="flex gap-5">
                <Button
                  startIcon={<AddToCartIcon size={20} />}
                  variant={BUTTON_VARIANTS.SOLID}
                  customClass="shadow-none bg-primary-50 text-primary-100 hover:text-white"
                >
                  Add To Cart
                </Button>
                <Button
                  variant={BUTTON_VARIANTS.SOLID}
                  customClass="shadow-none p-4 bg-primary-50"
                >
                  <HeartIcon size={24} />
                </Button>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium">Availability:</span>
                {productData.availabilityStatus}
              </p>
              <p>
                <span className="font-medium">Category:</span>
                {productData.category}
              </p>
              <p className="font-medium text-green-600">Free Shipping</p>
            </div>

            <div className="flex flex-col gap-4 mt-8 md:flex-row">
              <Button
                startIcon={<FacebookIcon color="#fff" />}
                customClass="flex-1 py-3 px-6 bg-lightBlue-800 text-white hover:bg-primary-200"
              >
                Share on Facebook
              </Button>
              <Button
                startIcon={<TwitterIcon color="#fff" />}
                customClass="flex-1 py-3 px-6 bg-sky-400 text-white hover:bg-sky-500"
              >
                Share on Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
