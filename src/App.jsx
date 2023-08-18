import {  Outlet } from "react-router-dom";
import Headers from "./Components/Header";
import Footer from "./Components/Footer";



const App = () => {
  

  return (
    <>
    <Headers/>
  
      <div className="min-h-[80vh]">
      <Outlet/>
      </div>
  <Footer/>
    </>
  );
};

export default App;



