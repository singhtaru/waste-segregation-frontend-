// import axios from "axios";

// export const classifyWaste = async (imageFile) => {
//   const formData = new FormData();
//   formData.append("image", imageFile);

//   try {
//     const response = await axios.post("https://your-backend-url.com/predict", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });

//     return response.data; // AI model response
//   } catch (error) {
//     console.error("Error in AI classification:", error);
//     return { label: "Error processing image" };
//   }
// };


// src/api.js
export const classifyWaste = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ label: "Recyclable Waste" }); // Mock response
      }, 1000); // Simulate network delay
    });
  };
  