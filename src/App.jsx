import { useState } from "react";
import WebCamCapture from "./components/WebCamCapture";
import Results from "./components/Results";
import WasteSegregationInfo from "./components/WasteSegregationInfo"; // Import the new component
import { classifyWaste } from "./api"; // API function that sends the image to a model for classification
import "./App.css";

function App() {
  const [prediction, setPrediction] = useState(""); {/*useState manages prediction result from the waste classification model*/}

  const handleCapture = async (imageSrc) => { {/*handleCapture function will receive the image and can store it, upload it, or process it further */}
    const result = await classifyWaste(imageSrc);
    setPrediction(result.label);
  };

  return (
    <div className="container">
      <h1>AI Waste Management System</h1>
      <WebCamCapture onCapture={handleCapture} /> 
      <Results prediction={prediction} /> {/*display classification result*/}
      <WasteSegregationInfo /> {/* Integrate the WasteSegregationInfo component */}
    </div>
  );
}

export default App;
