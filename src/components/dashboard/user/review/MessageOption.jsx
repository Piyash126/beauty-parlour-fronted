import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../authentication/context/providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MessageOption = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    // Check if user is logged in
    if (!user) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please log in to send a message!",
        showConfirmButton: false,
        timer: 1500,
      });
      return; // Stop the function if no user is found
    }

    const meassagesInfo = {
      email: user.email, // Add user's email
      name: user.displayName, // Add user's name
      phone: data.phone,
      message: data.message,
    };
    axiosPublic
      .post("/messages", meassagesInfo)
      .then((res) => {
        if (res.data.insertedId) {
          console.log("message added to the database");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-[#FFF8F5] p-[36px]">
      <h1 className="container mx-auto text-center text-3xl my-8 font-bold">
        Let Us Handle Your <br />
        Project, Professionally
      </h1>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content lg:flex w-full px-5 gap-10">
          <div className="card flex-1 w-full">
            <form
              className="card-body flex flex-col w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control w-full my-6 p-8">
                <input
                  type="text"
                  {...register("phone", { required: true })}
                  name="phone"
                  placeholder="Phone Number"
                  className="input w-full !h-12 border-none"
                />
                {errors.phone?.type === "required" && (
                  <span className="text-red-600">Phone is required</span>
                )}
              </div>
              <div className="form-control w-full my-6 p-8">
                <textarea
                  {...register("message")}
                  className="textarea border-none h-24 w-full"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="-mt-2 items-center text-center">
                {user ? (
                  <button
                    type="submit"
                    className="btn bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md"
                  >
                    Send Message
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md"
                  >
                    <Link to="/login">Login First</Link>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageOption;
