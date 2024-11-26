// Components
import { ServiceCard } from '@/components';

// Mock
import { serviceData } from '@/mocks';

export const Service = () => {
  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="flex flex-wrap">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            details={service.details}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};
