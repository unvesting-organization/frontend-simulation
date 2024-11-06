import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import Home from "./views/Home";
import Empresas from "./views/empresas/Empresas";
import Ranking from "./views/ranking/Ranking";
import Buttons from "./common/Buttons";

import { useState } from "react";

import unvestingLogo from "./assets/img/unvesting_logo.png";
import "./App.css";

const Layout = ({ handleUpdateRoute, momento }) => {
  return (
    <div>
      <Buttons handleUpdateRoute={handleUpdateRoute} momento={momento} />
      <Outlet />
    </div>
  );
};

function App() {
  const [momento, setMomento] = useState(() => {
    const momento = localStorage.getItem("momento");
    return momento ? momento : 1;
  });

  const navigate = useNavigate();

  const saveMomentoStorage = ({ momento }) => {
    window.localStorage.setItem("momento", momento);
  };

  const resetMomentoStorage = () => {
    window.localStorage.removeItem("momento");
  };

  const resetMomentos = () => {
    setMomento(1);
    resetMomentoStorage();
  };

  const updateMomento = () => {
    const siguienteMomento = momento + 1;
    if (siguienteMomento > 3) {
      resetMomentos();
      alert("Fin de la simulación");
      navigate("/");
      return;
    }
    setMomento(siguienteMomento);
    saveMomentoStorage(siguienteMomento);
  };

  return (
    <div className="m-0 pt-7 mb-5 w-full h-screen flex flex-col  gap-8 content">
      <div className="w-16 h-16 md:w-32 md:h-32 2xl:w-36 2xl:h-36 fixed top-0 left-0 leftCirule"></div>

      <Link to="/">
        <img
          className="w-36 m-auto"
          src={unvestingLogo}
          alt="Logo de unvesting"
          onClick={resetMomentos}
        />
      </Link>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route
            path=":grupo"
            element={
              <Layout handleUpdateRoute={updateMomento} momento={momento} />
            }
          >
            <Route path="empresas" element={<Empresas momento={momento} />} />
            <Route path="ranking" element={<Ranking momento={momento} />} />
          </Route>
        </Route>
      </Routes>
      <div className="w-16 h-16 md:w-32 md:h-32 2xl:w-36 2xl:h-36 fixed bottom-0 right-0 rightCirule"></div>
    </div>
  );
}

export default App;
