import React from 'react'

const Heading = () => {
    return (
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

    )
}

export default Heading