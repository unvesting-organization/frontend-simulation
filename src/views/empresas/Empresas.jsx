import { useEffect, useState } from "react";
import Buttons from "../../common/Buttons";
import Card from "./common/Card";

import axios from "axios";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

// const empresas = [
//   {
//     name: "Empresa 1",
//     nicho: "Técnología",
//     descripcion: "Esta es una empresa de tecnología dedicada",
//     tazaCreci: 30,
//     riesgo: "medio",
//   },
//   {
//     name: "Empresa 2",
//     nicho: "Energía",
//     descripcion: "Esta es una empresa de tecnología dedicada",
//     tazaCreci: 24,
//     riesgo: "alto",
//   },
//   {
//     name: "Empresa 3",
//     nicho: "Técnología",
//     descripcion: "Esta es una empresa de tecnología dedicada",
//     tazaCreci: 46,
//     riesgo: "medio",
//   },
//   {
//     name: "Empresa 4",
//     nicho: "Energía",
//     descripcion: "Esta es una empresa de tecnología dedicada",
//     tazaCreci: 24,
//     riesgo: "bajo",
//   },
// ];

const Empresas = ({ momento }) => {
  const { grupo } = useParams();
  const [empresas, setEmpresas] = useState([]);
  const [loading, setLoading] = useState(true);

  const grupoRuta = grupo == "mañana" ? "Alpha1" : "Dragon2";

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await axios.get(
          `https://api-workshop-silumation.vercel.app/companies_data?time=${momento}&key=Beta0`
        );
        setLoading(false);
        setEmpresas(response.data);
      } catch (error) {
        console.error("Error fetching empresas data:", error);
      }
    };

    fetchEmpresas();
  }, [momento]);

  if (loading) {
    return <h1 className="">Loading...</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6 lg:gap-9">
      {/* <Buttons ruteAnt="/" ruteSig={`/${grupo}/ranking`} sig /> */}
      <h2 className="text-white text-4xl lg:text-5xl">EMPRESAS</h2>

      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center lg:items-stretch gap-3">
        {empresas.map((empresa, index) => (
          <Card
            key={index}
            empresa={empresa.Nombre}
            nicho={empresa.Nicho}
            descripcion={empresa.Descripcion}
            tazaCreci={empresa.Crecimiento}
            riesgo={empresa.Riesgo}
          />
        ))}
      </div>
    </div>
  );
};

Empresas.propTypes = {
  momento: PropTypes.number.isRequired,
};

export default Empresas;
