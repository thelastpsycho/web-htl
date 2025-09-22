"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";

export default function OffersPage() {
  const offers = [
    {
      id: 1,
      title: "Romantic Getaway Package",
      description: "Perfect for couples seeking a romantic escape with champagne, rose petals, and couples spa treatment.",
      price: "$499",
      originalPrice: "$699",
      duration: "2 nights",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Deluxe room upgrade",
        "Bottle of champagne on arrival",
        "Romantic dinner for two",
        "Couples spa treatment",
        "Late checkout"
      ],
      validUntil: "December 31, 2024"
    },
    {
      id: 2,
      title: "Business Executive Package",
      description: "Designed for business travelers with exclusive amenities and productive workspace.",
      price: "$399",
      originalPrice: "$549",
      duration: "3 nights",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Executive room with city view",
        "Airport transfer service",
        "Daily breakfast buffet",
        "Meeting room access",
        "Laundry service"
      ],
      validUntil: "November 30, 2024"
    },
    {
      id: 3,
      title: "Family Adventure Package",
      description: "Create unforgettable family memories with activities and accommodations for the whole family.",
      price: "$599",
      originalPrice: "$799",
      duration: "3 nights",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Family suite accommodation",
        "Kids eat free program",
        "Family city tour",
        "Welcome gift for children",
        "Pool access with family area"
      ],
      validUntil: "January 15, 2025"
    },
    {
      id: 4,
      title: "Spa & Wellness Retreat",
      description: "Rejuvenate your body and mind with our comprehensive spa and wellness package.",
      price: "$699",
      originalPrice: "$899",
      duration: "4 nights",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Deluxe spa room",
        "Daily spa treatments",
        "Wellness consultation",
        "Yoga and meditation sessions",
        "Healthy meal plan"
      ],
      validUntil: "December 31, 2024"
    },
    {
      id: 5,
      title: "Weekend Escape",
      description: "Perfect weekend getaway with dining credits and leisure activities.",
      price: "$349",
      originalPrice: "$449",
      duration: "2 nights",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Standard room accommodation",
        "Weekend brunch",
        "Pool and gym access",
        "Welcome drink",
        "Late checkout"
      ],
      validUntil: "Ongoing"
    },
    {
      id: 6,
      title: "Honeymoon Special",
      description: "Celebrate your new beginning with our exclusive honeymoon package.",
      price: "$799",
      originalPrice: "$1099",
      duration: "5 nights",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Presidential suite",
        "Flower decoration",
        "Champagne breakfast",
        "Couples massage",
        "Romantic dinner",
        "Photography session"
      ],
      validUntil: "March 31, 2025"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <ParallaxSection speed={0.5} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Special Offers"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </ParallaxSection>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Special Offers & Packages</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover exclusive deals and curated packages for your perfect stay
          </p>
        </motion.div>
      </section>

      {/* Offers Grid */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Limited Time Offers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book now to take advantage of our exclusive packages and special rates
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save {Math.round(((parseInt(offer.originalPrice.replace('$', '')) - parseInt(offer.price.replace('$', ''))) / parseInt(offer.originalPrice.replace('$', ''))) * 100)}%
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{offer.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{offer.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-primary">{offer.price}</span>
                      <span className="text-gray-400 line-through">{offer.originalPrice}</span>
                      <span className="text-gray-500">/ {offer.duration}</span>
                    </div>
                    <p className="text-sm text-gray-500">Valid until {offer.validUntil}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-1">
                      {offer.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                      {offer.features.length > 3 && (
                        <li className="text-sm text-primary">+{offer.features.length - 3} more</li>
                      )}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Terms & Conditions</h3>
            <div className="text-gray-600 space-y-2 text-left bg-white p-6 rounded-lg">
              <p>• All offers are subject to availability and cannot be combined with other promotions.</p>
              <p>• Prices are per package and exclude taxes and fees.</p>
              <p>• Advance booking required. Cancellation policies apply.</p>
              <p>• Blackout dates may apply during holiday periods.</p>
              <p>• Hotel reserves the right to modify or withdraw offers at any time.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}