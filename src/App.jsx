import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Gallery from "./Components/Photos";
import axios from "axios";

const App = () => { 
  const [data, setData] = useState([1,2,3]);
  const [page, setPage] = useState(1);
  const [limit,setLimit] = useState(3)


  const getData = async() =>{

    try {
      const result = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
      console.log(result.data)
      setData(result.data)
    } catch (error) {
      console.log(error)
      
    }
    
  }

  useEffect(() => {
    getData();

  },[])

  return (
    <div className="min-h-screen bg-[#070b14] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-2xl">

        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-5 sm:p-7 lg:p-8">

          {/* Gallery Top Section */}
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-indigo-500"></div>
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Image Gallery
                </h1>
              </div>
              <p className="mt-2 ml-4 text-sm text-slate-400">
                Explore and discover beautiful images from our collection.
              </p>
            </div>
          </div>

          {/* Gallery Grid / Loading State */}
          {data.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.map((card,indx) => (
                <Gallery key={indx} data={card} />
              ))}
            </div>
          ) : (
            <div className="flex h-64 w-full items-center justify-center">
              {/* Loading Spinner */}
              <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            </div>
          )}

          {/* Bottom Controls */}
          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

            {/* Pagination */}
            <div className="flex w-fit items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 ">

            {[1,2,3,4].map((num) =>  <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 cursor-pointer">
                {num}
              </button>)}
              {/* <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 cursor-pointer">
                1
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium text-slate-400 transition hover:bg-white/10 hover:text-white cursor-pointer">
                2
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium text-slate-400 transition hover:bg-white/10 hover:text-white cursor-pointer">
                3
              </button>
               <button className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium text-slate-400 transition hover:bg-white/10 hover:text-white cursor-pointer">
                4
              </button> */}
              
              <button className="ml-1 flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white cursor-pointer">
                <i className="fa-solid fa-arrow-right-long text-sm"></i>
              </button>
            </div>

            {/* Items Per Page */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-400">
                Items per page
              </span>
              <select
                defaultValue="10"
                className="h-11 w-24 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-sm font-medium text-white outline-none transition hover:border-white/20 focus:border-indigo-500 cursor-pointer"
              >
                <option value="10" className="bg-[#111827]">3</option>
                <option value="20" className="bg-[#111827]">6</option>
                <option value="30" className="bg-[#111827]">9</option>
                <option value="30" className="bg-[#111827]">12</option>
                
              </select>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
};

export default App;