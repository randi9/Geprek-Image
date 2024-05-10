import React, { useState } from "react";
import Compressor from "browser-image-compression";

function ImageCompressor({ onCompressedImage }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleCompress = async () => {
    if (!selectedFile) return;

    try {
      const compressedFile = await Compressor(selectedFile, {
        maxWidthOrHeight: 500, // Mengatur maksimum lebar atau tinggi gambar
      });

      const reader = new FileReader();
      reader.onloadend = () => onCompressedImage(reader.result);
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button
        className="bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300 mt-5 "
        onClick={handleCompress}
        disabled={!selectedFile}
      >
        Compress
      </button>
    </div>
  );
}

export default ImageCompressor;
