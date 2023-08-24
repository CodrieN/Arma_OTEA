import React from "react";
import Home from "../../pages/Home/Home";
import Equipe from "../../pages/Equipe/Equipe";
import Jeux from "../../pages/Jeux/Jeux";
import Auth from "../../pages/Auth/Auth";
import NotFound from "../../pages/NotFound/NotFound";
import Operations from "../../pages/Operations/Operations";
import Forum from "../../pages/Forum/Forum";
import Gallery from "../../pages/Gallery/Gallery";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Equipe" element={<Equipe />} />
      <Route path="/Jeux" element={<Jeux />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Operations" element={<Operations />} />
      <Route path="/Forum" element={<Forum />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Router;
