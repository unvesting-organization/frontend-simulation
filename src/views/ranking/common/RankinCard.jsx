import PropTypes from "prop-types";

const RankinCard = ({ number, name, porcentaje, empresas }) => {
  return (
    <div className="w-5/12 lg:w-3/12 xl:w-2/12 h-20 lg:h-36 bg-white flex flex-col justify-center items-center relative rounded-xl">
      <p className="xl:text-3xl absolute top-1 left-2">{number}</p>
      <p className="text-lg xl:text-2xl">{name}</p>
      <p className="text-base xl:text-bases">{empresas.join(" / ")}</p>
      <p className="xl:text-lg absolute bottom-1 right-2 textGreen">
        <span className={porcentaje < 0 ? "textRed" : null}>
          {porcentaje.toFixed(2)}%
        </span>
      </p>
    </div>
  );
};

RankinCard.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  porcentaje: PropTypes.number.isRequired,
  empresas: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default RankinCard;
