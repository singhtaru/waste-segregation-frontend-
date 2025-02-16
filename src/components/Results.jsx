import PropTypes from "prop-types"; // ✅ Import PropTypes
import "../App.css";

const Results = ({ prediction }) => {
  return (
    <div className="results">
      <h2>Prediction Result</h2>
      <p>{prediction ? prediction : "No prediction yet."}</p>
    </div>
  );
};

// ✅ Add PropTypes validation
Results.propTypes = {
  prediction: PropTypes.string.isRequired,
};

export default Results;
