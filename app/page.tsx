"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Sponsors from "@/components/sponsors";
import Cards from "@/components/cards";

export default function Home() {
  const cardsData = [
    {
      title: "Talent Analytics",
      description: "Advanced analytics to identify top talent and predict performance outcomes with data-driven insights."
    },
    {
      title: "Recruitment Platform",
      description: "Streamlined hiring process with AI-powered candidate matching and automated screening workflows."
    },
    {
      title: "Performance Management",
      description: "Comprehensive tools for tracking, evaluating, and improving employee performance and growth."
    },
    {
      title: "Learning & Development",
      description: "Personalized learning paths and development programs to help your team reach their full potential."
    }
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <Cards
        title="Meet Our Products"
        description="Our Products work together seamlessly to form talent science. Start with one or more."
        cards={cardsData}
      />
    </>
  );
}
