const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-orange-50 min-h-screen w-full py-20 px-6 flex flex-col lg:flex-row items-start justify-center gap-12">
      {/* CONTACT FORM */}
      <div className="flex-1 bg-white p-10 rounded-2xl shadow-2xl mt-4 backdrop-blur-md max-w-3xl w-full border border-blue-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 text-center relative">
          Get in Touch
          <span className="block h-1 w-16 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full mx-auto mt-3"></span>
        </h2>
        <p className="text-gray-700 mb-8 text-center">
          We'd love to hear from you. Fill out the form and our team will get
          back to you shortly.
        </p>

        <form
          action="https://formbold.com/s/oznlP"
          method="POST"
          className="space-y-6"
        >
          {/* Hidden Inputs
          <input
            type="hidden"
            name="access_key"
            value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
          />
          <input type="hidden" name="subject" value="New Contact Submission" />
          <input type="hidden" name="from_name" value="Website Contact" />
          <input
            type="hidden"
            name="redirect"
            value="https://mail.google.com/mail/?view=cm&fs=1&to=info@shreejalaelectric.com&su=Website%20Form%20Submission%20Failed"
          /> */}

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Organisation/Person Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 99999 99999"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Your Message/Query
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us what you need help with..."
              required
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition duration-200 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* LOCATION CARD */}
      <div className="w-full max-w-sm flex flex-col items-center gap-6 mt-20">
        <div className="bg-white p-6 rounded-2xl shadow-2xl border border-orange-200 w-full">
          <h2 className="text-2xl font-bold text-black text-center mb-4 relative">
            Our Office
            <span className="block h-1 w-12 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full mx-auto mt-2"></span>
          </h2>
          <div className="aspect-square rounded-xl overflow-hidden shadow-lg border border-blue-200">
            <iframe
              title="Google Map - Shree Jala Electric"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4469841518107!2d73.12785201078071!3d22.2989289796028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc87ea0336257%3A0xe43ea7f68b0a439a!2sAkshar%20Pavilion!5e0!3m2!1sen!2sin!4v1750148641213!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" // Add loading="lazy" here
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 w-full mt-2">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform hover:scale-110"
          >
            <img loading="lazy"
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="transition-transform hover:scale-110"
          >
            <img loading="lazy"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
              alt="X"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform hover:scale-110"
          >
            <img loading="lazy"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
