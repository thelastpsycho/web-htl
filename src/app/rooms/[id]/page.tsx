"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  const roomData = {
    1: {
      name: "Deluxe Suite",
      description: "Experience the perfect blend of comfort and elegance in our spacious Deluxe Suite. This beautifully appointed accommodation features a separate living area, premium furnishings, and stunning city views. The suite includes a luxurious marble bathroom with a deep soaking tub and separate rain shower.",
      price: "$299",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      amenities: [
        { icon: "🏙️", name: "City View" },
        { icon: "🛏️", name: "King Size Bed" },
        { icon: "🚿", name: "Marble Bathroom" },
        { icon: "💼", name: "Workspace" },
        { icon: "☕", name: "Coffee Machine" },
        { icon: "🌡️", name: "Climate Control" },
      ],
      features: [
        "55 square meters of luxury space",
        "Separate living area with sofa",
        "Premium bedding and linens",
        "55-inch smart TV with streaming services",
        "High-speed WiFi",
        "Mini bar with premium selections",
        "24-hour room service",
        "Turndown service"
      ]
    },
    2: {
      name: "Executive Room",
      description: "Designed for the modern business traveler, our Executive Room combines functionality with comfort. Featuring a dedicated workspace, high-speed connectivity, and thoughtful amenities to ensure a productive and relaxing stay.",
      price: "$249",
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      amenities: [
        { icon: "💻", name: "Work Desk" },
        { icon: "📶", name: "High-speed WiFi" },
        { icon: "☕", name: "Coffee Machine" },
        { icon: "🚿", name: "Rain Shower" },
        { icon: "📺", name: "Smart TV" },
        { icon: "🔒", name: "Safe" },
      ],
      features: [
        "35 square meters of comfort",
        "Ergonomic work desk and chair",
        "Complimentary business center access",
        "Express check-in/check-out",
        "Daily newspaper",
        "Evening turndown service",
        "Complimentary bottled water",
        "Laundry and pressing service"
      ]
    }
  };

  const room = roomData[params.id as keyof typeof roomData] || roomData[1];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Room Header */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link href="/rooms" className="text-primary hover:text-primary/80 mb-4 inline-block">
              ← Back to Rooms
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{room.name}</h1>
            <p className="text-2xl text-primary font-semibold">{room.price}<span className="text-gray-500 text-lg"> / night</span></p>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          >
            {room.images.map((image, index) => (
              <div key={index} className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${room.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-12 mb-12"
          >
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About this room</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {room.description}
              </p>

              <h3 className="text-2xl font-semibold mb-4">Room Features</h3>
              <ul className="space-y-3">
                {room.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                {room.amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-3xl mb-2">{amenity.icon}</div>
                    <p className="text-sm text-gray-700">{amenity.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Book This Room
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}