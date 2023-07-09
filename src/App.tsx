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
import ToDosPage from "./pages/todos";
import TodoDetailsPage from "./pages/todos/detail";


function App() {

  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="*" element={<NotFound />} />
            {/* ============================================= */}
            <Route path="/todos" element={<ToDosPage />}/>
            <Route path="/todos/:id" element={<TodoDetailsPage />} />
            {/* ============================================= */}
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
