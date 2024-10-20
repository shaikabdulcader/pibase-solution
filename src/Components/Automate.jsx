import React from 'react'
import { useState, useEffect } from 'react';
import fetchAllData from '../api/fetchData';
function Automate() {

  const [automateData, setAutomateData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchAllData.fetchAutomateData();
      setAutomateData(data);

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

  if (automateData === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <section className='bg-[#FF8C00] w-[100%] h-[60vh] justify-center flex items-center'>
        {
          automateData.map((items, i)=>(
            <div key={i}>
            <div className="text-center">
                    <h1 className='m-5 w-[1000px] text-5xl leading-[60px] text-white font-semibold'>{items.title}</h1>
                    <button className='border-2 w-[250px] h-[50px] bg-white rounded-full text-[1.1rem] text-[#FF8C00] font-semibold'>{items.btntxt}</button>
                </div>
            </div>
          ))
        }
    </section>
    </>
  )
}

export default Automate