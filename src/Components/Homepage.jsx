import React from "react";
import { useState, useEffect } from "react";
import fetchAllData from "../api/fetchData"
function Homepage() {

  const [homeData, setHomeData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {

      const data = await fetchAllData.fetchHomeData();
      setHomeData(data); 
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

  if (homeData === null) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="home-page text-center flex justify-center items-center flex-col h-screen  px-56">
        {
          homeData.map((items,i)=>(
            <div key={i}>
             <h1 className="text-5xl font-bold">{items.title}</h1>
            <p className="text-lg p-1 text-center px-40">{items.content}</p>
            <button className="m-10 w-60 h-14 rounded-3xl text-white bg-default-orange font-bold">{items.btntxt}</button>
            <img src={items.img} alt="" />
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Homepage;
