import React from "react";
import img from "../assets/img/register.png";
import LoginForm from "../Components/LoginForm";
import General from "../Layout/General";

function Login() {
  return (
    <General>
      <div className="w-[100%] h-[100vh] flex flex-wrap bg-[#F0F3FA]">
        <div className="w-[60%]">
          <div className="w-[85%]">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="w-[40%]">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
     </General>
  );
}

export default Login;
