import React from "react";

const Bottom = ({ setPage, setLimit, page }) => {
  return (
    <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

      {/* Pagination */}
      <div className="flex w-fit items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5">

        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-sm font-semibold transition ${
              page === num
                ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400"
                : "text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {num}
          </button>
        ))}

        {/* next button */}
        <button
          onClick={() => setPage(page < 4 ? page + 1 : 1)}
          className="ml-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white"
        >
          <i className="fa-solid fa-arrow-right-long text-sm"></i>
        </button>

      </div>

      {/* Items Per Page */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-400">
          Items per page
        </span>

        <select
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1);
          }}
          className="h-11 w-24 cursor-pointer rounded-xl border border-white/10 bg-white/[0.04] px-3 text-sm font-medium text-white outline-none transition hover:border-white/20 focus:border-indigo-500"
        >
          <option value="3" className="bg-[#111827]">
            3
          </option>

          <option value="6" className="bg-[#111827]">
            6
          </option>

          <option value="9" className="bg-[#111827]">
            9
          </option>

          <option value="12" className="bg-[#111827]">
            12
          </option>

          <option value="15" className="bg-[#111827]">
            15
          </option>

          <option value="18" className="bg-[#111827]">
            18
          </option>
        </select>
      </div>

    </div>
  );
};

export default Bottom;