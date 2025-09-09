import screenImg from "../../../../assets/images/screen.png";

const Screen = () => {
  return (
    <div className="bg-[#FFF8F5] grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <img
          src={screenImg}
          alt=""
          className="md:w-4/5 pl-12 pt-12 pb-12 md:float-right"
        />
      </div>
      <div>
        <div className="pl-12 pt-12 pb-12">
          <h1 className="text-black md:font-bold text-[2rem]">
            Let Us Hundle Your <br />
            Screen <span className="text-pink-500">Professionally</span>
          </h1>
          <p className="md:pr-40 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            voluptatum temporibus amet facere deserunt optio corporis. Saepe
            voluptate minus aliquid?
          </p>
          <div className="flex mt-6 gap-10">
            <div>
              <h1 className="mb-2 text-pink-500 text-[2rem] md:font-bold">
                500+
              </h1>
              <p>Happy Customer</p>
            </div>
            <div>
              <h1 className="mb-2 text-pink-500 text-[2rem] md:font-bold">
                18+
              </h1>
              <p>Total Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
