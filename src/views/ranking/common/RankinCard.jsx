import PropTypes from "prop-types";

const RankinCard = ({ number, name, porcentaje }) => {
  return (
    <div className="w-5/12 lg:w-3/12 xl:w-2/12 h-20 lg:h-36 bg-white flex flex-col justify-center items-center relative rounded-xl">
      <p className="xl:text-xl absolute top-1 left-2">{number}</p>
      <p className="text-lg xl:text-2xl">{name}</p>
      <p className="xl:text-xl absolute bottom-1 right-2 textGreen">
        {porcentaje}%
      </p>
    </div>
  );
};

RankinCard.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  porcentaje: PropTypes.number.isRequired,
};
export default RankinCard;
