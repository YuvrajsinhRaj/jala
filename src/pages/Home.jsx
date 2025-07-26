import HeroSection from "../components/HeroSection";
import CompanyOverview from "../components/CompanyOverview";
import ServicesPreview from "../components/ServicesPreview";
import IndustriesWeServe from "../components/IndustriesWeServe";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsCounter from "../components/StatsCounter";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/CTASection";
import Clients from "../components/Clients";

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800 mt-14 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 py-4 sm:py-6 md:py-8 text-sm sm:text-base md:text-lg">
      <HeroSection />
      <CompanyOverview />
      <ServicesPreview />
      <IndustriesWeServe />
      <Clients />
      <StatsCounter />
      <Testimonials />
      <WhyChooseUs />
      <ContactCTA />
    </div>
  );
}
