import React, { useState } from "react";
import { admin_login } from "../../store/Reducers/AuthReducer";
import { useDispatch, useSelector } from "react-redux";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setState({
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
    resetForm();
  };
  return (
    <div>
      {/* Container */}
      <div className="min-h-screen bg-[#283046] flex justify-center items-center">
        {/* Card start */}
        <div className="p-8 flex-1">
          {/* Card Size */}
          <div className="w-[350px] bg-white rounded-3xl overflow-hidden shadow-2xl mx-auto">
            {/* Card upper part */}
            <div className="relative h-36 bg-[#161d31] rounded-bl-4xl">
              <svg
                className="absolute bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            {/* Form part start */}
            <div className="px-10 pt-2 pb-6 bg-white rounded-tr-4xl">
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src="http://127.0.0.1:5173/images/logo.png"
                  className="w-48"
                  alt="Logo"
                />
              </div>

              <h1 className="text-xl font-semibold mt-8 text-gray-400 ">
                Login Your account
              </h1>

              <form action="" className="mt-10" onSubmit={handleSubmit}>
                <div className="relative mt-10">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={email}
                    placeholder="anam@gmail.com"
                    className="peer
                    h-10 
                    w-full 
                    border-b-2 
                    border-gray-300 
                    text-gray-900 
                    focus:outline-none
                    focus:border-gray-900
                    
                    placeholder-transparent"
                  />

                  <label
                    htmlFor="email"
                    className="absolute 
                    left-0 
                    -top-3.5
                    text-gray-600 
                    text-sm 
                    transition-all
                    peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-400 
                    peer-placeholder-shown:top-2 
                    peer-focus:-top-3.5
                    peer-focus:text-gray-600 
                    peer-focus:text-sm
                    cursor-text
                    "
                  >
                    Email
                  </label>
                </div>

                <div className="relative mt-10">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={password}
                    placeholder="anam@gmail.com"
                    className="peer
                    h-10 
                    w-full 
                    border-b-2 
                    border-gray-300 
                    text-gray-900 
                    focus:outline-none
                    focus:border-gray-900
                    placeholder-transparent"
                  />

                  <label
                    htmlFor="password"
                    className="absolute 
                    left-0 
                    -top-3.5
                    text-gray-600 
                    text-sm 
                    transition-all
                    peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-400 
                    peer-placeholder-shown:top-2 
                    peer-focus:-top-3.5
                    peer-focus:text-gray-600 
                    peer-focus:text-sm
                    cursor-text
                    "
                  >
                    Password
                  </label>
                </div>

                <button
                  type="sumbit"
                  className="mt-10 
                  px-4 
                  py-2 
                  rounded 
                  bg-[#161d31] 
                  hover:bg-gray-900
                  text-white 
                  font-semibold 
                  text-center 
                  block 
                  w-full 
                  focus:outline-none 
                  focus:ring 
                  focus:ring-offset-2 
                  focus:ring-gray-900
                  focus:ring-opacity-80 
                  cursor-pointer"
                >
                  Sign in{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
