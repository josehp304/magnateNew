"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import "./Preloader.css";
import BlockCopy from "../BlockCopy/BlockCopy";

// Register CustomEase if available, else standard easing will fail gracefully or we fallback
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
  try {
    CustomEase.create("hop", "0.85, 0, 0.15, 1");
  } catch (e) {
    console.warn("CustomEase not available, using standard ease.");
  }
}

const Preloader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  useGSAP(
    () => {
      const scope = containerRef.current;
      if (!scope) return;

      // Selectors scoped to this component
      const counterElement = scope.querySelector(".preloader-counter h1");
      // const overlayTexts = scope.querySelectorAll(".preloader-overlay-text"); // handled by timeline select
      // const images = scope.querySelectorAll(".preloader-img"); // handled by timeline select

      const counter = { value: 0 };

      const counterTl = gsap.timeline({ delay: 0.3 });
      const overlayTextTl = gsap.timeline({ delay: 0.4 });
      const revealTl = gsap.timeline({ delay: 0.3 });

      counterTl.to(counter, {
        value: 100,
        duration: 4,
        ease: "power2.out",
        onUpdate: () => {
          if (counterElement) {
            counterElement.textContent = Math.floor(counter.value).toString();
          }
        },
      });

      overlayTextTl
        .to(".preloader-overlay-text", {
          y: "0",
          duration: 0.6,
          ease: "hop",
        })
        .to(".preloader-overlay-text", {
          y: "-2rem",
          duration: 0.6,
          ease: "hop",
          delay: 0.6,
        })
        .to(".preloader-overlay-text", {
          y: "-4rem",
          duration: 0.6,
          ease: "hop",
          delay: 0.6,
        })
        .to(".preloader-overlay-text", {
          y: "-6rem",
          duration: 0.6,
          ease: "hop",
          delay: 0.8,
        });

      revealTl
        .to(".preloader-img", {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 0.8,
          ease: "hop",
        })
        .to(".preloader-hero-images", {
          gap: "0.75vw",
          duration: 0.8,
          delay: 0.4,
          ease: "hop",
        })
        .to(
          ".preloader-img",
          {
            scale: 1,
            duration: 0.8,
            ease: "hop",
          },
          "<",
        )
        .to(".preloader-img:not(.preloader-hero-main-img)", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.8,
          stagger: 0.08,
          ease: "hop",
        })
        .to(".preloader-hero-main-img", {
          scale: 2,
          duration: 0.8,
          ease: "hop",
        })
        .to(".preloader-hero-main-img", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.8,
          ease: "hop",
        })
        .to(".preloader-hero-overlay", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.8,
          ease: "hop",
        })
        .call(() => {
          setIsPreloaderComplete(true);
        })
        .to(
          ".preloader-scroll-down img",
          {
            y: "0px",
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );

  return (
    <div className="preloader-root" ref={containerRef}>
      {/* 
      <nav className="preloader-nav">
        <div className="nav-logo">
          <a href="#">Elara Vandenberg</a>
        </div>
        <div className="preloader-nav-items">
          <a href="#">Runway</a>
          <a href="#">Lookbook</a>
          <a href="#">Campaigns</a>
          <a href="#">Biography</a>
        </div>
      </nav>
      */}

      <section className="preloader-hero">
        <div className="preloader-hero-overlay">
          <div className="preloader-counter">
            <h1>0</h1>
          </div>

          <div className="preloader-overlay-text-container">
            <div className="preloader-overlay-text">
              <p>Structure</p>
              <p>Designed Identity</p>
              <p>Welcome</p>
              {/* Extra item to ensure loop ends correctly or just spacing */}
              <p></p>
            </div>
          </div>
        </div>

        <div className="preloader-hero-images">
          {/* Using Public Images */}
          <div className="preloader-img img">
            <img src="/images/preloader/img-1.jpg" alt="Img 1" />
          </div>
          <div className="preloader-img img">
            <img src="/images/preloader/img-2.jpg" alt="Img 2" />
          </div>
          <div className="preloader-img img preloader-hero-main-img">
            <img src="/images/preloader/img-3.jpg" alt="Hero Img" />
          </div>
          <div className="preloader-img img">
            <img src="/images/preloader/img-4.jpg" alt="Img 4" />
          </div>
          <div className="preloader-img img">
            <img src="/images/preloader/img-5.jpg" alt="Img 5" />
          </div>
        </div>

        <div className="preloader-hero-header">
          <BlockCopy
            animateOnScroll={false}
            triggerStart={isPreloaderComplete}
            blockColor="#fb01ff"
          >
            <h1>The World Is Your Campus</h1>
          </BlockCopy>
        </div>

        <div className="preloader-scroll-down">
          <img src="/icons/scroll.svg" alt="Scroll Down" />
        </div>
      </section>
    </div>
  );
};

export default Preloader;
