import React from 'react'
import Carousel from './Carousel'
import { useState,useEffect } from 'react'
import fetchAllData from "../api/fetchData"
function Brand() {

  const [brandData, setBrandData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {

      const data = await fetchAllData.fetchBrandData();
      setBrandData(data); 
      data.forEach((items)=>{
        // console.log(items);
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

  if (brandData === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <section className='barnd-section h-height-full w-width-full flex flex-wrap'>
        <div className="brand-text-container w-[40%] flex flex-col justify-center items-center">
            {
              brandData.map((items)=>(
                <>
                <div className="brand-text-content text-left">
                    <h1 className='text-[3rem] mb-5 text-[#2C2C51]'>{items.title}</h1>
                    <p className='mb-5 text-[1.1rem] text-[#7B7B9A]'>{items.content}</p>
                    </div>
                    <div className="brand-btn">
                    <button className='mt-5 w-[220px] h-[60px] rounded-full bg-default-orange text-white font-semibold'>{items.btntext}</button>
                    </div>
                </>
              ))
            }
        </div>
        <div className="brand-carousal w-[60%] bg-slate-100">
          <Carousel/>
        </div>
    </section>
    </>
  )
}

export default Brand