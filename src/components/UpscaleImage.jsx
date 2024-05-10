import React, { useState } from "react";
import Compressor from "browser-image-compression";

function UpscaleImage({ onUpscaledImage }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpscale = async () => {
    if (!selectedFile) return;

    try {
      const image = new Image();
      image.src = URL.createObjectURL(selectedFile);

      image.onload = function () {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = image.width * 2;
        canvas.height = image.height * 2;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) => {
            onUpscaledImage(URL.createObjectURL(blob));
          },
          "image/jpeg",
          1
        );
      };
    } catch (error) {
      console.error("Error upscaling image:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button
        className="bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300 mt-5 "
        onClick={handleUpscale}
        disabled={!selectedFile}
      >
        Upscale 2x
      </button>
    </div>
  );
}

export default UpscaleImage;
