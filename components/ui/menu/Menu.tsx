"use client";
import "./Menu.css";
import { useRef, useState, useEffect } from "react";

import { useTransitionRouter } from "next-view-transitions";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", ".15, 1, .25, 1");

interface MenuProps {
    onMenuStateChange?: (isOpen: boolean) => void;
}

const Menu = ({ onMenuStateChange }: MenuProps) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentPath, setCurrentPath] = useState("/");
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

        (router as any).events?.on?.("routeChangeComplete", handleRouteChange);

        return () => {
            window.removeEventListener("popstate", handleRouteChange);
            (router as any).events?.off?.("routeChangeComplete", handleRouteChange);
        };
    }, [router]);

    useGSAP(
        () => {
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
            } as any
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
            } as any
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

        if (isExactPath(path)) {
            closeMenu();
            return;
        }

        closeMenu();

        setTimeout(() => {
            router.push(path, {
                onTransitionReady: slideInOut,
            });
        }, 0);
    };

    const openMenu = () => {
        if (isAnimating) return;

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
                navRef.current!.style.pointerEvents = "none";
                gsap.set(menuBtnRef.current, { y: "100%" });
            },
        });

        tl.to(
            menuOverlayRef.current,
            {
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                onStart: () => {
                    menuOverlayRef.current!.style.pointerEvents = "all";
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
        if (isAnimating) return;

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
                    menuOverlayRef.current!.style.pointerEvents = "none";

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
                    navRef.current!.style.pointerEvents = "all";
                },
            },
            "-=0.45"
        );
    };

    return (
        <>
            <div className="nav-container">
                <div className="nav" ref={navRef}>
                    <div className="nav-logo">
                        <div className="revealer">
                            <a
                                href="/"
                                ref={navLogoRef}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (isExactPath("/")) return;

                                    router.push("/", {
                                        onTransitionReady: slideInOut,
                                    });
                                }}
                            >
                                <img
                                    className="logo-img"
                                    src="/logo.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="nav-items">

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
                        <div className="revealer">
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigateTo("/");
                                }}
                            >
                                <h1>index,</h1>
                            </a>
                        </div>
                        <div className="revealer">
                            <a
                                href="/work"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigateTo("/work");
                                }}
                            >
                                <h1>work,</h1>
                            </a>
                        </div>
                        <div className="revealer">
                            <a
                                href="/studio"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigateTo("/studio");
                                }}
                            >
                                <h1>studio,</h1>
                            </a>
                        </div>
                        <div className="revealer">
                            <a
                                href="/archive"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigateTo("/archive");
                                }}
                            >
                                <h1>archive,</h1>
                            </a>
                        </div>
                        <div className="revealer">
                            <a
                                href="/contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigateTo("/contact");
                                }}
                            >
                                <h1>contact</h1>
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
                                        href="https://www.youtube.com/@The_Magnates_Academy"
                                    >
                                        YouTube
                                    </a>
                                </div>
                                <div className="revealer">
                                    <a
                                        className="sm caps mono"
                                        href="https://www.instagram.com/magnate.academy/"
                                    >
                                        Instagram
                                    </a>
                                </div>
                                <div className="revealer">
                                    <a className="sm caps mono" href="https://www.linkedin.com/company/magnateacademy/?originalSubdomain=in">
                                        LinkedIn
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
