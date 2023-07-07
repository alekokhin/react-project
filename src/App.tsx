import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./not-found";
import Home from "./pages/home";
import Stepper from "./pages/stepper";
import UserInfo from "./pages/stepper/userInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/stepper" element={<Stepper />} />
        <Route path="/stepper/user-info" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
