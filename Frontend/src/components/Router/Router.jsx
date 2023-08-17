import React from "react";
import Home from "../../pages/Home/Home";
import Equipe from "../../pages/Equipe/Equipe";
// import Location from "../../pages/Location/Location";
import NotFound from "../../pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* {/* <Route path="/apropos" element={<APropos />} /> */}
      <Route path="/Equipe" element={<Equipe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Router;
