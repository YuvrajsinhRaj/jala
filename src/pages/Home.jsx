import HeroSection from "../components/HeroSection";
import CompanyOverview from "../components/CompanyOverview";
import ServicesPreview from "../components/ServicesPreview";
import IndustriesWeServe from "../components/IndustriesWeServe";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactCTA from "../components/CTASection";
import Clients from "../components/Clients";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50 text-gray-800 pt-16">
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-4 sm:py-6 md:py-8 text-sm sm:text-base md:text-lg">
        <HeroSection />
        <CompanyOverview />
        <ServicesPreview />
        <IndustriesWeServe />
        <Clients />
        <WhyChooseUs />
        <ContactCTA />
      </div>
    </main>
  );
}
