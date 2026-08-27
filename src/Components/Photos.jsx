import React from "react";

const Gallery = ({ data, setSelectedImage }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg">

      <div className="relative overflow-hidden">

        {/* image */}
        <img
          src={data.download_url}
          alt={data.author}
          className="h-64 w-full object-cover"
        />

        {/* zoom */}
        <button
          onClick={() => setSelectedImage(data)}
          className="absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-black/50 text-white backdrop-blur-md transition hover:bg-indigo-500"
        >
          <i className="fa-solid fa-expand text-sm"></i>
        </button>

      </div>

      {/* card info */}
      <div className="p-4">
        <p className="text-sm font-medium text-white">
          {data.author}
        </p>

        <p className="mt-1 text-xs text-slate-400 ">
          Photo ID : <span className="font-bold">{data.id}</span> 
        </p>
      </div>

    </div>
  );
};

export default Gallery;