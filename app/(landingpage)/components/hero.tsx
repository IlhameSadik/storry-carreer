"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center py-32 text-center md:text-left px-5 max-w-6xl mx-auto space-y-10 md:space-y-0">
        {/* Texte à gauche avec animation */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg font-semibold text-primary">
            Welcome to StoryCareer
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Discover & Share Inspiring Career Journeys
          </h1>
          <p className="max-w-lg text-muted-foreground">
            StoryCareer is a unique platform where individuals from all walks of life can share their career stories, challenges, and successes. Whether you're just starting out or looking to transition, find the inspiration you need here.
          </p>
          <Link href="/stories">
            <Button className="mt-5 px-6 py-3 text-lg">Explore Stories</Button>
          </Link>
        </motion.div>

        {/* Image à droite avec animation */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
           <img
          src="/reading-black.png"
          className="dark:hidden max-w-full h-auto drop-shadow-lg"
          width={400}
          height={400}
          
        />
        <img
          src="/reading-white.png"
          className="hidden dark:block max-w-full h-auto drop-shadow-lg"
          width={400}
          height={400}
         
        />
        </motion.div>
      </section>

      {/* Nouvelle Section Our Vision */}
      <motion.section
        className="py-20 bg-blue-100 text-center px-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        
      >
        <h2 className="text-3xl text-gray-800">
          Our Vision
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mt-4">
          At StoryCareer, we believe that every career path is unique. Our vision is to create a space where people can openly share their professional journeys, learn from one another, and find the guidance they need to make informed career decisions.
        </p>
       
      </motion.section>
    </>
  );
};

export default Hero;
