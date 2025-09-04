import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
          <div className="card-body">
            <h1 className="font-bold text-2xl text-gray-600">
              Register your account
            </h1>
            <fieldset className="fieldset">
              {/* name  */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="name" />
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="photo url" />
              {/* email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              {/* password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-6 hover:btn-secondary cursor-pointer">
                Register
              </button>
              <p className="text-center font-semibold text-gray-600 pt-3">
                Already have an account ?{" "}
                <Link className="text-secondary" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
