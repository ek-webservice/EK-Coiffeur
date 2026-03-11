import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function BookingPage() {
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    stylist: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const services = [
    "Haircut - Women",
    "Haircut - Men",
    "Hair Coloring",
    "Balayage",
    "Highlights",
    "Special Occasion Styling",
    "Keratin Treatment",
    "Beard Grooming",
  ];

  const stylists = [
    { name: "Elena Kaufmann", specialty: "Color Specialist" },
    { name: "Michael Berger", specialty: "Master Stylist" },
    { name: "Sophie Weber", specialty: "Balayage Expert" },
    { name: "Thomas Schmidt", specialty: "Men's Grooming" },
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingComplete(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4E5B8] rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-black">
            Booking Confirmed!
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Thank you for booking with EK Coiffeur. We've sent a confirmation email to{" "}
            <strong className="text-[#D4AF37]">{formData.email}</strong>.
          </p>
          <div className="bg-gray-50 rounded-lg p-8 mb-8 text-left">
            <h2 className="text-xl font-serif mb-4 text-black">Your Appointment Details</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong className="text-black">Service:</strong> {formData.service}</p>
              <p><strong className="text-black">Stylist:</strong> {formData.stylist}</p>
              <p><strong className="text-black">Date:</strong> {formData.date}</p>
              <p><strong className="text-black">Time:</strong> {formData.time}</p>
            </div>
          </div>
          <button
            onClick={() => {
              setBookingComplete(false);
              setBookingStep(1);
              setFormData({
                service: "",
                stylist: "",
                date: "",
                time: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                notes: "",
              });
            }}
            className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-sm"
          >
            Book Another Appointment
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-black">
            Book Your Appointment
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Schedule your luxury hair experience in just a few steps
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                    bookingStep >= step
                      ? "bg-gradient-to-br from-[#D4AF37] to-[#F4E5B8] text-black"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-12 h-1 mx-2 transition-all duration-300 ${
                      bookingStep > step ? "bg-[#D4AF37]" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-8"
        >
          {/* Step 1: Service Selection */}
          {bookingStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif mb-6 text-black">Select Your Service</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                >
                  <option value="">Choose a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Stylist
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {stylists.map((stylist) => (
                    <label
                      key={stylist.name}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        formData.stylist === stylist.name
                          ? "border-[#D4AF37] bg-[#D4AF37]/5"
                          : "border-gray-200 hover:border-[#D4AF37]/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="stylist"
                        value={stylist.name}
                        onChange={handleInputChange}
                        className="sr-only"
                        required
                      />
                      <div className="flex items-center gap-3">
                        <User className="w-6 h-6 text-[#D4AF37]" />
                        <div>
                          <p className="font-medium text-black">{stylist.name}</p>
                          <p className="text-sm text-gray-600">{stylist.specialty}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setBookingStep(2)}
                disabled={!formData.service || !formData.stylist}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* Step 2: Date & Time */}
          {bookingStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif mb-6 text-black">Choose Date & Time</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline w-5 h-5 mr-2 text-[#D4AF37]" />
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline w-5 h-5 mr-2 text-[#D4AF37]" />
                  Time
                </label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <label
                      key={time}
                      className={`border-2 rounded-lg p-3 text-center cursor-pointer transition-all ${
                        formData.time === time
                          ? "border-[#D4AF37] bg-[#D4AF37]/5 text-black"
                          : "border-gray-200 hover:border-[#D4AF37]/50 text-gray-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name="time"
                        value={time}
                        onChange={handleInputChange}
                        className="sr-only"
                        required
                      />
                      {time}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setBookingStep(1)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-black font-medium tracking-wide hover:border-[#D4AF37] transition-all duration-300 rounded-lg"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setBookingStep(3)}
                  disabled={!formData.date || !formData.time}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Information */}
          {bookingStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif mb-6 text-black">Your Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline w-5 h-5 mr-2 text-[#D4AF37]" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline w-5 h-5 mr-2 text-[#D4AF37]" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none"
                  placeholder="Any special requests or requirements..."
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setBookingStep(2)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-black font-medium tracking-wide hover:border-[#D4AF37] transition-all duration-300 rounded-lg"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black font-medium tracking-wide hover:shadow-lg transition-all duration-300 rounded-lg"
                >
                  Confirm Booking
                </button>
              </div>
            </motion.div>
          )}
        </motion.form>
      </div>
    </div>
  );
}
