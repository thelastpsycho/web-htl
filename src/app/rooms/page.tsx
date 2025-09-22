"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import LazyImage from "@/components/LazyImage";
import LazySection from "@/components/LazySection";

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      description: "Spacious suite with city views and premium amenities",
      price: "$299",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["City View", "King Bed", "Marble Bathroom", "Workspace"]
    },
    {
      id: 2,
      name: "Executive Room",
      description: "Modern comfort with business-friendly amenities",
      price: "$249",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["Work Desk", "High-speed WiFi", "Coffee Machine", "Rain Shower"]
    },
    {
      id: 3,
      name: "Presidential Suite",
      description: "Ultimate luxury with panoramic city views",
      price: "$599",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["Panoramic View", "Living Area", "Private Balcony", "Butler Service"]
    },
    {
      id: 4,
      name: "Family Suite",
      description: "Perfect for families with connecting rooms",
      price: "$399",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["Two Bedrooms", "Kitchenette", "Family Lounge", "Kids Amenities"]
    },
    {
      id: 5,
      name: "Ocean View Room",
      description: "Breathtaking ocean views from every angle",
      price: "$349",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["Ocean View", "Balcony", "Spa Bath", "Premium Amenities"]
    },
    {
      id: 6,
      name: "Penthouse Suite",
      description: "The pinnacle of luxury living",
      price: "$899",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["Rooftop Access", "Private Pool", "Full Kitchen", "Concierge Service"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0">
          <LazyImage
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Hotel Rooms"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Rooms & Suites</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover our collection of luxurious accommodations designed for your comfort
          </p>
        </motion.div>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <LazyImage
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold mb-1">{room.name}</h3>
                    <p className="text-white/90 text-sm">{room.price}<span className="text-white/70"> / night</span></p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{room.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-primary">{room.price}<span className="text-gray-500 text-sm font-normal">/night</span></p>
                    <Link
                      href={`/rooms/${room.id}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      View Room
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <LazySection threshold={0.2} className="section-padding bg-gray-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Luxury?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Book your stay now and enjoy our exclusive amenities and exceptional service
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </LazySection>

      <Footer />
    </div>
  );
}