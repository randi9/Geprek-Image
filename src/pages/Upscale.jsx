import React, { useState } from "react";
import UpscaleImage from "../components/UpscaleImage";
import Navbar from "../components/Navbar";

function Upscale() {
  const [upscaledImageUrl, setUpscaledImageUrl] = useState(null);

  const handleUpscaledImage = (upscaledImageUrl) => {
    setUpscaledImageUrl(upscaledImageUrl);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = upscaledImageUrl;
    link.download = "upscale_image.jpg"; // Ganti nama file sesuai kebutuhan
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deleteImage = () => {
    setUpscaledImageUrl(null);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-cyan-600 min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white mb-8 font-medium">Image Upscaler</h1>
        <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
          <UpscaleImage onUpscaledImage={handleUpscaledImage} />
          {upscaledImageUrl && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Upscaled Image
              </h3>
              <img
                src={upscaledImageUrl}
                alt="Upscaled"
                className="rounded-lg mb-4 w-50"
              />
              <button
                onClick={downloadImage}
                className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300"
              >
                Download
              </button>
              <button
                onClick={deleteImage}
                className="bg-red-600 text-white ml-3 py-2 px-4 rounded-lg hover:bg-red-800 transition duration-300"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Upscale;
