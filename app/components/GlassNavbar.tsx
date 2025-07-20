'use client';
import Link from 'next/link';

export default function GlassNavbar() {
  return (
    <nav className="sticky z-50 w-full backdrop-blur-md  rounded-2xl px-8 py-4 shadow-lg flex justify-between items-center text-white font-sans">
      <div className="text-2xl font-bold tracking-widest"> SpaceDash</div>

      <ul className="flex space-x-8 text-lg font-medium">
        <li>
          <Link href="#overview" className="hover:text-blue-400 transition duration-300">
            Overview
          </Link>
        </li>
        <li>
          <Link href="#telemetry" className="hover:text-blue-400 transition duration-300">
            Telemetry
          </Link>
        </li>
        <li>
          <Link href="#mars" className="hover:text-blue-400 transition duration-300">
            Mars Weather
          </Link>
        </li>
        <li>
          <Link href="#asteroids" className="hover:text-blue-400 transition duration-300">
            Asteroids
          </Link>
        </li>
      </ul>
    </nav>
  );
}
