import PropTypes from "prop-types";

const Card = ({ empresa, nicho, descripcion, tazaCreci, riesgo }) => {
  return (
    <div className="w-10/12 lg:w-5/12 p-2 bg-white rounded-xl flex items-center gap-3 ">
      <div className="w-24 lg:w-32 h-24 lg:h-32 rounded-xl card">
        <img src="" alt="" />
      </div>

      <div className="w-8/12 flex flex-col justify-start lg:gap-1">
        <h2 className="text-2xl lg:text-3xl font-bold">{empresa}</h2>
        <h3 className="-mt-2 text-lg lg:text-xl font-semibold">{nicho}</h3>
        <p className="text-sm lg:text-lg leading-4 lg:leading-5">
          {descripcion}
        </p>
        <p className="text-lg font-semibold textGreen">
          Taza de crecimiento: {tazaCreci}%
        </p>
        <p className="-mt-2 text-lg font-semibold textRed">Riesgo {riesgo}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  empresa: PropTypes.string.isRequired,
  nicho: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  tazaCreci: PropTypes.number.isRequired,
  riesgo: PropTypes.string.isRequired,
};

export default Card;
