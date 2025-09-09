import ServiceItem from "../serviceItem/ServiceItem";

const ServiceItems = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5">
        {items?.map((item) => (
          <ServiceItem key={item._id} item={item}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default ServiceItems;
