import RankinCard from "./common/RankinCard";

import { ranking } from "./data/ranking";

const Ranking = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h2 className="text-white text-3xl lg:text-4xl font-bold">RANKING</h2>

      <div className="w-full flex flex-col gap-8 justify-center items-center xl:items-start">
        <div className="w-full flex flex-wrap justify-center gap-3">
          {ranking.slice(0, 5).map((item, index) => (
            <RankinCard
              key={index}
              number={index + 1}
              name={item.nombre}
              porcentaje={item.porcentaje}
            />
          ))}
        </div>

        <div className="w-10/12 lg:w-7/12 xl:w-5/12 xl:ml-20 px-4 py-3 bg-black flex flex-wrap justify-between gap-x-4 rounded-xl">
          {ranking.slice(5).map((item, index) => (
            <p key={index} className="text-white xl:text-lg">
              <strong>{index + 6}.</strong> {item.nombre}{" "}
              <span className="textGreen">{item.porcentaje}%</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranking;
