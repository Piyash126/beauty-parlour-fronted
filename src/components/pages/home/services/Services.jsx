import { Link } from "react-router-dom";
import faceImg1 from "../../../../assets/icons/face1.png";
import faceImg2 from "../../../../assets/icons/face2.png";
import faceImg3 from "../../../../assets/icons/face3.png";

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Awesome <span className="text-pink-500">Services</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card shadow-lg border border-gray-100 hover:shadow-xl transition p-6 hover:-translate-y-2  hover:shadow-2xl transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-100 rounded-full p-4">
                <img src={faceImg1} alt="Anti Age" className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Anti Age Face Treatment</h3>
            <p className="text-pink-500 font-bold text-xl mt-2">$199</p>
            <p className="text-gray-600 mt-3">
              We craft stunning and amazing web UI, using a well drafted UX to
              fit your product.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card shadow-lg border border-gray-100 hover:shadow-xl transition p-6 bg-white hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-100 rounded-full p-4">
                <img src={faceImg2} alt="Hair Styling" className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Hair Color & Styling</h3>
            <p className="text-pink-500 font-bold text-xl mt-2">$99</p>
            <p className="text-gray-600 mt-3">
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card shadow-lg border border-gray-100 hover:shadow-xl transition p-6 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-100 rounded-full p-4">
                <img src={faceImg3} alt="Skin Care" className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Skin Care Treatment</h3>
            <p className="text-pink-500 font-bold text-xl mt-2">$299</p>
            <p className="text-gray-600 mt-3">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="btn bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md">
            <Link to="/allServices/skin">Explore more</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
