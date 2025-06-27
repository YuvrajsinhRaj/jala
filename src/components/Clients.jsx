// Inside Clients.jsx
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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black">Our Clients</h2>
        <div className="flex justify-center mt-4">
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-scroll hide-scrollbar space-x-8 py-8 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {clients
            .filter((client) => client.logo)
            .map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain
                        h-16 w-auto
                        sm:h-20 md:h-24
                        lg:h-28
                        max-w-[160px]
                         "
                  loading="lazy"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
