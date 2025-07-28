
import React, { Suspense, useState, useEffect } from "react";
import { Link } from "react-router-dom";
const CTASection = React.lazy(() => import("../components/CTASection"));

export default function Services() {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    import("../data/servicesData.js").then((mod) => {
      setAllServices(mod.default);
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-orange-50 min-h-screen">
      {/* HERO */}
      <section className=" py-14 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Our Services
          </h1>
          <div className="mx-auto mt-2 w-24 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-blue-400" />
        </div>
      </section>

      {/* ...existing code... */}

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {allServices.map((group, idx) => (
          <section key={idx} className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
              <img
                loading="lazy"
                src={group.image}
                alt={group.category}
                className="w-full md:w-1/3 h-60 object-cover rounded-xl  shadow-md"
              />
              <h2 className="mt-4 md:mt-0 text-3xl font-bold text-orange-600">
                {group.category}
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {group.services.map((svc, svcIdx) => (
                <div
                  key={svcIdx}
                  className="bg-white rounded-xl border border-orange-200  shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-blue-700 mb-4">
                    {svc.title}
                  </h3>
                  <ul className="text-gray-700 flex-grow space-y-1 list-disc list-inside">
                    {svc.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA - deferred loading */}
      <Suspense fallback={<div>Loading CTA...</div>}>
        <CTASection />
      </Suspense>
  );
}
