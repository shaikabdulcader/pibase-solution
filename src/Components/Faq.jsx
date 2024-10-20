import React from "react";
import { useEffect, useState } from "react";
import Accordion from "./Accordion";
import fetchAllData from "../api/fetchData";
function Faq() {

  const [faqData, setFaqData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchAllData.fetchFaqData();
      setFaqData(data);

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

  if (faqData === null) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <section className="p-[5rem]">
        {
          faqData.map((items, i)=>(
            <div key={i}>
             <div className="faq-heading text-center mb-[60px]">
              <h1 className="text-5xl font-semibold">{items.title}</h1>
            </div>
            </div>
          ))
        }
        {
          faqData.map((items, i)=>(
            <div key={i}>
            {items.accordion.map((items, j) => (
              <div key={j}>
                <div className="p-4 font-medium border-b-2 rounded-lg mb-2">
                  <Accordion title={items.title} answer={items.content} />
                </div>
              </div>
            ))}
            </div>
          ))
        }
      </section>
    </>
  );
}

export default Faq;
