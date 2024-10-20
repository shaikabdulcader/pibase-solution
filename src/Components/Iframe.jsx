import React from "react";
import fetchAllData from "../api/fetchData"
import { useState, useEffect } from "react";
function Iframe() {

  const [iframeData, setIframeData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {

      const data = await fetchAllData.fetchIframeData();
      setIframeData(data); 
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

  if (iframeData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="w-[100%] h-[100vh] bg-[FBFBFD] text-center leading-[50px] mb-[250px]">
        <div className="iframe-container flex flex-col justify-center items-center">
          {
            iframeData.map((items, i)=>(
              <div key={i}>
              <h1 className="text-6xl font-bold m-3">{items.title}</h1>
              <h2 className="text-[1.2rem] leading-[50px] m-3 font-semibold">{items.subheading}</h2>
              <p className="text-[1.2rem] font-[400] mb-5">{items.content}</p>
              <iframe
                width="1200"
                height="600"
                src={items.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
}

export default Iframe;
