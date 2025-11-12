import { Play, Upload, History } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Navbar(){
  const navigate = useNavigate();
const handleProfileClick = () => navigate("/login");

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Play className="w-6 h-6 text-white fill-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">VideoDiscovery</h1>
          <p className="text-xs text-gray-500">Multimodal Video Discovery</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {/* <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition">
          <Upload className="w-4 h-4" />
          Upload
        </button> */}
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition">
          <History className="w-4 h-4" />
          History
        </button>
        <div onClick={handleProfileClick} className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Mahnoor</span>
          <div className="w-9 h-9 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            MR
          </div>
        </div>
      </div>
    </header>
  );
};