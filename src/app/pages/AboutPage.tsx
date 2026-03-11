import { Award, Heart, Users, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  const team = [
    {
      name: "Elena Kaufmann",
      role: "Master Colorist & Founder",
      image: "https://images.unsplash.com/photo-1737063935340-f9af0940c4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBoYWlyc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzMxMzUyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "With over 15 years of experience, Elena specializes in luxury color treatments and has trained with top colorists in Paris and Milan.",
    },
    {
      name: "Michael Berger",
      role: "Master Stylist",
      image: "https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYmFyYmVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzIwMTI5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Michael brings artistic precision to every cut. His expertise in classic and contemporary styles has earned him recognition across Europe.",
    },
    {
      name: "Sophie Weber",
      role: "Balayage Specialist",
      image: "https://images.unsplash.com/photo-1737063935340-f9af0940c4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBoYWlyc3R5bGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzMxMzUyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Sophie's hand-painted highlights create natural, sun-kissed looks. She's passionate about enhancing each client's unique beauty.",
    },
    {
      name: "Thomas Schmidt",
      role: "Men's Grooming Expert",
      image: "https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYmFyYmVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzIwMTI5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Thomas combines traditional barbering with modern styling techniques, creating sophisticated looks for the modern gentleman.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every service we provide, using premium products and advanced techniques.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our team is passionate about hair artistry and committed to making every client feel beautiful and confident.",
    },
    {
      icon: Users,
      title: "Personalization",
      description: "We believe every client is unique. Each service is customized to your individual needs and preferences.",
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description: "From the moment you enter our salon, you'll experience exceptional service in an elegant, relaxing environment.",
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
              About EK Coiffeur
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Where artistry meets elegance. We've been creating stunning transformations and unforgettable experiences since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black">Our Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mb-6"></div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  EK Coiffeur was founded in 2010 with a simple vision: to create a luxury hair salon that combines world-class expertise with genuine warmth and hospitality.
                </p>
                <p>
                  Located in the heart of Vienna, our salon has become a destination for those who appreciate exceptional hair care and personalized service. We've built our reputation on consistency, creativity, and an unwavering commitment to excellence.
                </p>
                <p>
                  Our team of master stylists brings together diverse international training and experience, ensuring we stay at the forefront of hair fashion while honoring timeless techniques.
                </p>
                <p>
                  Today, we're proud to be recognized as one of Vienna's premier luxury salons, trusted by clients who value quality, artistry, and the transformative power of great hair.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYWlyJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMxMzM2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Salon Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-black">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E5B8] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-serif mb-3 text-black">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-black">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our talented stylists are passionate professionals dedicated to making you look and feel your best
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-80 rounded-lg overflow-hidden mb-4 shadow-lg">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <h3 className="text-xl font-serif mb-1 text-black">{member.name}</h3>
                <p className="text-[#D4AF37] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black">
              Experience the EK Difference
            </h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Join our community of satisfied clients and discover what luxury hair care truly means.
            </p>
            <a
              href="/booking"
              className="inline-block px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-black/90 transition-all duration-300 rounded-sm text-lg shadow-lg"
            >
              Book Your Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
