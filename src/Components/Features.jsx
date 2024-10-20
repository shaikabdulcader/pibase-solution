import React from "react";
import { useState, useEffect } from "react";
import fetchAllData from "../api/fetchData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function Features() {
  const [featuresData, setFeaturesData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {

      const data = await fetchAllData.fetchFeaturesData();
      setFeaturesData(data); 
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

  if (featuresData === null) {
    return <div>Loading...</div>;
  }

  
  return (
    <>
      <section className="features-section">
        {
          featuresData.map((items)=>(
            <>
            <h1 className="text-center text-6xl font-semibold mb-16">
              {items.title}
            </h1>
            <div className="erp-container w-full h-56  my-5 flex justify-evenly cursor-pointer">
              {items.subcontent.map((items) => (
                <>
                  <div className="erp-childs  hover:border-b-2 border-default-orange size-56 flex justify-center">
                    <div className="erp-child-img size-10">
                      <img src={items.img} alt="erp.img" />
                      <p className="text-base text-default-orange text-center mt-3">
                        {items.title}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            {items.keyhighlights.map((items) => (
              <>
                <div className="key-highlights w-width-full h-height-70 flex p-10">
                  <div className="key-highlights-content w-width-half flex flex-col justify-center">
                    <div className="key-high p-16">
                      <h1 className="text-2xl text-default-orange font-semibold mb-5">
                        {items.title}
                      </h1>
                      {items.contents.map((items) => (
                        <>
                          <ul>
                            <li className="text-base leading-10 font-semibold">
                            <FontAwesomeIcon icon={faCheck} /> {items.topics}
                            </li>
                          </ul>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="key-highlights-img-content w-width-half">
                    <div className="key-img-section flex justify-center">
                      <img className="size-96" src={items.img} alt="key-img" />
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
          ))
        }
      </section>
    </>
  );
}

export default Features;
