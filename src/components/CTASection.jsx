import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r w-full  from-blue-400 via-blue-500 to-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Power Up Your Industry?
      </h2>
      <p className="mb-6 max-w-xl mx-auto text-lg">
        Get in touch with our experts to discuss your project and request a free
        consultation.
      </p>
      <Link
        to="/contact"
        className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
