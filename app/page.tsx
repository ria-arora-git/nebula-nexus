"use client";


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingGalaxyScene from "./components/floating";

export default function Home() {
  const [marsTemp, setMarsTemp] = useState("-65°C");
  const [asteroidCount, setAsteroidCount] = useState(128);
  const [satelliteStatus] = useState("All Systems Nominal");

  useEffect(() => {
    const interval = setInterval(() => {
      setMarsTemp(`-${65 + Math.floor(Math.random() * 10)}°C`);
      setAsteroidCount(120 + Math.floor(Math.random() * 10));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative h-screen w-screen text-white font-sans overflow-x-hidden">
      <FloatingGalaxyScene />

      <section className="absolute top-25 flex flex-col justify-center items-center text-center px-4 w-full ">
        <motion.h1
          className="text-6xl font-extrabold mb-6 drop-shadow-xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Space Mission Dashboard
        </motion.h1>
        <motion.p
          className="text-2xl max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Visualizing real-time data from simulated interplanetary missions.
        </motion.p>
      </section>

      <section className="h-1/2 flex flex-col items-center justify-center bg-opacity-20 px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          🛰️ ISS Current Location
        </motion.h2>
        <motion.div
          className="w-full max-w-4xl p-6 rounded-lg bg-blue-700 bg-opacity-10 backdrop-blur-md shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl">
            Latitude: <span className="font-bold">28.5623° N</span>, Longitude: <span className="font-bold">80.5774° W</span>
          </p>
          <p className="text-lg mt-2">Altitude: 408 km | Speed: 7.66 km/s</p>
        </motion.div>
      </section>

      <section className="h-1/2 flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          🌌 Mars Weather Report
        </motion.h2>
        <motion.div
          className="w-full max-w-3xl p-6 rounded-lg bg-red-900 bg-opacity-20 backdrop-blur-md shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl">Current Temp: <span className="font-bold">{marsTemp}</span></p>
          <p className="text-lg mt-2">Winds: 10–20 km/h | Visibility: Clear</p>
        </motion.div>
      </section>

      <section className="h-1/2 flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🛰️ Satellite Telemetry
        </motion.h2>
        <motion.div
          className="w-full max-w-4xl p-6 rounded-lg bg-blue-800 bg-opacity-20 backdrop-blur-md shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl">Status: <span className="font-bold">{satelliteStatus}</span></p>
          <p className="text-lg mt-2">Battery: 87% | Signal Strength: Excellent</p>
        </motion.div>
      </section>

      <section className="h-1/2 flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ☄️ Near-Earth Asteroid Watch
        </motion.h2>
        <motion.div
          className="w-full max-w-3xl p-6 rounded-lg bg-yellow-700 bg-opacity-20 backdrop-blur-md shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl">Active Trackers: <span className="font-bold">{asteroidCount}</span></p>
          <p className="text-lg mt-2">Threat Level: Low | Nearest Pass: 0.02 AU</p>
        </motion.div>
      </section>
    </main>
  );
}