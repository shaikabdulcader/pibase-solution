import React from "react";
import { Routes, Route} from "react-router-dom";
import routee from "../src/Components/routee"
import General from "./Layout/General";



const routeComponents = routee.map(( route,i) => {

  return(  <Route path={route.path} key={i} element={<route.component/>} />)

});

 function App() {
  return (
    <>
    
      <Routes>
        {routeComponents}
        </Routes>
    </>
  );
}

export default App;
