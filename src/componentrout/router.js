import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.js";
import Blog from "./Blog.js";
import About from "./About.js";
import Contact from "./Contact.js";
import NotFound from "./NotFound/notFound.js";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
