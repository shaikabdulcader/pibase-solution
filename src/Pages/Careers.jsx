import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import General from "../Layout/General";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClock,
  faHandsBubbles,
} from "@fortawesome/free-solid-svg-icons";
import { faBlackTie } from "@fortawesome/free-brands-svg-icons";
import fetchAllData from "../api/fetchData";
function Careers() {
  const [careerData, setCareerData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchAllData.fetchCareerData();  
      setCareerData(data);
      
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

  if (careerData === null) {
    return <div>Loading...</div>;
  }

  return (
    <General>
      <div className="h-[90vh] w-[100%] bg-[#F4EDE4] flex">
        <div className="w-[50%] flex flex-col justify-center items-center text-[#000000]">
          {careerData.map((items) => (
            <>
              {items.main.map((items) => (
                <>
                  <h1 className="text-2xl font-[600]">{items.title}</h1>
                  <h1 className="text-6xl font-[600] m-3">{items.title2}</h1>
                  <p className="w-[450px] m-5 font-[400] text-[1.1rem]">
                    {items.para}
                  </p>
                  <Link to="/register">
                  <button className="h-[60px] w-[200px] text-white bg-[#FF8C00] rounded-full hover:bg-[white] hover:text-[#FF8C00] hover:transition hover:border-2 hover:border-[#FF8C00] font-[400]">
                    {items.btntxt}
                  </button>
                  </Link>
                </>
              ))}
            </>
          ))}
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="w-[75%]">
            {careerData.map((items) => (
              <>
                {items.main.map((items) => (
                  <>
                    <img src={items.img} alt="" />
                  </>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-[100%]">
        <div className="text-center flex flex-col justify-center items-center">
          {careerData.map((items) => (
            <>
              {items.posbytz.map((items) => (
                <>
                  <h1 className="text-[3.6rem] font-[700] mt-10">
                    {items.title}
                  </h1>
                  <h2 className="w-[1000px] mt-5 font-[400] text-lg">
                    {items.para}
                  </h2>
                </>
              ))}
            </>
          ))}
        </div>
        <div className="w-[100%] h-[50vh] mt-10 p-16">
          <div className="grid grid-cols-3 gap-10">
            {careerData.map((items) => (
              <>
                {items.card.map((items) => (
                  <>
                    <div class="card w-[350px] h-[250px] text-[#000000] flex flex-col justify-center">
                      <span className="text-[3rem] text-[#FF8C00]">
                        <FontAwesomeIcon icon={faHandsBubbles} />
                      </span>
                      <h1 className="text-[1.2rem] font-semibold">
                        {items.title}
                      </h1>
                      <p className="text-[1.2rem] font-[400]">{items.para}</p>
                    </div>
                  </>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[90vh] w-[100%] flex">
        <div className="w-[50%] flex flex-col justify-center items-center gap-[35px]">
          {careerData.map((items) => (
            <>
              {items.core.map((items) => (
                <>
                  <h1 className="text-4xl font-[500]">{items.title}</h1>
                  <p className="w-[500px] text-[1.1rem]">{items.para}</p>
                  <div className="w-[60%] h-[20%]">
                    <div class="grid grid-cols-2 gap-4">
                      {items.cards.map((items) => (
                        <>
                          <div className="card flex gap-2">
                            <img
                              src={items.img}
                              alt=""
                              className="w-[25px] h-[25px]"
                            />
                            <p className="font-[500] text-[1.1rem]">
                              {items.title}
                            </p>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
        <div className="w-[50%] flex items-center justify-center">
          {careerData.map((items) => (
            <>
              {items.core.map((items) => (
                <>
                  <img src={items.img} alt="" />
                </>
              ))}
            </>
          ))}
        </div>
      </div>
      <div className="w-[100%] h-[90vh] flex gap-10">
        <div className="w-[50%] h-[90vh] flex justify-end items-center">
          {careerData.map((items) => (
            <>
              {items.worklife.map((items) => (
                <>
                  <div>
                    <img src={items.img} alt="" />
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
        <div className="w-[50%] h-[90vh] text-[#000000] flex flex-col justify-center gap-8">
          {careerData.map((items) => (
            <>
              {items.worklife.map((items) => (
                <>
                  <h1 className="text-[2.5rem] font-[500]">{items.title}</h1>
                  <p className="text-[1.1rem] w-[500px] font-[500]">
                    {items.para}
                  </p>
                  <ul className="leading-10 text-[#59595F]">
                    {items.subcontents.map((items) => (
                      <>
                        <li>
                          <span className="text-[#FF8C00]">
                            <FontAwesomeIcon icon={faCheck} />
                          </span>{" "}
                          {items.para}
                        </li>
                      </>
                    ))}
                  </ul>
                </>
              ))}
            </>
          ))}
        </div>
      </div>
      <div className="w-[100%] h-[100vh] px-[8rem]">
        <div>
          {careerData.map((items) => (
            <>
              {items.positions.map((items) => (
                <>
                  <h1 className="text-4xl font-semibold">{items.title}</h1>
                  <div class="grid grid-cols-3 gap-1 mt-[70px]">
                    {items.cards.map((items) => (
                      <>
                        <div className="card w-[350px] h-[250px] pl-[1.4rem] rounded-lg shadow-careers mb-10">
                          <div className="flex flex-col gap-5">
                            <span className="text-[3rem] text-[#FF8C00]">
                              <FontAwesomeIcon icon={faBlackTie} />
                            </span>
                            <h1 className="w-[250px] text-[1.5rem] font-semibold">
                              {items.title}
                            </h1>
                            <button className="w-[150px] h-[45px] rounded-full bg-[#FF8C00] text-white font-[500] hover:bg-white hover:text-[#FF8C00] hover:border-[#FF8C00] hover:border-2">
                              {items.btntext}
                            </button>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
      </div>
      <div className="w-[100%] h-[55vh] bg-[#000000] text-white flex flex-col text-center justify-center items-center gap-10">
        {careerData.map((items) => (
          <>
            {items.principle.map((items) => (
              <>
                <h1 className="text-6xl font-[500]">{items.title}</h1>
                <p className="w-[700px] text-[1.1rem]">{items.para}</p>
                <div className="w-[180px] h-[50px] p-3 bg-[#FF900A] rounded-full hover:bg-white hover:text-[#FF900A] hover:border-2 hover:border-[#FF900A] hover:transition-all">
                  <button className="font-[500]">{items.btntxt}</button>
                </div>
              </>
            ))}
          </>
        ))}
      </div>
      <div className="w-[100%] h-[55vh] bg-career bg-contain bg-fixed">
        <div className="flex flex-col p-10 w-[100%] h-[60vh] text-white font-[500]">
          {careerData.map((items) => (
            <>
              {items.fun.map((items) => (
                <>
                  <h1 className="text-5xl">{items.title}</h1>
                  <h3 className="text-lg">{items.para}</h3>
                </>
              ))}
            </>
          ))}
        </div>
      </div>
    </General>
  );
}

export default Careers;
