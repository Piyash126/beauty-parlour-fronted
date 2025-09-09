import { Link } from "react-router-dom";
// import useService from "../../../hooks/useService";
import Cover from "../../../shared/cover/Cover";
import ServiceItem from "./serviceItem/ServiceItem";

const ServicesArea = ({ items, Coverimg, title }) => {
  // const [service] = useService();
  // const limitedServices = service.slice(0, 6);
  return (
    <div className="mt-20">
      {/* <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
        Our Awesome Services<span className="text-pink-500">Area </span>
      </h2> */}
      {title && Coverimg && <Cover img={Coverimg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {/* {limitedServices.map((item) => ( */}
        {items.map((item) => (
          <ServiceItem key={item._id} item={item}></ServiceItem>
        ))}

        {/* ))} */}
      </div>
      <div className="mt-6">
        <Link to={`/appointment/${title}`}>
          <button className="btn btn-primary">Appointment Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesArea;
