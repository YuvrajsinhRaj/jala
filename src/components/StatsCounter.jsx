import React from "react";
import CountUp from "react-countup";

export default function StatsCounter() {
  const stats = [
    { label: "Projects Completed", count: 200 },
    { label: "Years Experience", count: 5 },
    { label: "Active Clients", count: 50 },
    { label: "States Served", count: 10 },
  ];

  return (
    <section className="bg-indigo-600 py-16 px-6 text-white text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-4xl font-bold">
              <CountUp
                end={stat.count}
                duration={2}
                suffix={stat.label === "Projects Completed" ? "+" : ""}
              />
            </h3>
            <p className="mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
