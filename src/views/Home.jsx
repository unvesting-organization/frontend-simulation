import mañanaImg from "../assets/img/mañana.png";
import tardeImg from "../assets/img/tarde.png";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-11">
      <h2 className="text-white text-center text-4xl font-bold">
        SELECCIONE LA JORNADA
      </h2>

      <main className="flex justify-around">
        <div className="w-2/5 relative">
          <p className="font-bold text-2xl md:text-3xl text-white absolute bottom-2 right-2 md:bottom-5 md:right-5">
            MAÑANA
          </p>
          <img className="" src={mañanaImg} alt="Imagen para la mañana" />
        </div>

        <div className="w-2/5 relative">
          <p className="font-bold text-2xl md:text-3xl text-white absolute bottom-2 right-2 md:bottom-5 md:right-5">
            TARDE
          </p>
          <img className="" src={tardeImg} alt="Imagen para la tarde" />
        </div>
      </main>
    </div>
  );
};

export default Home;
