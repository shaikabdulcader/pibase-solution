import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchAllData from "../api/fetchData";
const Navbar = () => {
  const [navbarData, setNavbarData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchAllData.fetchNavbarData();
      setNavbarData(data);
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

  if (navbarData === null) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px]">
          <div className="flex-shrink-0">
            {navbarData.map((item, index) => (
              <img key={index} src={item.img} alt="Logo" className="h-10" />
            ))}
          </div>
          <div className="hidden md:flex space-x-8">
            {navbarData.map((navItem) =>
              navItem.content.map((item, i) => (
                <div key={i} className="relative group">
                  <Link to={item.path} className="text-gray-800 hover:text-orange-500">
                    {item.title}
                  </Link>

                  {item.subtitle && item.subtitle.length > 0 && (
                    <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out">
                      {item.subtitle.map((subitem, j) => (
                        <Link
                          key={j}
                          to={subitem.path}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {subitem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
          <div>
            <Link
              to="/register"
              className="ml-4 px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
