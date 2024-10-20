import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Demo from "./Demo";
import fetchAllData from "../api/fetchData";

function Testimonials() {

  const [testimonialsData, setTestimonialsData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchAllData.fetchTestimonialsData();
      setTestimonialsData(data);

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

  if (testimonialsData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="testimonial-section p-[6rem]">
        {
          testimonialsData.map((items, i)=>(
            <div key={i}>
             <h1 className="text-[#051441] text-5xl font-medium mb-9">
              {items.title}
            </h1>
            <div className="w-[100%] h-[auto] mt-10">
              <Demo/>
            </div>
            </div>
          ))
        }
      </section>
    </>
  );
}

export default Testimonials;
