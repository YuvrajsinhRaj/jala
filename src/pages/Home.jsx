import React, { Suspense } from "react";
const HeroSection = React.lazy(() => import("../components/HeroSection"));
const CompanyOverview = React.lazy(() =>
  import("../components/CompanyOverview")
);
const ServicesPreview = React.lazy(() =>
  import("../components/ServicesPreview")
);
const IndustriesWeServe = React.lazy(() =>
  import("../components/IndustriesWeServe")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const ContactCTA = React.lazy(() => import("../components/CTASection"));
const Clients = React.lazy(() => import("../components/Clients"));

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50 text-gray-800 pt-16">
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-4 sm:py-6 md:py-8 text-sm sm:text-base md:text-lg">
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
          <CompanyOverview />
          <ServicesPreview />
          <IndustriesWeServe />
          <Clients />
          <WhyChooseUs />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactCTA />
      </Suspense>
    </main>
  );
}
