import { useEffect, useRef, useState } from "react";
import { clients } from "../assets/assets";

export default function Clients() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0.5;
    let animationFrame;

    const smoothScroll = () => {
      if (container && !isPaused) {
        container.scrollLeft += scrollAmount;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    animationFrame = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="py-16 bg-white" aria-labelledby="clients-heading">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          id="clients-heading"
          className="text-3xl font-extrabold text-gray-900 md:text-4xl"
        >
          Our Clients
        </h2>
        <div className="mt-3 mb-8 flex justify-center">
          <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-scroll hide-scrollbar gap-8 py-6 px-2 sm:px-4 md:px-6 lg:px-8 cursor-grab active:cursor-grabbing scroll-smooth"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="list"
          aria-label="Client logos carousel"
        >
          {clients
            .filter((client) => client.logo)
            .map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-36 sm:w-40 md:w-48 lg:w-52"
                role="listitem"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain h-16 sm:h-20 md:h-24 lg:h-28 transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
