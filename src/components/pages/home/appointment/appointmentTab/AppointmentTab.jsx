import AppointmentCard from "../../../../shared/appointmentCard/AppointmentCard";

const AppointmentTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5">
        {items?.map((item) => (
          <AppointmentCard key={item._id} item={item}></AppointmentCard>
        ))}
      </div>
    </div>
  );
};

export default AppointmentTab;
