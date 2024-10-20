import React from "react";
import { useState, useEffect } from "react";
import fetchAllData from "../api/fetchData";
function Signup() {

  const [signupData, setSignupData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchAllData.fetchSignupData();
      setSignupData(data);

      data.forEach((item) => {
        // console.log(item);
      });
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (signupData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="w-[100%] bg-[#F0F0F2] h-[60vh] flex">
        {
          signupData.map((items)=>(
            <>
            <div className="signup-text w-[60%] flex flex-col text-center justify-center items-center">
                <h1 className="text-5xl font-semibold">{items.title}</h1>
                <button className="border-2 w-[200px] h-[50px] bg-[#FF8C00] text-white font-semibold rounded-full mr-[300px] mt-[30px]">{items.btntxt}</button>
            </div>
            <div className="signup-img flex items-center ml-[60px]">
                <img className="w-[350px]" src={items.img} alt="signup-img" />
            </div>
            </>
          ))
        }
      </section>
    </>
  );
}

export default Signup;
