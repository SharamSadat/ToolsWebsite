import { BrowserRouter, Routes, Route } from "react-router-dom";

import Posts from "./posts";
import Users from "./users";
import Home from "./home";

function Proute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/posts" element={<Posts />} />

        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Proute;
