export function LoadingFilterSortBar() {
  return (
    <div
      aria-label="Loading Filter Sort Bar"
      className="bg-secondary-100 p-6 shadow-md md:sticky rounded top-0 z-50 w-full"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <div className="w-20 h-6 bg-gray-200 animate-pulse" />
        <ul className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="w-20 h-6 bg-gray-200 animate-pulse" />
          ))}
        </ul>
      </div>
    </div>
  );
}
