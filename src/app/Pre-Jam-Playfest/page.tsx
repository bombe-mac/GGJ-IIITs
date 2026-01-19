"use client";

import Hero from "@/components/ui/neural-network-hero";
import { Calendar, MapPin, Gamepad2, BookOpen, Trophy, Award, Users, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


export default function PreJamPlayfestPage() {
  return (
    <div className="w-screen min-h-screen flex flex-col relative">
      {/* Hero Section - Same background as home page */}
      <Hero 
        title="Pre-Jam Playfest 2026: Learn & Compete"
        description="A 3-day bootcamp and competitive knowledge challenge designed to bring together passionate and aspiring game developers."
        microDetails={[]}
      />

      {/* About Section */}
      <section className="relative bg-black -mt-72 sm:-mt-80 md:-mt-48 pb-8 px-4 sm:pb-12 md:pb-16 sm:px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-5 md:mb-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-white/90 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-2 rounded-lg border border-white/10 w-full sm:w-auto">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-cyan-400" />
              <span className="text-base sm:text-sm md:text-base font-light break-words">22nd – 24th January 2026</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-white/90 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-2 rounded-lg border border-white/10 w-full sm:w-auto">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-purple-400" />
              <span className="text-base sm:text-sm md:text-base font-light">IIIT Sri City</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-2 text-white/90 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-2 rounded-lg border border-white/10 w-full sm:w-auto">
              <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-yellow-400 mt-0.5" />
              <span className="text-base sm:text-sm md:text-base font-light leading-snug">Game Development | Learning + Competition</span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
          >
            <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight tracking-tight text-white mb-4 sm:mb-5 md:mb-6 text-center">
              About The Event
            </h2>
            <div className="space-y-3 sm:space-y-4 text-center max-w-3xl mx-auto">
              <p className="text-white/80 leading-relaxed text-base sm:text-sm md:text-base lg:text-lg">
                Pre-Jam Playfest 2026: Learn & Compete is a 3-day bootcamp and competitive knowledge challenge organized by the IOTA Club of IIIT Sri City, designed to bring together passionate and aspiring game developers.
              </p>
              <p className="text-white/80 leading-relaxed text-base sm:text-sm md:text-base lg:text-lg">
                This event blends hands-on learning, community interaction, and competitive assessment, making it ideal for both beginners and experienced students preparing for large-scale game jams.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Structure Section */}
      <section className="relative bg-black py-8 px-4 sm:py-12 md:py-16 sm:px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center"
          >
            Event Structure
          </motion.h2>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8"
          >
            {/* Day 1 & Day 2 - Learn */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative border-2 border-cyan-500/30 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 bg-black/40 backdrop-blur-xl"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-br-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/15 to-transparent rounded-tl-full blur-2xl" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 lg:p-12 min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">
                {/* Day badge */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 sm:mb-5 md:mb-6"
                >
                  <div className="inline-flex items-center px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-cyan-500/30 via-cyan-500/40 to-cyan-500/30 border-2 border-cyan-400/50 rounded-full shadow-lg shadow-cyan-500/30 backdrop-blur-sm">
                    <span className="text-base sm:text-sm md:text-base font-bold text-cyan-100 tracking-wider uppercase">Day 1 & 2</span>
                  </div>
                </motion.div>
                
                {/* Icon with unique container */}
                <motion.div 
                  className="relative mb-4 sm:mb-5 md:mb-6"
                  whileHover={{ scale: 1.1, rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-500" />
                    {/* Icon container */}
                    <div className="relative bg-gradient-to-br from-cyan-500/40 to-cyan-600/30 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border-2 border-cyan-400/40 shadow-2xl shadow-cyan-500/40 group-hover:shadow-cyan-500/60 transition-all duration-500">
                      <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-cyan-100 relative z-10" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight text-white tracking-tight relative z-10 bg-gradient-to-b from-white to-cyan-100 bg-clip-text text-transparent"
                >
                  Learn
                </motion.h3>
              </div>
              
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-cyan-500/0 group-hover:border-cyan-500/60 transition-all duration-500 pointer-events-none" />
            </motion.div>

            {/* Day 3 - Compete */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative border-2 border-yellow-500/30 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 bg-black/40 backdrop-blur-xl"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-bl-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-500/15 to-transparent rounded-tr-full blur-2xl" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 lg:p-12 min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">
                {/* Day badge */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 sm:mb-5 md:mb-6"
                >
                  <div className="inline-flex items-center px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-yellow-500/30 via-yellow-500/40 to-yellow-500/30 border-2 border-yellow-400/50 rounded-full shadow-lg shadow-yellow-500/30 backdrop-blur-sm">
                    <span className="text-base sm:text-sm md:text-base font-bold text-yellow-100 tracking-wider uppercase">Day 3</span>
                  </div>
                </motion.div>
                
                {/* Icon with unique container */}
                <motion.div 
                  className="relative mb-4 sm:mb-5 md:mb-6"
                  whileHover={{ scale: 1.1, rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-500" />
                    {/* Icon container */}
                    <div className="relative bg-gradient-to-br from-yellow-500/40 to-yellow-600/30 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border-2 border-yellow-400/40 shadow-2xl shadow-yellow-500/40 group-hover:shadow-yellow-500/60 transition-all duration-500">
                      <Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-yellow-100 relative z-10" />
                    </div>
                  </div>
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight text-white tracking-tight relative z-10 bg-gradient-to-b from-white to-yellow-100 bg-clip-text text-transparent"
                >
                  Compete
                </motion.h3>
              </div>
              
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-yellow-500/0 group-hover:border-yellow-500/60 transition-all duration-500 pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tracks & Participation Section */}
      <section className="relative bg-black py-8 px-4 sm:py-12 md:py-16 sm:px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center"
          >
            Tracks & Participation
          </motion.h2>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-md hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4 md:mb-6">
                Beginner Track
              </h3>
              <p className="text-white/80 text-base sm:text-sm md:text-base lg:text-lg">
              A special track designed for first-year undergraduate students.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-md hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4 md:mb-6">
                Open Track
              </h3>
              <p className="text-white/80 text-base sm:text-sm md:text-base lg:text-lg">
               For all other senior undergraduates (all other UGs).
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
          >
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-light text-white mb-2 sm:mb-3 md:mb-4">Evaluation</h3>
                <p className="text-white/80 text-base sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3">
                  Each track is evaluated independently. Total Winners: <span className="text-yellow-400 font-semibold text-2xl sm:text-xl">10</span>
                </p>
                <ul className="space-y-1.5 sm:space-y-2 text-white/80 text-base sm:text-sm md:text-base lg:text-lg">
                  <li className="flex items-center gap-2 sm:gap-3">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                    <span>5 winners from Beginner Track</span>
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                    <span>5 winners from Open Track</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 sm:pt-5 md:pt-6 border-t border-white/10">
                <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-light text-white mb-2 sm:mb-3 md:mb-4">Participation Details</h3>
                <ul className="space-y-2 sm:space-y-3 text-white/80 text-base sm:text-sm md:text-base lg:text-lg">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-cyan-400 mt-1 flex-shrink-0 text-base sm:text-lg">•</span>
                    <span>Open to anyone passionate about learning and competing</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-cyan-400 mt-1 flex-shrink-0 text-base sm:text-lg">•</span>
                    <span>Participation Mode: <span className="text-white font-semibold">Individual</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Timeline Section */}
      <section className="relative bg-black py-8 px-4 sm:py-12 md:py-16 sm:px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center"
          >
            Event Timeline
          </motion.h2>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-3 sm:space-y-4 md:space-y-6"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-md hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 md:gap-4">
                  <span className="text-cyan-400 font-semibold text-base sm:text-sm md:text-base lg:text-lg">Registrations Open:</span>
                  <span className="text-white text-base sm:text-sm md:text-base lg:text-lg font-light">19 Jan 2026</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 md:gap-4">
                  <span className="text-cyan-400 font-semibold text-base sm:text-sm md:text-base lg:text-lg">Registrations Close:</span>
                  <span className="text-white text-base sm:text-sm md:text-base lg:text-lg font-light">21 Jan 2026</span>
                </div>
              </div>
            </motion.div>

            {[
              { date: "22 Jan 2026", desc: "Day 1 – Learning sessions" },
              { date: "23 Jan 2026", desc: "Day 2 – Advanced learning & preparation" },
              { date: "24 Jan 2026", desc: "Day 3 – Quiz competition, results & closing" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-md hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                  <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-light text-white">{item.date}</h3>
                </div>
                <p className="text-white/80 text-base sm:text-sm md:text-base lg:text-lg ml-8 sm:ml-10 md:ml-12 lg:ml-14">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rewards & Certificates Section */}
      <section className="relative bg-black py-8 px-4 sm:py-12 md:py-16 sm:px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center"
          >
            Rewards & Certificates
          </motion.h2>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-md hover:border-yellow-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <div className="p-1.5 sm:p-2 bg-yellow-500/20 rounded-lg">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-light text-white">
                  Win Exciting Rewards
                </h3>
              </div>
              <p className="text-white/80 text-base sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 md:mb-6">
                <span className="text-yellow-400 font-semibold text-2xl sm:text-xl">10 winners</span> in total:
              </p>
              <ul className="space-y-2 sm:space-y-3 text-white/80 text-base sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <li className="flex items-center gap-2 sm:gap-3">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400 flex-shrink-0" />
                  <span>5 winners from Beginner Track</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400 flex-shrink-0" />
                  <span>5 winners from Open Track</span>
                </li>
              </ul>

              <div className="pt-4 sm:pt-5 md:pt-6 lg:pt-8 border-t border-white/10">
                <h4 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-light text-white mb-3 sm:mb-4 md:mb-6">Goodies:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                  {["T-shirts", "Diaries", "Bookmarks", "Sticker sheets"].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-3 sm:p-4 md:p-5 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20"
                    >
                      <p className="text-white/90 text-base sm:text-sm md:text-base font-light">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-md hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                <div className="p-1.5 sm:p-2 bg-cyan-500/20 rounded-lg">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-light text-white">
                  Participation Certificate
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-white/80 text-base sm:text-sm md:text-base lg:text-lg">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-cyan-400 mt-1 flex-shrink-0 text-base sm:text-lg">•</span>
                  <span>Official e-Certificate for every participant</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-cyan-400 mt-1 flex-shrink-0 text-base sm:text-lg">•</span>
                  <span>Unstop Pro vouchers for all participants</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors & Partners Section */}
      <section className="relative bg-black py-8 px-4 sm:py-12 md:py-16 sm:px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center"
          >
            Thanking Our Sponsors & Partners
          </motion.h2>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
          >
            <p className="text-white/70 text-xl sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-center tracking-wide">Powered By</p>
            <div className="flex justify-center items-center w-full">
              <Link
                href="https://unstop.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group flex items-center justify-center cursor-pointer"
                >
                  <Image
                    src="/Sponsor2.jpg"
                    alt="Unstop"
                    width={250}
                    height={250}
                    className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain brightness-110 group-hover:brightness-125 transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-2xl mx-auto"
                  />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="register-cta" className="relative bg-black py-8 px-4 sm:py-12 md:py-16 sm:px-6 md:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-yellow-500/20 border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14 backdrop-blur-md text-center hover:border-white/30 transition-all duration-300"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8"
            >
              Ready to Learn & Compete?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="https://unstop.com/quiz/jam-play-fest-indian-institute-of-information-technology-iiit-sri-city-1623255"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-black rounded-lg sm:rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 text-base sm:text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Register Now on Unstop
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}