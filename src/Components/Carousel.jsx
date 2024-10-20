import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetchAllData from "../api/fetchData";
function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const [carousalData, setCarousalData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchAllData.fetchCarousalData();
      setCarousalData(data);
      data.forEach((items) => {
        // console.log(items);
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

  if (carousalData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-3/4 m-auto">
        <div className="">
          {carousalData.map((items, i) => (
            <div key={i}>
              {items.cardata.map((items, i) => (
                <div key={i}>
                  <Slider {...settings}>
                    {items.map((items, j) => (
                      <div key={j}>
                        <div className="flex justify-center">
                          <div className="mt-10 gap-2">
                            <img src={items.img} alt="" />
                          </div>
                        </div>
                        {/* {console.log(items.img)} */}
                      </div>
                    ))}
                  </Slider>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
