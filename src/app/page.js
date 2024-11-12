// pages/ExamGuardPage.js
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  '/heroimage/image1.avif', // Replace with the actual image paths in the public folder
  '/heroimage/image2.jpg',
  '/heroimage/image3.avif'
];

export default function ExamGuardPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // 5000 ms (5 seconds)
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="bg-customDark min-h-screen text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-white">
        <h1 className="text-2xl font-bold">ExamGuard</h1>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Pricing</a>
          <a href="/login" className="hover:underline">Login</a>
          <button  className="bg-sky-500 px-1 py-1 rounded-md">Sign up</button>
        </div>
      </header>

      {/* Hero Section with Sliding Images */}
      <section className="flex flex-col items-center text-center py-16 px-16 relative">
        <div className="relative w-full max-w-8xl h-[600px] bg-gray-800 rounded-lg overflow-hidden">
          
          {/* Loop over images */}
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}

          {/* Overlay Text and Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black bg-opacity-50">
            <h2 className="text-3xl md:text-5xl font-bold">Train and deploy AI models to detect cheating on exams</h2>
            <p className="mt-4 text-lg">Get started in minutes by training AI models to invigilate your tests with our powerful cloud-based platform.</p>
            <button className="mt-6 bg-blue-500 px-6 py-3 rounded-md text-lg font-semibold">Get started</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-center px-6 py-12 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Why choose ExamGuard?</h3>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">ExamGuard is the most advanced solution for proctoring exams. Our AI technology can detect cheating behaviors in real-time, allowing instructors to protect exams at scale without compromising exam integrity.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src="/heroimage2/image1.jpeg" alt="Train your own model" className="w-18 h-16 mb-4" /> {/* Replace with actual icons */}
            <h4 className="text-xl font-semibold">Train your own models</h4>
            <p className="text-gray-400 mt-2">Upload data and train AI models specific to your institution's needs in just a few clicks.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/heroimage2/image2.jpeg" alt="Proctor exams at scale" className="w-18 h-16 mb-4" /> {/* Replace with actual icons */}
            <h4 className="text-xl font-semibold">Proctor exams at scale</h4>
            <p className="text-gray-400 mt-2">Monitor multiple exams simultaneously, ensuring a fair testing environment.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/heroimage2/image3.jpeg" alt="Detect cheating behavior" className="w-18 h-16 mb-4" /> {/* Replace with actual icons */}
            <h4 className="text-xl font-semibold">Detect cheating behavior</h4>
            <p className="text-gray-400 mt-2">Use advanced machine learning algorithms to detect suspicious actions during exams.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400">
        <p>&copy; 2023 ExamGuard. All rights reserved.</p>
      </footer>
    </div>
  );
}
