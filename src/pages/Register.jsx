import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="font-bold text-2xl text-gray-600">
              Register your account
            </h1>
            <fieldset className="fieldset">
              {/* name  */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="name"
                required
              />
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="photo url"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn btn-neutral mt-6 hover:btn-secondary cursor-pointer"
              >
                Register
              </button>
              <p className="text-center font-semibold text-gray-600 pt-3">
                Already have an account ?{" "}
                <Link className="text-secondary" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
