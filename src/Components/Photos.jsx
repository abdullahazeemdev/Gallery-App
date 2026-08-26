import React from "react";

const Gallery = () => {
  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-white/10 bg-[#151e2e] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/30 hover:shadow-2xl hover:shadow-indigo-500/10">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nV5HX-sT5M9Magwp8s7VtxN8E54DIXLOo-y-dbG4Rw&s=10"
          alt="Abdullah"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>

        {/* View Button */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100 hover:bg-indigo-500">
          <i className="fa-solid fa-expand text-sm"></i>
        </button>
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-center justify-between gap-3">

          <div>
            <h2 className="text-lg font-semibold text-white">
              Abdullah
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Beautiful gallery image
            </p>
          </div>

          {/* Icon */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
            <i className="fa-regular fa-image text-sm"></i>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Gallery;