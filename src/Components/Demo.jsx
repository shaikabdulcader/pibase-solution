import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import fetchAllData from "../api/fetchData";
function Demo() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

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
      <div>
        {
          testimonialsData.map((items)=>(
            <>
            <Slider {...settings}>
              {items.card.map((items) => (
                <>
                  <div className="test-card-container">
                    <div className="card-1 w-[100%] h-[60vh] shadow-test-card rounded-lg">
                      <div className="card-header h-[15vh] flex items-center justify-around">
                        <img className="h-[80px] w-[80px] rounded-full" src={items.img} alt="" />
                        <p className="text-[#051441] text-[1.1rem] font-semibold">
                          {items.title}
                        </p>
                        <div className="card-star flex gap-1">
                          <p className="text-amber-300">
                            <FontAwesomeIcon icon={faStar} />
                          </p>
                          <p className="text-amber-300">
                            <FontAwesomeIcon icon={faStar} />
                          </p>
                          <p className="text-amber-300">
                            <FontAwesomeIcon icon={faStar} />
                          </p>
                          <p className="text-amber-300">
                            <FontAwesomeIcon icon={faStar} />
                          </p>
                          <p className="text-amber-300">
                            <FontAwesomeIcon icon={faStar} />
                          </p>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="text-content p-10">
                          <p className="leading-7 text-[#707A9A] text-[1rem]">
                            {items.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </>
          ))
        }
      </div>
    </>
  );
}

export default Demo;
