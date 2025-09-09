import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/providers/AuthProvider";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  // Get the path the user wanted to visit before being redirected to login
  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", user?.email);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Logged in user:", user);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Logged In Successfully!!",
          showConfirmButton: false,
          timer: 1500,
        });

        // ✅ Use navigate instead of <Navigate/>
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login error:", error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content w-full gap-10">
        <div className="card flex-1 w-full shadow-2xl bg-base-100">
          <form
            className="card-body flex flex-col items-center"
            onSubmit={handleLogin}
          >
            <div className="form-control w-4/5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-4/5">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mt-6 w-4/5">
              <button className="btn btn-primary w-full">Login</button>
            </div>
          </form>

          <p className="text-center pb-4">
            <small>
              New Here?{" "}
              <Link to="/signup" className="link link-primary">
                Create an Account
              </Link>
            </small>
          </p>

          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
