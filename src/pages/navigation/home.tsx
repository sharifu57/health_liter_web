import React from "react";
import FeaturedReview from "./featured";

export default function HomePage() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="md:container mx-auto px-4 lg:px-8">
          <div className="md:grid md:grid-cols-2 gap-4">
            {/* Left Column - Center the content vertically */}
            <div className="flex flex-col justify-center min-h-[80vh]">
              <h1 className="text-5xl font-bold">Health Study Hub</h1>
              <p className="pt-6 ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>

              <form className="pt-8">
                <div className="flex ">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search for articles or topics..."
                  />
                  <button
                    type="submit"
                    className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            <div className="">
              <img
                src="/h.avif"
                alt="Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <FeaturedReview />
      </div>
    </div>
  );
}
