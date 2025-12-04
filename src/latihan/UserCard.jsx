import React, { useState } from "react";

function PostCard(props) {
  // 1. TERIMA DATA: Ambil title dan body dari props
  const { title, body } = props;
  
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white hover:bg-red-50 p-6 rounded-lg shadow hover:shadow-lg hover:border transition-shadow text-center flex flex-col justify-between hover:scale-105 duration-300">
      
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2 capitalize">
          {/* 2. GANTI MANUAL DENGAN VARIABLE */}
          {/* Jangan tulis "Judul", tapi pakai kurung kurawal */}
          {title} 
        </h2>
        <p className="text-gray-600 line-clamp-3">
          {/* Jangan tulis "Isi", tapi pakai kurung kurawal */}
          {body}
        </p>
      </div>

      <button
        className={`text-white p-2 rounded-md mt-4 transition-colors 
          ${
            clicked
              ? "bg-red-700 hover:bg-red-800"
              : "bg-gray-01 hover:bg-gray-02" 
          }
        `}
        onClick={() => setClicked(!clicked)}
      >
        {clicked ? "Sudah Diklik" : "Silakan Klik"}
      </button>

    </div>
  );
}

export default PostCard;