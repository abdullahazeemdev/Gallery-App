import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Gallery from "./Components/Photos";
import axios from "axios";
import Bottom from "./Components/Bottom";
import Heading from "./Components/Heading";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  const [selectedImage, setSelectedImage] = useState(null);

  const getData = async () => {
    try {
      const result = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );

      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page, limit]);

  return (
    <div className="h-screen overflow-hidden bg-[#070b14] p-4 sm:p-6 lg:p-8">

      <div className="mx-auto flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-2xl">

        {/* navbar */}
        <Navbar />

        {/* main */}
        <main className="flex min-h-0 flex-1 flex-col p-5 sm:p-7 lg:p-8 ">

          {/* heading */}
          <Heading />

          {/* gallery  */}
          <div className="min-h-0 flex-1 overflow-y-auto pr-2">

            {data.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {data.map((card) => (
                  <Gallery
                    key={card.id}
                    data={card}
                    setSelectedImage={setSelectedImage}
                  />
                ))}

              </div>
            ) : (
              <div className="flex h-full min-h-64 w-full items-center justify-center">

                {/* loading spinner */}
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600"></div>

              </div>
            )}

          </div>

          {/* bottom */}
          <Bottom
            setPage={setPage}
            setLimit={setLimit}
            page={page}
          />

        </main>

      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-5xl"
          >

            {/* close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:bg-gray-200"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            {/* large image */}
            <img
              src={selectedImage.download_url}
              alt={selectedImage.author}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            {/* author */}
            <div className="absolute bottom-4 left-4 rounded-xl bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-md">
              Photo by {selectedImage.author}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default App;