import useService from "../../../../hooks/useService";
import ServiceItem from "../../servicesArea/serviceItem/ServiceItem";

const ServicesAll = () => {
  const [service] = useService();
  return (
    <div className="mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
        Our Awesome Services<span className="text-pink-500">Area </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {service.map((item) => (
          <ServiceItem key={item._id} item={item}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default ServicesAll;
