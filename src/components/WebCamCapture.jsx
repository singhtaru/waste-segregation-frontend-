import  { useRef, useCallback } from "react"; // userRef: Used to create a reference to the webcam component, allowing us to interact with it 
// useCallback: Optimizes the captureImage function by ensuring it doesn’t get recreated unnecessarily
import PropTypes from "prop-types"; // PropTypes: Defines the expected props and ensures onCapture is a required function.
import Webcam from "react-webcam";// Webcam: A third-party package (react-webcam) for accessing the webcam and capturing images.

const WebCamCapture = ({ onCapture }) => {// This functional component receives a prop called onCapture, which is a function that will handle the captured image.
  const webcamRef = useRef(null);// reference (useRef) stores a reference to the <Webcam> component so that we can access its methods, like getScreenshot()

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      onCapture(imageSrc);
    }
  }, [onCapture]);
//   captureImage function:
//        Calls webcamRef.current.getScreenshot() to capture an image.
//        If an image is captured, it calls onCapture(imageSrc) to pass the image to the parent component.

// useCallback ensures captureImage is not recreated on every render unless onCapture changes, improving performance
  return (
    <div className="webcam-capture">
      <Webcam
        audio={false}// no audio capture
        ref={webcamRef}// Connects the webcamRef reference to access its methods
        screenshotFormat="image/jpeg"// sets image format to jpeg
        width="100%"// occupy 100% parent width
        videoConstraints={{ facingMode: "user" }}// front camera
      />
      <button onClick={captureImage}>Capture Image</button>
    </div>
  );
};

// Add PropTypes validation
WebCamCapture.propTypes = {
  onCapture: PropTypes.func.isRequired,
}; // ensures onCapture is a required function, preventing errors if it's missing

export default WebCamCapture;
