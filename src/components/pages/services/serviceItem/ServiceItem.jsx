import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../authentication/context/providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import CommentSection from "../commentSection/CommentSection";

const ServiceItem = ({ item }) => {
  const { name, image, price, description, _id } = item;
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [, refetch] = useCart();

  const handleAddToAppointment = (service) => {
    console.log(service);

    if (user && user.email) {
      const cartItem = {
        serviceId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // ✅ now location is available
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card shadow-lg border border-gray-100 hover:shadow-xl transition p-6 hover:-translate-y-2  hover:shadow-2xl transition-transform duration-300">
      <div className="flex justify-center mb-4">
        <div className="bg-pink-100 rounded-full p-4">
          <img src={image} alt="Anti Age" className="w-10 h-10" />
        </div>
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-pink-500 font-bold text-xl mt-2">$ {price}</p>
      <p className="text-gray-600 mt-3">{description}</p>
      <div className="mt-5">
        <button
          className="w-full bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 hover:shadow-lg transition duration-300"
          onClick={() => handleAddToAppointment(item)}
        >
          Add to Cart
        </button>
      </div>
      <div className="mt-4">
        <CommentSection serviceId={item._id}></CommentSection>
      </div>
    </div>
  );
};

export default ServiceItem;
