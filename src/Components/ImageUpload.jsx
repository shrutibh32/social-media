import React, { useState } from "react";

export default function ImageUpload({ onImagesSelected }) {
  const [previewUrls, setPreviewUrls] = useState([]);

const handleImageChange = async (e) => {
  const files = Array.from(e.target.files);
    //  Check limit before processing
  if (files.length > 10) {
    alert("You can only upload up to 10 images.");
    return;
  }

  const previews = files.map((file) => URL.createObjectURL(file));
  setPreviewUrls(previews);

  const uploadedUrls = [];

  for (let file of files) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_preset"); // from Cloudinary

    const res = await fetch("https://api.cloudinary.com/v1_1/dtja0ajkf/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    uploadedUrls.push(data.secure_url); // 💡 Cloud URL
  }

  onImagesSelected(uploadedUrls); // send URLs back to parent
};


  return (
    <div className="mb-3">
      <label className="form-label">Upload Images</label>
      <input
        type="file"
        accept="image/*"
        multiple
        className="form-control"
        onChange={handleImageChange}
      />
      
      <div className="d-flex flex-wrap gap-2 mt-2">
        {previewUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`preview-${index}`}
            width={80}
            height={80}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
}
