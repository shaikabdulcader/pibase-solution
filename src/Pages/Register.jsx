import React from 'react'
import img from "../assets/img/register.png";
import RegisterForm from '../Components/RegisterForm';
import General from '../Layout/General';
function Register() {
  return (
    <General>
    <div className='w-[100%] h-[100vh] flex flex-wrap bg-[#F0F3FA]'>
        <div className='w-[60%]'>
            <div className='w-[85%]'>
            <img src={img} alt="" />
            </div>
        </div>
        <div className='w-[40%]'>
          <RegisterForm/>
        </div>
    </div>
     </General>
  )
}

export default Register