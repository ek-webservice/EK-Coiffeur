import { Link } from "react-router";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export function PricesPage() {
  const pricingCategories = [
    {
      category: "Haircuts",
      services: [
        { name: "Women's Haircut", price: "€65 - €95" },
        { name: "Men's Haircut", price: "€55 - €75" },
        { name: "Children's Haircut (under 12)", price: "€35" },
        { name: "Fringe/Bangs Trim", price: "€20" },
      ],
    },
    {
      category: "Color Services",
      services: [
        { name: "Full Color", price: "€120 - €180" },
        { name: "Root Touch-up", price: "€80 - €120" },
        { name: "Balayage", price: "€180 - €280" },
        { name: "Highlights (Full)", price: "€150 - €220" },
        { name: "Highlights (Partial)", price: "€90 - €140" },
        { name: "Color Correction", price: "From €250" },
      ],
    },
    {
      category: "Treatments",
      services: [
        { name: "Keratin Treatment", price: "€200 - €350" },
        { name: "Deep Conditioning", price: "€45 - €65" },
        { name: "Scalp Treatment", price: "€55" },
        { name: "Olaplex Treatment", price: "€35 - €55" },
      ],
    },
    {
      category: "Styling",
      services: [
        { name: "Blow Dry", price: "€45 - €65" },
        { name: "Special Occasion Updo", price: "€85 - €120" },
        { name: "Bridal Hair", price: "€150 - €250" },
        { name: "Hair Extensions Consultation", price: "Free" },
      ],
    },
    {
      category: "Men's Grooming",
      services: [
        { name: "Beard Trim", price: "€35" },
        { name: "Beard Shaping", price: "€45" },
        { name: "Hot Towel Shave", price: "€50" },
        { name: "Haircut & Beard Combo", price: "€85" },
      ],
    },
  ];

  const packages = [
    {
      name: "Essential",
      description: "Perfect for regular maintenance",
      price: "€95",
      features: [
        "Haircut",
        "Wash & Blow Dry",
        "Styling Products",
        "Complimentary Beverage",
      ],
      popular: false,
    },
    {
      name: "Luxury",
      description: "The complete salon experience",
      price: "€245",
      features: [
        "Haircut & Style",
        "Full Color or Highlights",
        "Deep Conditioning Treatment",
        "Scalp Massage",
        "Premium Products",
        "Complimentary Refreshments",
      ],
      popular: true,
    },
    {
      name: "Bridal",
      description: "Your perfect wedding day look",
      price: "€380",
      features: [
        "Pre-Wedding Consultation",
        "Wedding Day Styling",
        "Hair Trial Session",
        "Touch-ups Throughout Day",
        "On-Location Service Available",
        "Champagne & Treats",
      ],
      popular: false,
    },
  ];

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
              Pricing
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Transparent pricing for exceptional luxury services. All prices include consultation and aftercare advice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-black">
              Service Packages
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Comprehensive packages for the ultimate luxury experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-lg p-8 ${
                  pkg.popular
                    ? "shadow-2xl border-2 border-[#D4AF37] scale-105"
                    : "shadow-md border border-gray-200"
                } hover:shadow-2xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif mb-2 text-black">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  <div className="text-4xl font-serif text-[#D4AF37] mb-2">{pkg.price}</div>
                  <p className="text-gray-500 text-sm">Starting from</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/booking"
                  className={`block w-full text-center px-6 py-3 font-medium tracking-wide transition-all duration-300 rounded-sm ${
                    pkg.popular
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black hover:shadow-lg"
                      : "border-2 border-[#D4AF37] text-black hover:bg-[#D4AF37] hover:text-white"
                  }`}
                >
                  Book Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-black">
              Individual Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-serif mb-6 text-black border-b-2 border-[#D4AF37] pb-3">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex justify-between items-start gap-4">
                      <span className="text-gray-700">{service.name}</span>
                      <span className="text-[#D4AF37] font-medium whitespace-nowrap">
                        {service.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-black">
              Good to Know
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-8"></div>
            <div className="text-left space-y-4 text-gray-700">
              <p>
                <strong className="text-black">Consultations:</strong> All services include a complimentary consultation to ensure we understand your vision and needs.
              </p>
              <p>
                <strong className="text-black">Pricing:</strong> Final pricing may vary based on hair length, thickness, and complexity. Your stylist will provide an exact quote during consultation.
              </p>
              <p>
                <strong className="text-black">Cancellation Policy:</strong> We kindly request 24 hours notice for cancellations or rescheduling.
              </p>
              <p>
                <strong className="text-black">Payment:</strong> We accept cash, all major credit cards, and digital payments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black">
              Book Your Appointment
            </h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Experience luxury hair care that's worth every moment.
            </p>
            <Link
              to="/booking"
              className="inline-block px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-black/90 transition-all duration-300 rounded-sm text-lg shadow-lg"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
