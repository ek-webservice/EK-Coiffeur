import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "motion/react";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-black">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We'd love to hear from you. Get in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif mb-8 text-black">Get In Touch</h2>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E5B8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black mb-1">Address</h3>
                      <p className="text-gray-600">123 Luxury Avenue</p>
                      <p className="text-gray-600">1010 Vienna, Austria</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E5B8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black mb-1">Phone</h3>
                      <a
                        href="tel:+43123456789"
                        className="text-gray-600 hover:text-[#D4AF37] transition-colors"
                      >
                        +43 1 234 5678
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E5B8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black mb-1">Email</h3>
                      <a
                        href="mailto:info@ekcoiffeur.com"
                        className="text-gray-600 hover:text-[#D4AF37] transition-colors"
                      >
                        info@ekcoiffeur.com
                      </a>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E5B8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-medium text-black mb-2">Opening Hours</h3>
                      <div className="space-y-1 text-gray-600">
                        <p className="flex justify-between gap-8">
                          <span>Monday - Friday</span>
                          <span>9:00 - 19:00</span>
                        </p>
                        <p className="flex justify-between gap-8">
                          <span>Saturday</span>
                          <span>9:00 - 17:00</span>
                        </p>
                        <p className="flex justify-between gap-8">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-medium text-black mb-4">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/booking"
                    className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black text-center font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-sm"
                  >
                    Book Appointment
                  </a>
                  <a
                    href="/services"
                    className="px-6 py-3 border-2 border-[#D4AF37] text-black text-center font-medium tracking-wide hover:bg-[#D4AF37] hover:text-white transition-all duration-300 rounded-sm"
                  >
                    View Services
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-serif mb-6 text-black">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none bg-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif mb-8 text-center text-black">Find Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-12"></div>
            <div className="rounded-lg overflow-hidden shadow-2xl h-96 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.4445976567844!2d16.373064315674858!3d48.20849597922843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2sVienna%2C%20Austria!5e0!3m2!1sen!2sus!4v1647444444444!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="EK Coiffeur Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
