import Appointment from "../appointment/Appointment";
import Screen from "../screen/Screen";
import Services from "../services/Services";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Appointment></Appointment>
      <Services></Services>
      <Screen></Screen>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
