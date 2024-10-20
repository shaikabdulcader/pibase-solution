// import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css"; 
// import { Link } from "react-router-dom";
// function RegisterForm() {
//   let options = [
//     {
//       content: "Restaurent",
//     },
//     {
//       content: "Bar & Restaurent",
//     },
//     {
//       content: "Cloud Kitchen",
//     },
//     {
//       content: "Resto Bar & Pub",
//     },
//     {
//       content: "Cafe",
//     },
//     {
//       content: "Ice Cream Palour",
//     },
//     {
//       content: "Food Truck",
//     },
//     {
//       content: "Juice Shop",
//     },
//     {
//       content: "Pizza Shop",
//     },
//     {
//       content: "Burgers & Chats",
//     },
//     {
//       content: "Dessert & Cakes",
//     },
//     {
//       content: "Bakery",
//     },
//     {
//       content: "Food Court",
//     },
//     {
//       content: "Cafeteria",
//     },
//     {
//       content: "Sweets & Savouries",
//     },
//     {
//       content: "Others",
//     },
//   ];
//   return (
//     <div className="min-h-screen flex items-center justify-center flex-col">
//       <div>
//         <img
//           alt=""
//           src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/logo_1630189049088.png"
//           className="mx-auto h-16 w-auto mb-5"
//         />
//       </div>
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">
//           Register Account
//         </h2>
//         <p className="text-sm text-[#757D85] mb-8">
//           Free on-boarding support. No credit card required.
//         </p>
//         <form>
//           <div className="mb-4">
//             <select
//               id="businessType"
//               className="w-full px-4 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             >
//               <option value="">Select Business Type</option>
//               {options.map((items) => (
//                 <>
//                   <option>{items.content}</option>
//                 </>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               id="email"
//               placeholder="Your email"
//               className="w-full px-4 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//           </div>
//           <div className="mb-4">
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                 <span className="text-lg">🇮🇳</span>{" "}
//               </span>
//               <input
//                 type="tel"
//                 id="mobile"
//                 placeholder="Your mobile number"
//                 className="w-full pl-12 px-4 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <a href="/" className="text-sm text-gray-600">
//               By clicking register, I accept the{" "}
//               <span className="text-purple-600 hover:underline">
//                 Terms & Conditions
//               </span>
//             </a>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#FF5722] text-white py-2 rounded-md text-[1.1rem] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
//           >
//             Register
//           </button>
//         </form>
//         <p className="text-center text-sm text-gray-600 mt-6">
//           Already Have an Account?{" "}
//           <Link className="text-purple-600 hover:underline" to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default RegisterForm;
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome for the country flag icon
import { Link } from "react-router-dom";

function RegisterForm() {
  // Options array with 'content' and 'value' properties
  let options = [
    { content: "Restaurant", value: "restaurant" },
    { content: "Bar & Restaurant", value: "bar-restaurant" },
    { content: "Cloud Kitchen", value: "cloud-kitchen" },
    { content: "Resto Bar & Pub", value: "resto-bar-pub" },
    { content: "Cafe", value: "cafe" },
    { content: "Ice Cream Parlour", value: "ice-cream-parlour" },
    { content: "Food Truck", value: "food-truck" },
    { content: "Juice Shop", value: "juice-shop" },
    { content: "Pizza Shop", value: "pizza-shop" },
    { content: "Burgers & Chats", value: "burgers-chats" },
    { content: "Dessert & Cakes", value: "dessert-cakes" },
    { content: "Bakery", value: "bakery" },
    { content: "Food Court", value: "food-court" },
    { content: "Cafeteria", value: "cafeteria" },
    { content: "Sweets & Savouries", value: "sweets-savouries" },
    { content: "Others", value: "others" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div>
        <img
          alt="Company Logo"
          src="https://posbytz.s3.ap-south-1.amazonaws.com/partners/1/logo_1630189049088.png"
          className="mx-auto h-16 w-auto mb-5"
        />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Register Account</h2>
        <p className="text-sm text-[#757D85] mb-8">
          Free on-boarding support. No credit card required.
        </p>
        <form>
          <div className="mb-4">
            <select
              id="businessType"
              className="w-full px-4 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Select Business Type"
            >
              <option value="">Select Business Type</option>
              {options.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.content}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Your email"
            />
          </div>
          <div className="mb-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-lg">🇮🇳</span>
              </span>
              <input
                type="tel"
                id="mobile"
                placeholder="Your mobile number"
                className="w-full pl-12 px-4 py-2 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Your mobile number"
              />
            </div>
          </div>
          <div className="mb-4">
            <a href="/" className="text-sm text-gray-600">
              By clicking register, I accept the{" "}
              <span className="text-purple-600 hover:underline">Terms & Conditions</span>
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF5722] text-white py-2 rounded-md text-[1.1rem] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Already Have an Account?{" "}
          <Link className="text-purple-600 hover:underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
