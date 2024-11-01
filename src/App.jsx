import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./views/Home";
import Empresas from "./views/empresas/Empresas";
import "./App.css";

function App() {
  return (
    <div className="m-0 p-0 w-full h-screen flex flex-col justify-center items-center content">
      <div className="w-16 h-16 md:w-32 md:h-32 2xl:w-36 2xl:h-36 absolute top-0 left-0 leftCirule"></div>

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path=":grupo" element={<Outlet />}>
            <Route path="empresas" element={<Empresas />} />
          </Route>
        </Route>
      </Routes>
      <div className="w-16 h-16 md:w-32 md:h-32 2xl:w-36 2xl:h-36 absolute bottom-0 right-0 rightCirule"></div>
    </div>
  );
}

export default App;
