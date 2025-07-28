import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const allServices = [
    {
      category: "Testing & Commissioning",
      image:
        "https://www.omicronenergy.com/fileadmin/_processed_/2/d/csm_Multifunctional-CPC-100_Press-Release-1_1fc244a893.jpg",
      services: [
        {
          title: "LV & MV System (430V to 33KV)",
          items: [
            "Complete Testing of AIS/GIS Panel",
            "Complete Testing of ACB/VCB and SF6 Breakers",
            "CT Testing Using Primary Injection Test",
            "PT Testing",
            "Relay & Meter Testing by Secondary Injection",
            "HVDC & HVAC of HT Panel",
            "Control Schematic Testing",
          ],
        },
        {
          title: "EHV System (66KV to 400KV)",
          items: [
            "Switchyard CT/PT Testing",
            "Switchyard Maintenance",
            "Control Schematic Testing",
            "Transformer Testing with Schemes",
            "SF6 Breaker Testing",
            "Bus Bar & Distance Protection Scheme Testing",
            "Isolator & Earth Switch Testing",
          ],
        },
        {
          title: "Equipment Testing",
          items: ["Motor Testing", "Generator Testing", "Transformer Testing"],
        },
      ],
    },
    {
      category: "Health Check-up & Maintenance",
      image:
        "https://images.pexels.com/photos/11645013/pexels-photo-11645013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      services: [
        {
          title: "LV & MV Switchboard",
          items: [
            "Predictive & Preventive Maintenance",
            "Overhauling & Maintenance of ACB/VCB/PANEL",
            "Technical Report & Recommendations",
            "Identification & Replacement of Spares",
          ],
        },
        {
          title: "Health Check-up Testing",
          items: [
            "DCHV/ACHV Test",
            "Knee Point Voltage Test",
            "Breaker Close/Open/Trip Timing",
            "Contact Resistance Measurement",
            "Relay Testing",
            "Tan Delta & Capacitance Test",
          ],
        },
        {
          title: "EHV System Maintenance",
          items: [
            "Isolator & Earth Switch Overhauling",
            "SF6 Breaker Maintenance",
            "CT/PT/Relay/Transformer Testing",
            "Lighting Arrestor Maintenance",
          ],
        },
      ],
    },
    {
      category: "EPC / Retrofitting",
      image:
        "https://gulfsolutionsme.com/wp-content/uploads/2020/10/civil-engineering-installation-substation-buildings-switchboard-rooms-1-e1603349697615.jpg",
      services: [
        {
          title: "Detail Engineering",
          items: [
            "Basic Study & Engineering",
            "Tender Floating & Analysis",
            "Vendor Evaluation",
            "Inspection Support",
            "Design & Drawing Preparation",
          ],
        },
        {
          title: "Supply & Commissioning",
          items: [
            "Procurement & Supply",
            "Erection & Testing",
            "Precommissioning Activities",
            "Closing Punch Points",
            "Charging & Handover",
          ],
        },
        {
          title: "Relay & Breaker Retrofitting",
          items: [
            "Protection System Study",
            "Relay Upgrade & Parameterization",
            "Breaker Replacement",
            "System Reliability Improvement",
          ],
        },
        {
          title: "Bus Bar Retrofitting",
          items: [
            "Load Flow Study",
            "Solution Recommendation",
            "Installation & Monitoring",
          ],
        },
      ],
    },
    {
      category: "Condition Monitoring & EMS",
      image:
        "https://www.voltagelab.com/wp-content/uploads/2022/06/image-3.png",
      services: [
        {
          title: "Condition Monitoring & Thermography",
          items: [
            "Overheating & Flash Issues",
            "HT & LT Motor Thermography",
            "Panel Thermography",
            "Detailed Analysis & Solution",
          ],
        },
        {
          title: "Energy Management System",
          items: [
            "BEE Certified Energy Audit",
            "Electrical & Utility Audit",
            "Leakage & Inefficiency Reporting",
            "Guaranteed Savings",
            "Wireless GPRS Communication",
          ],
        },
      ],
    },
    {
      category: "Special Audits & Protection",
      image:
        "https://www.kinectrics.com/images/_1200x630_crop_center-center_82_none/2022-10-26-L3-Substation.jpg?mtime=1745865573",
      services: [
        {
          title: "Harmonics Audit",
          items: [
            "Detailed Data Analysis",
            "Krykard Power Analyser Measurement",
            "Harmonics Parameter Recording",
            "Power Factor Improvement Solutions",
            "Guaranteed Post-verification",
          ],
        },
        {
          title: "Relay Services",
          items: [
            "Secondary Injection Testing",
            "Retrofitting & Refurbishment",
            "Programming & Parameterization",
          ],
        },
        {
          title: "Power System Protection",
          items: [
            "Short Circuit Analysis",
            "Motor Starting Study",
            "Load Calculation",
            "Harmonic & Transient Analysis",
            "Arc Flash Analysis",
            "Relay Co-ordination",
          ],
        },
        {
          title: "Specialized Services",
          items: [
            "Synchronizing",
            "TAN Delta & SFRA",
            "Online Moisture Removal",
            "G.I.S Panel Expertise",
            "Differential & Directional Scheme Testing",
            "Generator Protection System",
          ],
        },
      ],
    },
  ];

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

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {allServices.map((group, idx) => (
          <section key={idx} className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
              <img
                src={group.image}
                alt={group.category}
                loading="lazy"
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Any Electrical Solution?
        </h2>
        <p className="mb-8 max-w-xl mx-auto px-4">
          Share your electrical problems and get tailored solutions from our
          certified professionals.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
