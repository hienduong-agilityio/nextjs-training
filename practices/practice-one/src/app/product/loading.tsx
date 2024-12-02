export default function Loading() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="grid gap-8 md:gap-16 lg:gap-32 lg:grid-cols-2">
        <div className="w-full h-96 bg-gray-200 animate-pulse rounded-md" />
        <div>
          <div className="w-full h-8 bg-gray-200 animate-pulse mb-4 rounded-md" />
          <div className="w-full h-6 bg-gray-200 animate-pulse mb-2 rounded-md" />
          <div className="w-full h-6 bg-gray-200 animate-pulse mb-2 rounded-md" />
          <div className="flex gap-4 mt-6">
            <div className="w-32 h-12 bg-gray-200 animate-pulse rounded-md" />
            <div className="w-32 h-12 bg-gray-200 animate-pulse rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
