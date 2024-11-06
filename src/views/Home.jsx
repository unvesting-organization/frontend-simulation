import { Link } from "react-router-dom";

import mañanaImg from "../assets/img/mañana.png";
import tardeImg from "../assets/img/tarde.png";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-wrap gap-11">
      <h2 className="text-white text-center text-5xl">SELECCIONE LA JORNADA</h2>

      <main className="w-full flex justify-around">
        <Link to="mañana/empresas" className="w-10/12 flex justify-center">
          <div className="relative flex justify-center">
            <p className="text-3xl lg:text-5xl text-white absolute bottom-2 right-9 md:bottom-5 md:right-12 lg:right-16 2xl:right-20">
              MAÑANA
            </p>
            <img
              className="w-10/12"
              src={mañanaImg}
              alt="Imagen para la mañana"
            />
          </div>
        </Link>
        <Link to="tarde/empresas" className="w-10/12 flex justify-center">
          <div className=" relative flex justify-center">
            <p className="text-3xl lg:text-5xl text-white absolute bottom-2 right-9 md:bottom-5 md:right-12 lg:right-16 2xl:right-20">
              TARDE
            </p>
            <img
              className="w-10/12"
              src={tardeImg}
              alt="Imagen para la tarde"
            />
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Home;
