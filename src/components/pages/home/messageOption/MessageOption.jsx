import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MessageOption = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    const meassagesInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };
    axiosPublic
      .post("/messages", meassagesInfo)
      .then((res) => {
        if (res.data.insertedId) {
          console.log("meassage added to the database");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent SUccessfully!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
    // });
  };
  return (
    <div className="bg-[#FFF8F5] p-[36px]">
      <h1 className="container mx-auto text-center text-3xl my-8 font-bold">
        Let Us Hundle Your <br />
        Project, Professionally
      </h1>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content lg:flex w-full px-5 gap-10">
          {/* Right Side (Form) */}
          <div className="card flex-1 w-full">
            {/* <div className="card w-full shadow-2xl bg-base-100 flex-1"> */}

            <form
              className="card-body flex flex-col w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="form-control">
                  <input
                    type="text"
                    {...register("firstName", { required: true })}
                    name="firstName"
                    placeholder="Full Name"
                    className="input w-full !h-12 border-none"
                  />
                  {errors.first - name?.type === "required" && (
                    <span className="text-red-600">First Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    {...register("lastName", { required: true })}
                    name="lastName"
                    placeholder="Last Name"
                    className="input w-full !h-12 border-none"
                  />
                  {errors.last - name?.type === "required" && (
                    <span className="text-red-600">Last Name is required</span>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="form-control">
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="Email Address"
                    className="input w-full !h-12 border-none"
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
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
                  <button className="btn bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md">
                    Send Message
                  </button>
                ) : (
                  <button className="btn bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md">
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
