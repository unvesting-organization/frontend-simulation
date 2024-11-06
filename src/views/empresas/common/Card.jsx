import PropTypes from "prop-types";

const Card = ({ empresa, nicho, descripcion, tazaCreci, riesgo, valor }) => {
  return (
    <div className="w-10/12 lg:w-5/12 p-2 bg-white rounded-xl flex items-center gap-3 relative">
      <div className="w-24 lg:w-32 h-24 lg:h-32 rounded-xl card">
        <img src="" alt="" />
      </div>

      <div className="w-8/12 flex flex-col justify-start lg:gap-1">
        <h2 className="text-2xl lg:text-3xl">{empresa}</h2>
        <h3 className="-mt-2 text-lg lg:text-xl font-bold textArimo">
          {nicho}
        </h3>
        <p className="text-sm lg:text-lg leading-4 lg:leading-5 font-bold textArimo">
          {descripcion}
        </p>
        <p className="text-lg textGreen">Taza de crecimiento: {tazaCreci}</p>
        <p className="-mt-2 text-lg textRed">Riesgo {riesgo}</p>
      </div>
      <p className="absolute bottom-2 right-3 textGreen">Valor: {valor}</p>
    </div>
  );
};

Card.propTypes = {
  empresa: PropTypes.string.isRequired,
  nicho: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  tazaCreci: PropTypes.string.isRequired,
  riesgo: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
};

export default Card;
