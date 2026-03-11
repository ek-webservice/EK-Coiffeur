import { Link } from "react-router";
import { Scissors, Sparkles, Palette, Heart, Users, Star } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomePage() {
  const services = [
    {
      icon: Scissors,
      title: "Haircut",
      description: "Expert precision cuts tailored to your style and face shape",
      image: "https://images.unsplash.com/photo-1763048208932-cbe149724374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyJTIwc3R5bGluZ3xlbnwxfHx8fDE3NzMyMzMwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      description: "Premium color treatments using luxury professional products",
      image: "https://images.unsplash.com/photo-1712213396688-c6f2d536671f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3JpbmclMjBzYWxvbnxlbnwxfHx8fDE3NzMyMjk1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Sparkles,
      title: "Balayage",
      description: "Hand-painted highlights for a natural, sun-kissed look",
      image: "https://images.unsplash.com/photo-1706120475559-119ef9294109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxheWFnZSUyMGhhaXIlMjBjb2xvcnxlbnwxfHx8fDE3NzMxNDM0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Heart,
      title: "Hair Styling",
      description: "Special occasion styling for events and celebrations",
      image: "https://images.unsplash.com/photo-1762343041664-cec11bfec6c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVsZWdhbnQlMjBoYWlyc3R5bGV8ZW58MXx8fHwxNzczMjMzMDkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Users,
      title: "Beard Grooming",
      description: "Professional beard trimming, shaping, and maintenance",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nJTIwYmFyYmVyfGVufDF8fHx8MTc3MzE1NTQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1762343041664-cec11bfec6c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVsZWdhbnQlMjBoYWlyc3R5bGV8ZW58MXx8fHwxNzczMjMzMDkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1712213396688-c6f2d536671f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3JpbmclMjBzYWxvbnxlbnwxfHx8fDE3NzMyMjk1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1706120475559-119ef9294109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxheWFnZSUyMGhhaXIlMjBjb2xvcnxlbnwxfHx8fDE3NzMxNDM0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzMyMzMwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const testimonials = [
    {
      name: "Sophie Laurent",
      rating: 5,
      text: "Absolutely stunning results! The team at EK Coiffeur truly understands luxury hair care. My balayage looks incredible.",
    },
    {
      name: "Michael Weber",
      rating: 5,
      text: "Best salon experience I've ever had. Professional, elegant atmosphere and exceptional service. Highly recommended!",
    },
    {
      name: "Emma Schneider",
      rating: 5,
      text: "The attention to detail is remarkable. They take the time to understand exactly what you want. Pure perfection!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYWlyJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMxMzM2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Hair Salon Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6 tracking-tight">
            Luxury Hair Experience
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Where elegance meets expertise. Transform your look with Vienna's premier luxury hair salon.
          </p>
          <Link
            to="/booking"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black font-medium tracking-wide hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 rounded-sm text-lg"
          >
            Book Your Appointment
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-black">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience luxury treatments designed to enhance your natural beauty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-black">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <Link
                    to="/booking"
                    className="inline-block text-[#D4AF37] hover:text-[#B8941E] font-medium transition-colors"
                  >
                    Book Now →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salon Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-black">
                The EK Coiffeur Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mb-6"></div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Step into a world of luxury and refinement. Our salon combines cutting-edge techniques with timeless elegance to deliver an unparalleled hair care experience.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Our team of master stylists brings years of expertise and passion to every appointment, ensuring you leave feeling confident and beautiful.
              </p>
              <Link
                to="/about"
                className="inline-block px-8 py-3 border-2 border-[#D4AF37] text-black hover:bg-[#D4AF37] hover:text-white font-medium tracking-wide transition-all duration-300 rounded-sm"
              >
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzMyMzMwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Salon Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-black">Our Work</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover stunning transformations from our talented stylists
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 lg:h-80 rounded-lg overflow-hidden group cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-black">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <p className="text-black font-medium">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-black">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg md:text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the luxury you deserve.
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
