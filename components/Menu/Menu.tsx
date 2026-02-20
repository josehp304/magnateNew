"use client";
import "./Menu.css";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

import { useTransitionRouter } from "next-view-transitions";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CustomEase);
try {
    CustomEase.create("hop", ".15, 1, .25, 1");
} catch (e) {
    console.warn("CustomEase already registered", e);
}

interface MenuProps {
    onMenuStateChange?: (isOpen: boolean) => void;
}

const Menu = ({ onMenuStateChange }: MenuProps) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentPath, setCurrentPath] = useState("/");
    const [scrolled, setScrolled] = useState(false);
    const router = useTransitionRouter();

    const menuRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const menuOverlayRef = useRef<HTMLDivElement>(null);

    const navLogoRef = useRef<HTMLAnchorElement>(null);
    const menuBtnRef = useRef<HTMLParagraphElement>(null);

    const closeBtnRef = useRef<HTMLParagraphElement>(null);

    const menuItemsRef = useRef<HTMLDivElement>(null);
    const menuFooterColsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            if (typeof window !== "undefined") {
                setCurrentPath(window.location.pathname);
            }
        };

        window.addEventListener("popstate", handleRouteChange);

        // next-view-transitions router doesn't expose 'events' in the same way next/router does
        // for now we rely on popstate and manual updates in navigateTo
        // or we can attach a listener if available.
        // The source code used router.events?.on?.("routeChangeComplete", handleRouteChange);
        // which might be from standard next/router mixed with useTransitionRouter?
        // useTransitionRouter returns an instance that mimics next/router but might not have events.
        // Let's assume standard behavior for now.

        return () => {
            window.removeEventListener("popstate", handleRouteChange);
        };
    }, [router]);

    useGSAP(
        () => {
            if (!menuOverlayRef.current || !closeBtnRef.current) return;

            gsap.set(menuOverlayRef.current, {
                opacity: 0,
                pointerEvents: "none",
            });

            gsap.set(closeBtnRef.current, {
                y: "100%",
            });

            gsap.set(".menu-overlay-items .revealer a", {
                y: "100%",
            });

            gsap.set(".menu-footer .revealer p, .menu-footer .revealer a", {
                y: "100%",
            });
        },
        { scope: menuRef }
    );

    function slideInOut() {
        document.documentElement.animate(
            [
                {
                    opacity: 1,
                    transform: "translateY(0) scale(1)",
                },
                {
                    opacity: 0.2,
                    transform: "translateY(-30%) scale(0.90)",
                },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            }
        );

        document.documentElement.animate(
            [
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    }

    const getExactPath = () => {
        if (typeof window !== "undefined") {
            return window.location.pathname;
        }
        return currentPath;
    };

    const isExactPath = (path: string) => {
        const exactCurrentPath = getExactPath();
        return exactCurrentPath === path;
    };

    const navigateTo = (path: string) => {
        if (isAnimating) return;

        closeMenu();

        // Check if it's an anchor link
        if (path.includes("#")) {
            const [targetPath, hash] = path.split("#");
            const currentPath = window.location.pathname;

            // Handle root path variations
            const normalizedTarget = targetPath === "" ? "/" : targetPath;
            const normalizedCurrent = currentPath; // Don't modify currentPath blindly

            // If we are already on the page where the section exists
            // e.g. targetPath="/" or "" and currentPath="/"
            if (normalizedTarget === normalizedCurrent) {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
                return;
            }
        }

        setTimeout(() => {
            router.push(path, {
                onTransitionReady: slideInOut,
            });
        }, 0);
    };

    const openMenu = () => {
        if (isAnimating || !menuBtnRef.current || !menuOverlayRef.current || !navRef.current) return;

        onMenuStateChange?.(true);

        setIsAnimating(true);
        const tl = gsap.timeline({
            onComplete: () => setIsAnimating(false),
        });

        tl.to(menuBtnRef.current, {
            y: "-100%",
            duration: 0.5,
            ease: "power3.out",
            onComplete: () => {
                if (navRef.current) navRef.current.style.pointerEvents = "none";
                gsap.set(menuBtnRef.current!, { y: "100%" });
            },
        });

        tl.to(
            menuOverlayRef.current,
            {
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                onStart: () => {
                    if (menuOverlayRef.current) menuOverlayRef.current.style.pointerEvents = "all";
                },
            },
            "-=0.45"
        );

        tl.to(
            closeBtnRef.current,
            {
                y: "0%",
                duration: 1,
                ease: "power3.out",
            },
            "-=0.5"
        );

        tl.to(
            ".menu-overlay-items .revealer a",
            {
                y: "0%",
                duration: 1,
                stagger: 0.075,
                ease: "power3.out",
            },
            "<"
        );

        tl.to(
            ".menu-footer .revealer p, .menu-footer .revealer a",
            {
                y: "0%",
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.5,
            },
            "<"
        );
    };

    const closeMenu = () => {
        if (isAnimating || !menuOverlayRef.current) return;

        onMenuStateChange?.(false);

        setIsAnimating(true);
        const tl = gsap.timeline({
            onComplete: () => setIsAnimating(false),
        });

        tl.to(closeBtnRef.current, {
            y: "-100%",
            duration: 0.5,
            ease: "power3.out",
        });

        tl.to(
            ".menu-overlay-items .revealer a",
            {
                y: "-100%",
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.in",
            },
            "<"
        );

        tl.to(
            ".menu-footer .revealer p, .menu-footer .revealer a",
            {
                y: "-100%",
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.in",
            },
            "<"
        );

        tl.to(
            menuOverlayRef.current,
            {
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
                onComplete: () => {
                    if (menuOverlayRef.current) menuOverlayRef.current.style.pointerEvents = "none";

                    gsap.set(closeBtnRef.current!, {
                        y: "100%",
                    });

                    gsap.set(".menu-overlay-items .revealer a", {
                        y: "100%",
                    });

                    gsap.set(".menu-footer .revealer p, .menu-footer .revealer a", {
                        y: "100%",
                    });
                },
            },
            "+=0.1"
        );

        tl.to(
            menuBtnRef.current,
            {
                y: "0%",
                duration: 0.5,
                ease: "power3.out",
                onStart: () => {
                    if (navRef.current) navRef.current.style.pointerEvents = "all";
                },
            },
            "-=0.45"
        );
    };

    return (
        <>
            <div 
                className={`nav-container transition-all duration-500 ease-out border-b ${
                    scrolled 
                        ? "bg-[#0c0026]/70 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] !mix-blend-normal" 
                        : "bg-transparent border-transparent"
                }`}
                style={{ pointerEvents: scrolled ? "auto" : "none" }}
            >
                <div 
                    className={`nav transition-all duration-500 ease-out ${scrolled ? "py-4" : "p-6"}`}
                    ref={navRef}
                >
                    <div className="dummy"></div>

                    {/* Desktop Navigation */}
                    <div className="flex-1 hidden lg:flex justify-end items-center gap-10 pointer-events-auto">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/#course-dial", label: "Courses" },
                            { path: "/#testimonials", label: "Testimonials" },
                            { path: "/#about", label: "About Us" },
                            { path: "/student-login", label: "Student Login" },
                        ].map((item) => (
                            <div className="revealer" key={item.path}>
                                <a
                                    href={item.path}
                                    className="relative text-white/80 hover:text-white text-sm font-[family-name:var(--font-inter)] font-semibold tracking-wide transition-all duration-300 ease-out py-1 group"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigateTo(item.path);
                                    }}
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
                                </a>
                            </div>
                        ))}
                        <div className="revealer">
                             <a
                                 href="/contact" 
                                 className="px-6 py-2.5 bg-white text-black text-sm font-bold font-[family-name:var(--font-manrope)] rounded-full hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 shadow-lg"
                                 style={{ color: 'black' }}
                                 onClick={(e) => {
                                      e.preventDefault();
                                      navigateTo("/contact"); 
                                 }}
                             >
                                 Get Free Demo
                             </a>
                        </div>
                    </div>

                    {/* Mobile/Tablet Menu Toggle */}
                    <div className="flex-1 flex justify-end lg:hidden pointer-events-auto">
                        <div className="nav-menu-toggle-open">
                            <div className="revealer" onClick={openMenu}>
                                <p className="sm caps mono" ref={menuBtnRef}>
                                    Menu
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div 
                className={`nav-logo mix-blend-difference transition-all duration-500 ease-out z-[20001] fixed ${
                    scrolled ? "!top-4 !left-4" : "!top-6 !left-6"
                }`}
            >
                <div className="revealer">
                    <a
                        href="/"
                        ref={navLogoRef}
                        className="flex items-center gap-3 no-underline group"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/", {
                                onTransitionReady: slideInOut,
                            });
                        }}
                    >
                         <div className="relative w-10 h-10 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105">
                             <Image
                                 src="/logo.svg"
                                 alt="Magnate Logo"
                                 fill
                                 className="object-contain"
                                 priority
                             />
                         </div>
                        <span className="text-xl md:text-2xl font-extrabold tracking-widest text-white uppercase font-[family-name:var(--font-manrope)] leading-none">
                            Magnate
                        </span>
                    </a>
                </div>
            </div>
            <div className="menu" ref={menuRef}>
                <div className="menu-overlay" ref={menuOverlayRef}>
                    <div className="menu-overlay-nav">
                        <div className="menu-overlay-nav-toggle-close">
                            <div className="revealer" onClick={closeMenu}>
                                <p className="sm caps mono" ref={closeBtnRef}>
                                    Close
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="menu-overlay-items" ref={menuItemsRef}>
                        {[
                            { path: "/", label: "Home" },
                            { path: "/#course-dial", label: "Courses" },
                            { path: "/#testimonials", label: "Testimonials" },
                            { path: "/#about", label: "About Us" },
                            { path: "/student-login", label: "Student Login" },
                        ].map((item) => (
                            <div className="revealer" key={item.path}>
                                <a
                                    href={item.path}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigateTo(item.path);
                                    }}
                                >
                                    <h1>{item.label}</h1>
                                </a>
                            </div>
                        ))}
                        <div className="revealer" style={{ marginTop: '2rem' }}>
                             <a
                                 href="/contact"
                                 onClick={(e) => {
                                     e.preventDefault();
                                     navigateTo("/contact");
                                 }}
                                 className="inline-block px-8 py-3 bg-white text-black text-lg font-bold uppercase tracking-wide rounded-full hover:scale-105 transition-transform"
                                 style={{ color: 'black' }}
                             >
                                 Get Free Demo
                             </a>
                         </div>
                    </div>
                    <div className="menu-footer" ref={menuFooterColsRef}>
                        <div className="menu-footer-col">
                            <div className="revealer">
                                <p className="sm caps mono">&copy; 2025 All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="menu-footer-col">
                            <div className="socials">
                                <div className="revealer">
                                    <a
                                        className="sm caps mono"
                                        href="https://www.youtube.com/@codegrid"
                                    >
                                        YouTube
                                    </a>
                                </div>
                                <div className="revealer">
                                    <a
                                        className="sm caps mono"
                                        href="https://www.instagram.com/codegridweb/"
                                    >
                                        Instagram
                                    </a>
                                </div>
                                <div className="revealer">
                                    <a className="sm caps mono" href="https://x.com/codegridweb">
                                        X
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
