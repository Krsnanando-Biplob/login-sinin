import { Outlet } from "react-router-dom";
import Hadder from "../Hadder/Hadder";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4">
        <Hadder></Hadder>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>

  );
};

export default Root;