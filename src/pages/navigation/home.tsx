import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="md:container mx-auto px-4 lg:px-8">
        <div className="md:grid md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="p-4">
            <h1 className="text-5xl font-bold">Health Study Hub</h1>
            <p className="pt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            {/* Search Form */}
            <form className="pt-8">
              <div className="flex items-center">
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

          {/* Right Column */}
          <div>
            <img src="/h.jpeg" alt="Logo" height={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
