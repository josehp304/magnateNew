"use client";
import React, { useState, useEffect } from "react";
import "./home.css";
import BlockCopy from "@/components/BlockCopy/BlockCopy";
import Copy from "../components/Copy/Copy";
import BtnLink from "../components/BtnLink/BtnLink";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Footer from "../components/Footer/Footer";
import ProcessCards from "../components/ProcessCards/ProcessCards";
import About from "../components/About/About"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);
try {
  CustomEase.create("hop", "0.9, 0, 0.1, 1");
} catch (e) {
  console.warn("CustomEase failed to register", e);
}

import Preloader from "../components/Preloader2/Preloader";
import HoverImageLinks from "@/components/HoverImageLinks/HoverImageLinks";
import ContactModal from "@/components/ContactModal/ContactModal";
import { Toaster } from "@/components/ui/toaster";
import CourseDial from "@/components/CourseDial";
import Testimonials from "@/components/Testimonials/Testimonials";

const courseItems = [
  { title: "Diploma in Finance", tags: "Business", src: "/img5.jpg", link: "/courses/finance" },
  { title: "AI Augmented Finance", tags: "FinTech", src: "/img6.jpg", link: "/courses/ai-augmented-finance" },
  { title: "German Language", tags: "Language", src: "/img7.jpg", link: "/courses/german" },
  { title: "IELTS & PTE", tags: "Study Abroad", src: "/img8.jpg", link: "/courses/ielts-pte" },
  { title: "3D Digital Marketing", tags: "Creative Marketing", src: "/img9.jpg", link: "/courses/digital-marketing" },
  { title: "Data Analytics (ML & AI)", tags: "Data Science", src: "/img2.jpg", link: "/courses/data-analytics" },
  { title: "AI Automation", tags: "Artificial Intelligence", src: "/img10.jpg", link: "/courses/ai-automation" },
  { title: "Full Stack Development", tags: "Web Development", src: "/img1.jpg", link: "/courses/full-stack" },
];

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useGSAP(() => {
    // Existing animations for Hero Link or other parts if needed
    // But since we are likely replacing the hero experience, we can keep the scroll triggers for sections below.
    const heroLink = document.querySelector(".hero-link");

    // Simple fade in for the old hero link if it's still there
    if (heroLink) {
      gsap.to(heroLink, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero",
          start: "top center",
        }
      });
    }
  }, []);

  return (
    <>
      <Preloader onEnrollClick={() => setContactModalOpen(true)} />

      {/* Existing content below */}
      <section className="hero" style={{ height: 'auto', minHeight: '100vh', display: 'none' }}>
        {/* Hidden old hero for now to focus on the new Preloader/Hero which takes 100vh */}
        {/* <DynamicBackground logoPath="/images/logos/logo_light.png" /> */}

        <div className="hero-content">
          <div className="hero-header">
            <div className="hero-header-col-lg"></div>
            <div className="heroLiquid syntax error (line 101): Unknown tag 'schema'-header-col-sm">
              <Copy animateOnScroll={false} delay={0}>
                <h3>
                  Systems thinking and creative execution brought into web
                  development for consistent outcomes.
                </h3>
              </Copy>
            </div>
          </div>

          <div className="hero-footer">
            <div className="hero-footer-col-lg">
              <Copy animateOnScroll={false} delay={0}>
                <p className="sm caps mono">Studios</p>
                <p className="sm caps mono">Toronto and Copenhagen</p>
              </Copy>
            </div>
            <div className="hero-footer-col-sm">
              <div className="hero-tags">
                <Copy animateOnScroll={false} delay={0}>
                  <p className="sm caps mono">Web Systems</p>
                  <p className="sm caps mono">Interface Design</p>
                  <p className="sm caps mono">Creative Development</p>
                  <p className="sm caps mono">End to End Delivery</p>
                </Copy>
              </div>

              <div className="hero-link">
                <BtnLink
                  route="#"
                  label="contact"
                  onClick={() => setContactModalOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kept other sections */}
      <WhoWeAre />
      <About />
      {/* <ProcessCards /> */}
      <div id="course-dial">
        <CourseDial items={courseItems} />
      </div>
      <Footer />

      {/* Modals and Overlays */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      <Toaster />
    </>
  );
}
