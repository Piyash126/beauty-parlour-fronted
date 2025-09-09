import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../context/providers/AuthProvider";
import SocialLogin from "../socialLogin/SocialLogin";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;

        // ✅ update Firebase profile
        updateProfile(loggedUser, {
          displayName: `${data.firstName} ${data.lastName}`,
        }).then(() => {
          // now user.displayName will be available
          const userInfo = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully!!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content lg:flex w-full px-5 gap-10">
        {/* Right Side (Form) */}
        <div className="card flex-1 w-full shadow-2xl bg-base-100 ">
          {/* <div className="card w-full shadow-2xl bg-base-100 flex-1"> */}

          <form
            className="card-body flex flex-col items-center w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control w-4/5">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                name="firstName"
                placeholder="First Name"
                className="input input-bordered w-full"
              />
              {errors.firstName?.type === "required" && (
                <span className="text-red-600">First Name is required</span>
              )}
            </div>

            <div className="form-control w-4/5">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
              {errors.firstName?.type === "required" && (
                <span className="text-red-600">Last Name is required</span>
              )}
            </div>

            <div className="form-control w-4/5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>

            <div className="form-control w-4/5">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                })}
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">
                  Password must not exceed 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  Password must include one uppercase letter, one lowercase
                  letter, and one special character
                </span>
              )}
            </div>

            <div className="form-control w-4/5 mt-4">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value, formValues) =>
                    value === formValues.password || "Passwords do not match",
                })}
                placeholder="Confirm Password"
                className="input input-bordered w-full"
              />
              {errors.confirmPassword && (
                <span className="text-red-600">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="form-control mt-6 w-4/5">
              <input
                type="submit"
                value="SignUp"
                className="btn btn-primary w-full"
              />
            </div>
          </form>

          <p>
            <small>
              ALready have an account?<Link to="/login">Login</Link>
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
