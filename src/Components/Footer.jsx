import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import fetchAllData from "../api/fetchData"

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchAllData.fetchFooterData();
      setFooterData(data);

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

  if (footerData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <footer className="bg-[#07112D] text-white p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {footerData.map((items) => (
            <>
              <div>
                <img src={items.logo} alt="PosBytz Logo" className="mb-4" />
                <p>{items.para1}</p>
                <p className="mt-2">{items.para2}</p>
              </div>
              <div>
                {items.companydetails.product.map((items) => (
                  <>
                    {items.map((items) => (
                      <>
                        <div className="container">
                          <h3 className="font-semibold mb-4">{items.title}</h3>
                          {items.contents.map((items) => (
                            <>
                              <ul className="space-y-2">
                                <li>
                                  <a href="#" className="hover:text-orange-400">
                                    {items.txt}
                                  </a>
                                </li>
                              </ul>
                            </>
                          ))}
                        </div>
                      </>
                    ))}
                  </>
                ))}
              </div>

              <div>
                {items.companydetails.company.map((items) => (
                  <>
                    {items.map((items) => (
                      <>
                        <div className="container">
                          <h3 className="font-semibold mb-4">{items.title}</h3>
                          {items.contents.map((items) => (
                            <>
                              <ul className="space-y-2">
                                <li>
                                  <a href="#" className="hover:text-orange-400">
                                    {items.txt}
                                  </a>
                                </li>
                              </ul>
                            </>
                          ))}
                        </div>
                      </>
                    ))}
                  </>
                ))}
              </div>

              <div>
                {items.companydetails.support.map((items) => (
                  <>
                    {items.map((items) => (
                      <>
                        <div className="container">
                          <h3 className="font-semibold mb-4">{items.title}</h3>
                          {items.contents.map((items) => (
                            <>
                              <ul className="space-y-2">
                                <li>
                                  <a href="#" className="hover:text-orange-400">
                                    {items.txt}
                                  </a>
                                </li>
                              </ul>
                            </>
                          ))}
                        </div>
                      </>
                    ))}
                  </>
                ))}
              </div>

              <div>
                {items.companydetails.partners.map((items) => (
                  <>
                    {items.map((items) => (
                      <>
                        <div className="container">
                          <h3 className="font-semibold mb-4">{items.title}</h3>
                          {items.contents.map((items) => (
                            <>
                              <ul className="space-y-2">
                                <li>
                                  <a href="#" className="hover:text-orange-400">
                                    {items.txt}
                                  </a>
                                </li>
                              </ul>
                            </>
                          ))}
                        </div>
                      </>
                    ))}
                  </>
                ))}
              </div>

              <div>
                {items.companydetails.account.map((items) => (
                  <>
                    {items.map((items) => (
                      <>
                        <div className="container">
                          <h3 className="font-semibold mb-4">{items.title}</h3>
                          {items.contents.map((items) => (
                            <>
                              <ul className="space-y-2">
                                <li>
                                  <a href="#" className="hover:text-orange-400">
                                    {items.txt}
                                  </a>
                                </li>
                              </ul>
                            </>
                          ))}
                        </div>
                      </>
                    ))}
                  </>
                ))}
              </div>
            </>
          ))}
          {footerData.map((items) => (
            <>
              <div className="container mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col items-center">
                <div className="flex space-x-4 mb-4">
                  <a href="#" className="text-white hover:text-orange-400">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="text-white hover:text-orange-400">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="text-white hover:text-orange-400">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
                <p className="text-sm">{items.findus}</p>
              </div>
            </>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
