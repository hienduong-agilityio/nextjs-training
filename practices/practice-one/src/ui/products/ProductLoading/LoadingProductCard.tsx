export function LoadingProductCard() {
  return (
    <div className="relative flex flex-col transition-shadow border-2 rounded-sm border-gray-200 animate-pulse">
      {/* Label Placeholder */}
      <div className="absolute top-2 left-2 w-24 h-6 bg-gray-300 rounded-md" />

      {/* Image Placeholder */}
      <div className="relative bg-gray-200 h-[273px] w-full flex items-center justify-center rounded-sm">
        <div className="w-full h-[200px] sm:h-[273px] bg-gray-300 rounded-md" />
      </div>

      {/* Hover Buttons Placeholder */}
      <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 mx-3 my-5 bg-white opacity-0 bg-opacity-95 group-hover:opacity-100">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
      </div>

      {/* Content Placeholder */}
      <div className="flex flex-col items-center justify-between h-full px-4 py-4 bg-white">
        {/* Product Name Placeholder */}
        <div className="w-full h-6 bg-gray-300 rounded-md mb-1" />

        {/* Star Rating Placeholder */}
        <div className="w-1/3 h-4 bg-gray-300 rounded-md mb-2" />

        {/* Price Details Placeholder */}
        <div className="flex items-center gap-2 w-full justify-center">
          <div className="w-1/3 h-5 bg-gray-300 rounded-md" />
          <div className="w-1/4 h-4 bg-gray-200 rounded-md" />
          <div className="w-1/4 h-4 bg-gray-200 rounded-md" />
        </div>
      </div>
    </div>
  );
}
