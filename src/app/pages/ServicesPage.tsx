import { Link } from "react-router";
import { Scissors, Palette, Sparkles, Heart, Users, Waves } from "lucide-react";
import { motion } from "motion/react";

export function ServicesPage() {
  const services = [
    {
      icon: Scissors,
      title: "Classic Haircut",
      description: "Expert precision cuts tailored to your individual style, face shape, and lifestyle. Our master stylists use cutting-edge techniques to create looks that are both modern and timeless.",
      price: "From €65",
      duration: "60 min",
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      description: "Premium color treatments using luxury professional products. Whether you want a complete transformation or subtle enhancement, our color specialists create beautiful, long-lasting results.",
      price: "From €120",
      duration: "120 min",
    },
    {
      icon: Sparkles,
      title: "Balayage",
      description: "Hand-painted highlights for a natural, sun-kissed look. This sophisticated technique creates dimension and depth, perfectly customized to complement your natural hair color.",
      price: "From €180",
      duration: "150 min",
    },
    {
      icon: Heart,
      title: "Special Occasion Styling",
      description: "Professional hair styling for weddings, events, and celebrations. We create elegant updos, glamorous waves, or any style you envision for your special day.",
      price: "From €85",
      duration: "90 min",
    },
    {
      icon: Users,
      title: "Beard Grooming",
      description: "Professional beard trimming, shaping, and maintenance. Our barbers combine traditional techniques with modern style to create perfectly groomed looks.",
      price: "From €35",
      duration: "30 min",
    },
    {
      icon: Waves,
      title: "Keratin Treatment",
      description: "Smoothing treatment that eliminates frizz and adds incredible shine. This transformative service leaves your hair silky, manageable, and beautifully healthy.",
      price: "From €200",
      duration: "180 min",
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
              Our Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Discover our comprehensive range of luxury hair services, each designed to enhance your natural beauty and exceed your expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-2xl hover:border-[#D4AF37]/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E5B8] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-2xl font-serif mb-4 text-black">{service.title}</h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <span className="font-medium">{service.duration}</span>
                  <span className="text-[#D4AF37] font-medium text-lg">{service.price}</span>
                </div>
                
                <Link
                  to="/booking"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black font-medium tracking-wide hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 rounded-sm"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black">
              Why Choose EK Coiffeur?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-medium mb-3 text-black">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our master stylists bring years of experience and continuous training in the latest techniques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-black">Premium Products</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use only the finest professional products to ensure exceptional results and hair health.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-black">Personalized Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every service is customized to your unique needs, preferences, and hair type.
                </p>
              </div>
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
              Ready to Book?
            </h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and experience luxury hair care at its finest.
            </p>
            <Link
              to="/booking"
              className="inline-block px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-black/90 transition-all duration-300 rounded-sm text-lg shadow-lg"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
