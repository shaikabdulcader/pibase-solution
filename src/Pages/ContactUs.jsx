import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../Components/ContactForm";
import General from "../Layout/General";
import fetchAllData from "../api/fetchData"
function ContactUs() {
  const [contactData, setContactData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchAllData.fetchContactData();  
      setContactData(data);
      
      data.forEach((item)=>{
        // console.log(item);
        
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

  if (contactData === null) {
    return <div>Loading...</div>;
  }


  return (
    <General>
      <div className="bg-[#957FB4] h-[50vh] w-[100%] text-white flex flex-col items-center justify-center">
        {
          contactData.map((items)=>(
            <>
            <h1 className="text-6xl font-bold">{items.title}</h1>
            <a href="">
              Home <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span>Contact us</span>
            </a>
            </>
          ))
        }
      </div>
      <div className="w-[100%] h-[100vh] bg-[#FBFBFD] mb-[40px]">
        <div className="flex flex-col items-center">
          {
            contactData.map((items)=>(
              <>
              {
                items.form.map((items)=>(
                  <>
                  <h1 className="text-center text-3xl font-semibold p-10">
                    {items.title}
                  </h1>
                  <p className="text-center w-[50%] text-[1.1rem] p-4 text-[#8F7A7A]">
                    {items.para}
                  </p>
                  </>
                ))
              }
              </>
            ))
          }
        </div>
        <ContactForm />
      </div>
    </General>
  );
}

export default ContactUs;
