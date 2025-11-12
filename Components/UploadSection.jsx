import { useState } from "react";
import { InfoBadge } from "./InfoBadge";
import { Play, Upload } from "lucide-react";
import { Features } from "./Features";

export function UploadSection() {
  const [video, setVideo] = useState(null);
  const [videoName, setVideoName] = useState("Browse a video file");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setVideoName(file.name);
       // Upload logic here (e.g., send to backend or API)
      alert(`Video "${file.name}" uploaded successfully!`);
    }
  };

  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Video Based Search Engine
      </h2>

      <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-8">
        <InfoBadge color="red" label="Formats: MP4, MOV, AVI, WebM" />
        <InfoBadge color="purple" label="Max size: 100MB" />
        <InfoBadge color="pink" label="Duration: 10 sec-3 minutes" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8 mb-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-gray-400">
            <Play className="w-5 h-5" />
           {video ? video.name : "Browse a video file"}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="file"
              accept="video/*"
              id="videoUpload"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="videoUpload"
              className="flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              Upload
            </label>
            {/* <button
              onClick={handleUpload}
              className="flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition"
            >
              Upload
            </button> */}
          </div>
        </div>
      </div>

      <Features />
    </div>
  );
}
