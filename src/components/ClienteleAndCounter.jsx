import { useState, useEffect, useRef } from "react";
import { clients } from "../assets/assets/";

const ClienteleAndCounter = () => {
  const [count, setCount] = useState({
    projects: 0,
    clients: 0,
    states: 0,
    services: 0,
  });

  // For client carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Counter animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => ({
        projects: prevCount.projects >= 200 ? 200 : prevCount.projects + 20,
        clients: prevCount.clients >= 50 ? 50 : prevCount.clients + 10,
        states: prevCount.states >= 6 ? 6 : prevCount.states + 1,
        services: prevCount.services >= 90 ? 90 : prevCount.services + 9,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Carousel navigation
  const handleNext = () => {
    if (currentIndex < clients.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(clients.length - 3); // Loop to end
    }
  };

  // Get visible clients based on current index
  const visibleClients = () => {
    // On mobile show 1, on tablet show 2, on desktop show 3+
    const visibleCount =
      window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4;
    const endIndex = Math.min(currentIndex + visibleCount, clients.length);
    return clients.slice(currentIndex, endIndex);
  };

  return (
    <div className="w-full">
      {/* Our Clientele Section */}
      <div className="py-12 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 uppercase">
              Our Clientele
            </h2>
            <div className="flex justify-center mt-2">
              <div className="h-1 w-16 bg-blue-600 rounded"></div>
            </div>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 focus:outline-none hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Client Logos */}
            <div
              className="flex justify-center items-center space-x-8 py-4 px-10 overflow-hidden"
              ref={carouselRef}
            >
              {clients.map((client, index) => (
                <div
                  key={client.id}
                  className={`transition-opacity duration-300 ${
                    index >= currentIndex && index < currentIndex + 4
                      ? "flex-shrink-0 block"
                      : "hidden"
                  }`}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 object-contain"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 focus:outline-none hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(clients.length / 4) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 4)}
                  className={`w-2 h-2 rounded-full ${
                    Math.floor(currentIndex / 4) === index
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="py-3 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 uppercase">
              Counter
            </h2>
            <div className="flex justify-center mt-2">
              <div className="h-1 w-16 bg-blue-600 rounded"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Projects Counter */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="text-5xl font-bold text-blue-700">
                {count.projects}
                <span className="text-3xl text-blue-500">+</span>
              </div>
              <p className="text-gray-600 font-medium mt-2">Projects</p>
            </div>

            {/* Clients Counter */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="text-5xl font-bold text-blue-700">
                {count.clients}
                <span className="text-3xl text-blue-500">+</span>
              </div>
              <p className="text-gray-600 font-medium mt-2">Clients</p>
            </div>

            {/* Countries Counter */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-5xl font-bold text-blue-700">
                {count.states}
                <span className="text-3xl text-blue-500">+</span>
              </div>
              <p className="text-gray-600 font-medium mt-2">States Served</p>
            </div>

            {/* Services Counter */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-5xl font-bold text-blue-700">
                {count.services}
                <span className="text-3xl text-blue-500">+</span>
              </div>
              <p className="text-gray-600 font-medium mt-2">Services Offered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClienteleAndCounter;
