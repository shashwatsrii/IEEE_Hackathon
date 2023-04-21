import React from "react";
import Map from "./Map";
import { useNavigate } from "react-router-dom";
function Main() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-end">
      <div className="absolute z-10 h-20 flex w-[100vw] justify-end bg-gray-100">
        <button
          onClick={() => navigate(`/refugeeData`)}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-12 border border-gray-400 rounded"
        >
          Refugee Data
        </button>

        <button
          onClick={() => navigate(`/campData`)}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-12 border border-gray-400 rounded"
        >
          Camp Data
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-12 border border-gray-400 rounded">
          v
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-12 border border-gray-400 rounded">
          b
        </button>
      </div>
      <Map />
    </div>
  );
}

export default Main;
