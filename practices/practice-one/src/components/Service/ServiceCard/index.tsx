export interface IServiceCardProps {
  icon?: React.ReactNode | string;
  title: string;
  details: string;
}

export const ServiceCard = ({
  icon = '',
  title = '',
  details = '',
}: IServiceCardProps) => {
  return (
    <div className="px-4 md:w-1/2 lg:w-1/3">
      <div className="flex flex-col items-center p-10 bg-white rounded-md mb-9 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
        <div
          aria-label="Icon"
          className="flex items-center mb-11 justify-center rounded-2xl bg-primary"
        >
          {icon}
        </div>
        <h4 className="mb-[14px] w-max text-2xl font-semibold text-dark dark:text-white">
          {title}
        </h4>
        <p className="text-center xl:w-1/2 w-full text-body-color dark:text-dark-6">
          {details}
        </p>
      </div>
    </div>
  );
};
