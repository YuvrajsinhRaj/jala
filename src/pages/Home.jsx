// import { Helmet } from "react-helmet-async";
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
    <div className="bg-gray-50 text-gray-800 mt-14">
      {/* <Helmet>
        <title>
          Shree Jala Electric | Industrial Electrical Contractors in India
        </title>
        <meta
          name="description"
          content="Shree Jala Electric delivers futuristic, reliable, and safe electrical services for petrochemical, power, and manufacturing sectors across India."
        />
        <meta
          name="keywords"
          content="Industrial Electrical Contractors, Electrical Services India, Electrical Retrofitting, Safety Audits, Panel Installation, Pan-India Electrical Solutions"
        />
        <meta name="author" content="Shree Jala Electric" />
        <meta property="og:title" content="Shree Jala Electric" />
        <meta
          property="og:description"
          content="Your strategic partner in industrial electrical innovation and safety. Serving industries across India."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.shreejalaelectric.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet> */}

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
