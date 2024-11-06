import { Link, useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Buttons = ({ handleUpdateRoute, momento }) => {
  const { grupo } = useParams();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  return (
    <div className="text-white flex gap-5 absolute top-5 right-5">
      <Link to={lastSegment == "empresas" ? `/` : `/${grupo}/empresas`}>
        <p>Volver</p>
      </Link>

      <Link
        to={
          lastSegment == "empresas"
            ? `/${grupo}/ranking`
            : momento == 3
            ? "/"
            : `/${grupo}/empresas`
        }
      >
        <p onClick={lastSegment == "ranking" ? handleUpdateRoute : null}>
          Siguiente
        </p>
      </Link>
    </div>
  );
};

export default Buttons;
