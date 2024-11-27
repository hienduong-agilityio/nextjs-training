interface FilterGroupProps {
  title: string;
  items: { name: string; count: number }[];
}

export const FilterGroup = ({ title, items }: FilterGroupProps) => {
  return (
    <div className="mb-6 bg-secondary-100 p-4 rounded">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item) => (
          <li key={item.name} className="flex justify-between py-2">
            <button className="font-semibold hover:text-primary-200 ">
              {item.name}
            </button>
            <span>({item.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
