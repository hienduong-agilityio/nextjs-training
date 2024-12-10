// Components
import Image from 'next/image';

export function ProductImages({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  return (
    <div className="grid gap-6">
      <div className="w-full h-[300px] sm:h-[350px] bg-secondary-50 flex items-center justify-center">
        <Image
          src={images[0]}
          alt={name}
          width={0}
          height={0}
          className="object-contain h-[273px] w-[200px] sm:w-[300px] sm:h-[273px] mx-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          {images.map((image) => (
            <div
              key={image}
              className="w-full h-[100px] sm:h-[120px] bg-secondary-50 flex items-center justify-center rounded-md transition-shadow duration-300 border hover:shadow-lg cursor-pointer"
            >
              <Image
                src={image}
                alt={`Thumbnail ${image}`}
                width={0}
                height={0}
                className="object-contain h-[80px] w-[80px] sm:w-[100px] sm:h-[100px]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
