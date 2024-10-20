import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import General from "../Layout/General";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelopeOpen,
  faHandshake,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

import fetchAllData from "../api/fetchData";

function AboutUs() {
  const [aboutData, setAboutData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchAllData.fetchAboutData();
      setAboutData(data);
      data.forEach((items) => {
        console.log(items);
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

  if (aboutData === null) {
    return <div>Loading...</div>;
  }

  return (
    <General>
      <div className="bg-[#957FB4] h-[50vh] w-[100%] text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">About Us</h1>
        <a href="">
          Home <FontAwesomeIcon icon={faArrowRight} /> <span>About us</span>
        </a>
      </div>
      <div className="about w-[100%] h-[100vh] flex">
        <div className="w-[50%] h-[100vh] flex flex-col justify-center px-24 leading-10">
          {aboutData.map((items) => (
            <>
              <h1 className="text-[3.6rem] font-[400]">{items.title}</h1>
              <ul className="text-[1.1rem] mt-5 text-[#54595F]">
                {items.contents.map((items) => (
                  <>
                    <li>{items.title}</li>
                  </>
                ))}
              </ul>
            </>
          ))}
        </div>
        <div className="w-[50%] h-[100vh] flex flex-col items-center justify-center gap-5">
          {aboutData.map((items) => (
            <>
              {items.img.map((items) => (
                <>
                  <div>
                    <img src={items.url} alt="posbytz_img" />
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
      </div>
      <div className="w-[100%] h-[80vh] bg-[#FFFFFF] mb-10">
        <div className="text-center mt-[20px]">
          {aboutData.map((items) => (
            <>
              {items.howtoreach.map((items) => (
                <>
                  <h1 className="text-4xl font-semibold m-4">{items.title}</h1>
                  <h3 className="text-[#7A7A8B] text-[1.1rem] font-[400]">
                    {items.description}
                  </h3>
                </>
              ))}
            </>
          ))}
        </div>
        <div className="flex justify-center items-center mt-[70px]">
          <div class="grid grid-cols-3 gap-10">
            {aboutData.map((items) => (
              <>
                {items.howtoreach.map((items) => (
                  <>
                    {items.card.map((items) => (
                      <>
                        <div className="card w-[350px] h-[350px] flex flex-col text-center justify-center items-center leading-[40px] shadow-about-us">
                          <span className="w-[65px] h-[65px] text-white bg-[#FF8C00] rounded-full text-[1.8rem] flex justify-center items-center">
                            <FontAwesomeIcon icon={faHandshake} />
                          </span>
                          <h1 className="text-[#263B5E] text-lg font-[500] mt-4">
                            {items.title}
                          </h1>
                          <p className="text-[15px] p-4 text-[#6A7695] font-[500]">
                            {items.description}
                          </p>
                          <button className="text-[#AFB8CE] text-[1.8rem] hover:text-[#FF8C00]">
                            <FontAwesomeIcon icon={faArrowRight} />
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
    </General>
  );
}

export default AboutUs;
