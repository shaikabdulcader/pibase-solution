import React from "react";
import { useState, useEffect } from "react";
import fetchAllData from "../api/fetchData"
function Erp() {

  const [posbytzData, setPosbytzData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {

      const data = await fetchAllData.fetchPosbytzData();
      setPosbytzData(data); 
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

  if (posbytzData === null) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <section className="erp-section">
        <div className="erp-head text-center flex flex-col justify-center leading-10">
          {
            posbytzData.map((items)=>(
               <>
              <h1 className="text-6xl font-semibold mb-4">{items.title1}</h1>
              <h1 className="text-3xl">{items.title2}</h1>
              <h1 className="text-7xl font-bold mt-4 text-default-orange">
                {items.title3}
              </h1>
            </>
            ))
          }
        </div>
        <div className="erp-card-part w-width-full mt-1 p-20">
          <div className="erp-card-container grid grid-cols-3 gap-14 flex-wrap">
            {
              posbytzData.map((items)=>(
                <>
                {
                  items.erpcard.map((items)=>(
                    <>
                    <div className="erp-cards w-80 h-height-80 border-4 rounded-card-radius border-pos">
                      <div className="erp-card-contents flex flex-col justify-center items-center m-10">
                        <img src={items.img} alt="erp-card-img" />
                        <h1 className="m-3 text-default-orange font-semibold">
                          {items.cardtitle}
                        </h1>
                        <h1 className="font-semibold text-base">
                          {items.title}
                        </h1>
                        <p className="mt-3">{items.content}</p>
                      </div>
                    </div>
                  </>
                  ))
                }
                </>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Erp;
