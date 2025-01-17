export function LoadingCategoryGroup() {
  return (
    <div
      aria-label="Loading Category Group"
      className="mb-6 bg-secondary-100 p-4 rounded"
    >
      <div className="w-3/4 h-8 bg-gray-200 animate-pulse mb-4" />
      <ul className="space-y-2">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-full h-6 bg-gray-200 animate-pulse " />
        ))}
      </ul>
    </div>
  );
}
