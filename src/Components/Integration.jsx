import React from 'react'
import img from '../assets/img/integration-img.png'
import { useEffect, useState } from 'react'
import fetchAllData from "../api/fetchData"
function Integration() {

  const [integrationData, setIntegrationData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {

      const data = await fetchAllData.fetchIntegrationData();
      setIntegrationData(data); 
      // data.forEach((items)=>{
      //   // console.log(items);
      // })
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

  if (integrationData === null) {
    return <div>Loading...</div>;
  }




  return (
    <>
    <section className='integration-section w-width-full bg-[#FBFBFD] mt-5'>
        <div className="int-text-content text-center leading-10">
        {
          integrationData.map((items, i)=>(
            <div key={i}>
            <h1 className='text-4xl font-semibold text-[#2C2C51]'>{items.title}</h1>
            <p className='m-4 text-[#7B7B93] text-base'>{items.content}</p>
            </div>
          ))
        }
        </div>
        <div className="int-img p-5">
            <img src={img} alt="integration"/>
        </div>
    </section>
    </>
  )
}

export default Integration