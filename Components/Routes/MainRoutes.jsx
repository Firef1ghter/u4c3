import react from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";

const Mainroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
       {/* keep all the routes here  */}
       {/* /books/* route need to be protected */}
       <Route exact path="/" element={<Home />} />
       <Route exact path="Login" element={<Login/>} />
       <Route exact path="Logout" element={<Logout />} />
       <Route exact path="About" element={<About />} />
       <Route exact path="Books" element={<Books />} />
       <Route exact path="SingleBook" element={<SingleBook />} />



      </Routes>
    </>
  );
};
export default Mainroutes;
