export function LoadingRelatedProducts() {
  return (
    <section className="flex flex-col items-center gap-4 mt-8 md:mt-16 lg:mt-32">
      <h2 className="text-3xl font-semibold uppercase">
        Loading related products...
      </h2>
      <div className="w-full h-8 bg-gray-200 animate-pulse mb-4 rounded-md" />
      <div className="w-full h-6 bg-gray-200 animate-pulse mb-2 rounded-md" />
      <div className="w-full h-6 bg-gray-200 animate-pulse mb-2 rounded-md" />
    </section>
  );
}
