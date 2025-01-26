"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const LandingBanner = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial animations
    const tl = gsap.timeline();

    // Logo animation
    tl.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );

    // Text animation
    tl.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Parallax scroll animations
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom+=100% top",
      scrub: 2,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Logo zoom and fade
        gsap.to(logoRef.current, {
          scale: 1 + progress * 9, // Gradual zoom
          opacity: 1 - progress, // Gradual fade
          ease: "power3.out",
          overwrite: "auto", // Prevent conflicts
        });

        // Text fade based on scroll progress
        gsap.to(textRef.current, {
          opacity: 1 - progress, // Fade text out as scroll progresses
          y: -20 * progress, // Add slight upward movement for immersion
          ease: "power3.out",
          overwrite: "auto",
        });
      },
    });
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden"
    >
      <div ref={logoRef} className="mb-6 relative w-48 h-48">
        <Image
          src="/bais.png"
          alt="BAIS Logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority
        />
      </div>
      <h1 ref={textRef} className="text-4xl font-bold text-white text-center">
        Artificial Intelligence Society
      </h1>
    </motion.div>
  );
};

export default LandingBanner;
