import RankinCard from "./common/RankinCard";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Ranking = ({ momento }) => {
  const { grupo } = useParams();
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);
  const grupoRuta = grupo == "mañana" ? "Alpha1" : "Dragon2";

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await axios.get(
          `https://api-workshop-silumation.vercel.app/process?time=${
            momento + 1
          }&key=${grupoRuta}`
        );
        setLoading(false);
        setRanking(response.data);
      } catch (error) {
        console.error("Error fetching ranking data:", error);
      }
    };

    fetchRanking();
  }, [momento, grupoRuta]);

  if (loading) {
    return <h1 className="text-white text-center">Cargando los datos...</h1>;
  }

  console.log(ranking);

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h2 className="text-white text-3xl lg:text-4xl">RANKING</h2>

      <div className="w-full flex flex-col gap-8 justify-center items-center">
        <div className="w-full flex flex-wrap justify-center gap-3">
          {ranking.slice(0, 5).map((item, index) => (
            <RankinCard
              key={index}
              number={index + 1}
              name={item.user_id}
              porcentaje={item.net_worth}
              empresas={item.companies}
            />
          ))}
        </div>

        {ranking.length > 5 && (
          <div className="w-10/12 lg:w-7/12 xl:w-7/12 mb-5 px-4 py-3 bg-black flex flex-wrap justify-between gap-x-4 rounded-xl text-sm">
            {ranking.slice(5).map((item, index) => (
              <p key={index} className="xl:w-5/12 text-white xl:text-lg">
                {index + 6}.{" "}
                <span className="textArimo">
                  {item.user_id}{" "}
                  <span className="textGreen">
                    {item.net_worth.toFixed(2)}%
                  </span>{" "}
                  <span className={item.companies < 0 ? "textRed" : null}>
                    {item.companies.join(" / ")}
                  </span>
                </span>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Ranking.propTypes = {
  momento: PropTypes.number.isRequired,
};

export default Ranking;
