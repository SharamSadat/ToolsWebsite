import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Real_Project/pages/home/Home";
import About from "./Real_Project/pages/about/About";
import AddArtical from "./Real_Project/pages/addartical/addArtical";
import Artical from "./Real_Project/pages/artical/Artical";
import EditArtical from "./Real_Project/pages/editartical/editArtical";
import Site from "./Real_Project/pages/about/site";
import MoreDetails from "./Real_Project/pages/about/more";
import TeachInfo from "./Real_Project/pages/about/teachInfo";
import DeleteArtical from "./Real_Project/pages/editartical/deleteArtical";

function RealProj() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-artical" element={<AddArtical />} />
          <Route path="/artical/:articalId" element={<Artical />} />
          <Route path="/edit-artical" element={<EditArtical />} />
          <Route path="/delete-artical" element={<DeleteArtical />} />
          <Route path="/about/teachInfo/more/:teacherID" element={<MoreDetails />} />
          <Route path="/about/teachInfo" element={<TeachInfo />} />
          <Route path="/about/site" element={<Site />} />
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RealProj;
