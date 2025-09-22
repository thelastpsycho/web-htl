"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import LazyImage from "@/components/LazyImage";
import LazySection from "@/components/LazySection";

export default function AboutPage() {
  const timeline = [
    {
      year: "2010",
      title: "Our Beginning",
      description: "Founded with a vision to create extraordinary hospitality experiences."
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Expanded our facilities and introduced world-class spa services."
    },
    {
      year: "2018",
      title: "Recognition",
      description: "Awarded 'Luxury Hotel of the Year' by International Hospitality Awards."
    },
    {
      year: "2020",
      title: "Sustainability",
      description: "Launched our eco-friendly initiatives and green certification program."
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Introduced cutting-edge technology while maintaining our commitment to personalized service."
    }
  ];

  const awards = [
    { name: "Five Star Diamond Award", year: "2023", issuer: "American Academy of Hospitality Sciences" },
    { name: "World Travel Awards", year: "2022", issuer: "World Travel Awards" },
    { name: "Luxury Hotel of the Year", year: "2021", issuer: "International Hospitality Magazine" },
    { name: "Sustainability Excellence", year: "2020", issuer: "Green Tourism Association" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every detail, from the quality of our service to the comfort of our accommodations.",
      icon: "⭐"
    },
    {
      title: "Hospitality",
      description: "Genuine warmth and personalized service are at the heart of everything we do.",
      icon: "❤️"
    },
    {
      title: "Innovation",
      description: "We continuously evolve and embrace new ideas to enhance our guest experience.",
      icon: "💡"
    },
    {
      title: "Sustainability",
      description: "We are committed to protecting our environment and supporting our local community.",
      icon: "🌱"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <LazyImage
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Hotel"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </ParallaxSection>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed"
          >
            Welcome to Luxe Hotel, where luxury meets exceptional hospitality.
            Since our inception, we have been dedicated to creating unforgettable
            experiences for our guests through impeccable service and world-class amenities.
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">A Legacy of Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, Luxe Hotel has established itself as a beacon of luxury and hospitality.
                Our commitment to excellence has earned us recognition as one of the premier destinations
                for discerning travelers from around the world.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From our meticulously designed accommodations to our award-winning dining experiences,
                every aspect of Luxe Hotel reflects our dedication to creating extraordinary moments
                for our guests.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that true luxury lies in the details – the warm welcome, the impeccable service,
                and the unforgettable experiences that stay with you long after your departure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <LazyImage
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Hotel Lobby"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our evolution as a leader in luxury hospitality
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:ml-auto md:w-1/2'}`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-4`}>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {item.year}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Recognition & Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Honored for our commitment to excellence in hospitality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{award.name}</h3>
                    <p className="text-primary font-semibold mb-1">{award.year}</p>
                    <p className="text-gray-600 text-sm">{award.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}