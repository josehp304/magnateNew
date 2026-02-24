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
  { title: "Diploma in Finance", tags: "Business", src: "https://img.freepik.com/free-photo/map-lying-wooden-table_53876-23515.jpg", link: "/courses/finance" },
  { title: "AI Augmented Finance", tags: "FinTech", src: "https://3453376.fs1.hubspotusercontent-na1.net/hubfs/3453376/AdobeStock_580072131.jpeg", link: "/courses/ai-augmented-finance" },
  { title: "German Language", tags: "Language", src: "https://russianclassesindelhi.com/admin/public/blogs/1749584067_adfajbsfb.jpg", link: "/courses/german" },
  { title: "IELTS & PTE", tags: "Study Abroad", src: "https://i0.wp.com/pecpte.com/wp-content/uploads/2020/01/ielts-and-pte-difference.jpg?resize=1014%2C406&ssl=1", link: "/courses/ielts-pte" },
  { title: "3D Digital Marketing", tags: "Creative Marketing", src: "https://cms-artifacts.motionarray.com/content/motion_array/2051040/Digital_Marketing_3D_Illustration_high_resolution_preview_2051040.jpg?Expires=2079275281&Key-Pair-Id=K2ZDLYDZI2R1DF&Signature=mHttrAZNUek6sdFDOcqbjfWp-jq0eSZFf49vsmcvN6WlDNH8TUYKfAQNKuPSHj3DwovJ8WeoP5wFcMwFwYk1m7plMUWP2o0trUqk2RoittJMxLQqVxh38C-6pzI~gDGlJLfDAQUYxcoNA-0xiqwQHZMpT-fjyKQQ-oih88snuzu-56o23qPIMyC6ok~dNhpzMCXXvMvdwk~JinWhVEinkaKliqV8f9Vi22dSD-F51WNeKUvy2IcMcsDLqBKoHAziboSD4M~oGtbQQYmSDOe1AD6qK33oFcGiaZXnHtCX92~aMx4OushmjuvnHT554S6JUBf5cMnsKyKIVNCrebFLIQ__", link: "/courses/digital-marketing" },
  { title: "Data Analytics (ML & AI)", tags: "Data Science", src: "https://media.licdn.com/dms/image/v2/D4E12AQGTAN13FzzQ9w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695888362411?e=2147483647&v=beta&t=F2oLzRQTn2W4w98iUc1K4pO1-g8se8OrN_O7Eh5vRyA", link: "/courses/data-analytics" },
  { title: "AI Automation", tags: "Artificial Intelligence", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe14ZlXWg1RVMZGxInqARHj_O5ryfegSkclg&s", link: "/courses/ai-automation" },
  { title: "Full Stack Development", tags: "Web Development", src: "https://images.yourstory.com/cs/1/6b460cd040d711e994bbefffe3577d8b/full-stack-web-development-1586433444650.png", link: "/courses/full-stack" },
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
      {/* <div id="who-we-are">
        <WhoWeAre />
      </div> */}
      <div id="about">
        <About />
      </div>
      {/* <ProcessCards /> */}
      <div id="course-dial">
        <CourseDial items={courseItems} />
      </div>
      <div id="testimonials">
        <Testimonials />
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
