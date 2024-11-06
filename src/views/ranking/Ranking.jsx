import RankinCard from "./common/RankinCard";
import Buttons from "../../common/Buttons";

import { ranking } from "./data/ranking";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Ranking = ({ momento, handleChangeView }) => {
  const { grupo } = useParams();
  // const [empresas, setEmpresas] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const grupoRuta = grupo == "mañana" ? "Alpha1" : "Dragon2";

  // useEffect(() => {
  //   const fetchEmpresas = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api-workshop-silumation.vercel.app/companies_data?time=${momento}&key=Beta0`
  //       );
  //       setLoading(false);
  //       setEmpresas(response.data);
  //     } catch (error) {
  //       console.error("Error fetching empresas data:", error);
  //     }
  //   };

  //   fetchEmpresas();
  // }, [momento]);

  // if (loading) {
  //   return <h1 className="">Loading...</h1>;
  // }

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      {/* <Buttons ruteAnt={`/${grupo}/empresas`} ruteSig={`/`} /> */}
      <h2 className="text-white text-3xl lg:text-4xl">RANKING</h2>

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

        <div className="w-10/12 lg:w-7/12 xl:w-5/12 xl:ml-20 mb-5 px-4 py-3 bg-black flex flex-wrap justify-between gap-x-4 rounded-xl text-sm">
          {ranking.slice(5).map((item, index) => (
            <p key={index} className="text-white xl:text-lg">
              {index + 6}.{" "}
              <span className="textArimo">
                {item.nombre}{" "}
                <span className="textGreen">{item.porcentaje}%</span>
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranking;
