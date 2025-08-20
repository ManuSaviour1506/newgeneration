import React, { useState } from 'react';
import { IKContext, IKUpload } from 'imagekitio-react';
import axios from 'axios';

// Function to authenticate with ImageKit by fetching a token from the backend.
const authenticator = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user ? user.token : null;

    const response = await axios.get(
      "https://newgeneration-production.up.railway.app/api/imagekit-auth",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Authentication request failed", error);
    throw new Error("Failed to authenticate with ImageKit");
  }
};

function ImageUploader({ onSuccess }) {
  const [status, setStatus] = useState('idle'); // Tracks the upload status.

  const handleUploadStart = () => {
    setStatus('uploading');
  };

  // Called on successful upload. The result (res) contains the image URL.
  const handleSuccess = (res) => {
    setStatus('success');
    onSuccess(res); // Passes the full response to the parent component.
  };

  const handleError = (err) => {
    setStatus('error');
    console.error("Upload Error:", err);
  };

  return (
    <div>
      <IKContext
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
        authenticator={authenticator}
      >
        <IKUpload
          fileName="school-news-image.jpg"
          onUploadStart={handleUploadStart}
          onSuccess={handleSuccess}
          onError={handleError}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </IKContext>

      {/* Displays a status message to the user. */}
      <div className="mt-2 text-sm">
        {status === 'uploading' && <p className="text-gray-500">Uploading, please wait...</p>}
        {status === 'success' && <p className="text-green-600 font-semibold">✔ Upload successful!</p>}
        {status === 'error' && <p className="text-red-500">Upload failed. Please try again.</p>}
      </div>
    </div>
  );
}

export default ImageUploader;
