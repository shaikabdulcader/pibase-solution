import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelopeOpenText,
  faFileLines,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import SupportForm from "../Components/SupportForm";
import General from "../Layout/General";
import  fetchAllData  from "../api/fetchData";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";

function Support() {
  const [supportData, setSupportData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchAllData.fetchSupportData();  
      setSupportData(data);
      
      data.forEach((item)=>{
        console.log(item);
        
      })
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

  if (supportData === null) {
    return <div>Loading...</div>;
  }


  return (
    <General>
      <div className="bg-[#957FB4] h-[50vh] w-[100%] text-white flex flex-col items-center justify-center">
        <>
          {supportData.map((items) => (
            <>
              <h1 className="text-6xl font-bold mb-3">{items.title}</h1>
            </>
          ))}
        </>

        <a href="">
          Home <FontAwesomeIcon icon={faArrowRight} />
          <span>Contact Us</span> <FontAwesomeIcon icon={faArrowRight} />{" "}
          <span>Contact Support</span>
        </a>
      </div>
      <div className="w-[100%] h-[70vh]">
        <h1 className="text-center text-[#051441] text-[2rem] font-semibold m-10">
          How can we help?
        </h1>
        <div className="flex w-[100%] h-[50vh] px-24">
          {supportData.map((items) => (
            <>
              {items.help.map((items) => (
                <>
                  <div className="w-[100%] border-r h-[50vh]">
                    <div className="card w-[500px] h-[350px] flex flex-col justify-center items-center gap-9">
                      <span className="border-2 w-[70px] h-[70px] flex items-center justify-center text-[#FF8C00] border-[#FF8C00] rounded-full text-[2rem]">
                        <FontAwesomeIcon icon={faVideo} />
                      </span>
                      <h1 className="text-[#051441] text-[1.5rem] font-[500]">
                        {items.title}
                      </h1>
                      <p className="text-center w-[250px] text-[#7A7E94]">
                        {items.para}
                      </p>
                      <button className="w-[200px] h-[50px] bg-[#FF8C00] text-white rounded-full font-[500] hover:bg-transparent hover:border hover:border-[#FF8C00] hover:text-[#FF8C00]">
                        {items.btntxt}
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
      </div>

      <div className="w-[100%] h-[80vh] bg-[#FFFFFF] mb-10">
        <div className="flex flex-col justify-center items-center mt-[20px]">
          {supportData.map((items) => (
            <>
              {items.kind.map((items) => (
                <>
                  <h1 className="text-4xl font-semibold m-4">{items.title}</h1>
                  <h3 className="text-[#7A7A8B] text-[1.1rem] font-[400] w-[900px]">
                    {items.para}
                  </h3>
                </>
              ))}
            </>
          ))}
        </div>
        <div className="flex justify-center items-center mt-[70px]">
          <div class="grid grid-cols-3 gap-10">
            {supportData.map((items) => (
              <>
                {items.kind.map((items) => (
                  <>
                    {items.card.map((items) => (
                      <>
                        <div className="card w-[350px] h-[350px] flex flex-col text-center justify-center items-center leading-[40px] shadow-about-us">
                          <span className="w-[65px] h-[65px] text-[#FF8C00] bg-transaprent rounded-full text-[1.8rem] flex justify-center items-center border-[#FF8C00] border-2">
                            <FontAwesomeIcon icon={faRocketchat} />
                          </span>
                          <h1 className="text-[#263B5E] text-lg font-[500] mt-4">
                            {items.title}
                          </h1>
                          <p className="text-[15px] p-4 text-[#6A7695] font-[500]">
                            {items.para}
                          </p>
                          <button className="w-[180px] h-[50px] rounded-full bg-[#FF8C00] text-white font-[500] hover:bg-transparent hover:text-[#FF8C00] hover:border-2 hover:border-[#FF8C00]">
                            {items.btntxt}
                          </button>
                        </div>
                      </>
                    ))}
                  </>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[100vh] bg-[#FBFBFD] mb-[40px]">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-3xl font-semibold p-10">
            Email Support
          </h1>
          <p className="text-center w-[50%] text-[1.1rem] p-4 text-[#8F7A7A]">
            Please submit your questions, comments, and other inquires below
            along with your contact information. One of our team members will
            reach out to you promptly.
          </p>
        </div>
        <SupportForm />
      </div>
    </General>
  );
}

export default Support;
