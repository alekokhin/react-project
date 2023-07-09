import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./not-found";
import Home from "./pages/home";
import Registration from "./pages/registration";
import {
  Description,
  Email,
  Finish,
  FullName,
} from "./pages/registration/fullName";


function App() {

  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="*" element={<NotFound />} />
            <Route path="/registration" element={<Registration />}>
              <Route path="full-name" element={<FullName />} />
              <Route path="email" element={<Email />} />
              <Route path="description" element={<Description />} />
            </Route>
            <Route path="/finish" element={<Finish />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
