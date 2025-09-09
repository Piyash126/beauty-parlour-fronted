import beautyImg from "../../../../assets/images/beauty.png";

const Appointment = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-[#FFF8F5] p-8">
      <div>
        <h1 className="text-black md:font-bold text-[3rem] leading-tight line-space-3">
          BEAUTY SALON
          <br />
          FOR EVERY WOMEN
        </h1>
        <p className="md:pr-27 mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          repudiandae, dolores quo quas temporibus tenetur dolor.
        </p>
        <button className="btn bg-[#F63E7B] rounded-md p-6 text-[20px] font-semibold mt-6 text-white">
          Get an Appointment
        </button>
      </div>
      <div>
        <img src={beautyImg} alt="" className="hidden md:w-2/3 md:block" />
      </div>
    </div>
  );
};

export default Appointment;
