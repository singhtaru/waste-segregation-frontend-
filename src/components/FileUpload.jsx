import { useState } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import "../App.css";

const FileUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      onUpload(file);
    }
  };

  return (
    <div className="file-upload">
      <h2>Upload an Image</h2>
      <input type="file" onChange={handleFileChange} />
      {image && <img src={URL.createObjectURL(image)} alt="Preview" />}
    </div>
  );
};

// ✅ Add PropTypes validation
FileUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
};

export default FileUpload;
