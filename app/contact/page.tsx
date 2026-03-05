"use client";
import "./contact.css";
import React, { useRef, useState } from "react";

import Copy from "../../components/Copy/Copy";

import { useTransitionRouter } from "next-view-transitions";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ContactPage = () => {
    const router = useTransitionRouter();
    const contactRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        course: "AI Augmented Finance"
    });

    useGSAP(
        () => {
            if (!contactRef.current) return;
            // Animate Map Wrapper instead of .contact-img
            const mapWrapper = contactRef.current.querySelector(".contact-map-wrapper");
            const footerTexts = contactRef.current.querySelectorAll(
                ".contact-footer .footer-text"
            );

            gsap.set(mapWrapper, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            });

            gsap.to(mapWrapper, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                duration: 1,
                delay: 0.85,
                ease: "power3.out",
            });

            footerTexts.forEach((element) => {
                const textContent = element.querySelector(".footer-text-content");
                gsap.set(textContent, {
                    y: "100%",
                });
            });

            footerTexts.forEach((element, index) => {
                const textContent = element.querySelector(".footer-text-content");
                gsap.to(textContent, {
                    y: "0%",
                    duration: 0.8,
                    delay: 1.8 + index * 0.1,
                    ease: "power3.out",
                });
            });
        },
        { scope: contactRef }
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Temporary logic: Construct mailto link
        const subject = `Course Inquiry from ${formData.fullName}`;
        const body = `Name: ${formData.fullName}%0D%0APhone: ${formData.phone}%0D%0ACourse: ${formData.course}`;
        window.location.href = `mailto:info@themagnateacademy.com?subject=${subject}&body=${body}`;
    };

    const handleWhatsApp = () => {
        window.open("https://wa.me/918111995577", "_blank");
    };

    return (
        <div className="contact" ref={contactRef}>
            <div className="contact-map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7858.108076358495!2d76.3278995!3d10.0123953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d510a5ad137%3A0xcaf2ecb4d0caf6e0!2sMagnate%20Academy!5e0!3m2!1sen!2sin!4v1771957814244!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="contact-form-container">
                <div className="contact-address-top">
                    <Copy delay={0.9}>
                        <div className="address-top-inner">
                            <p className="address-top-label">Address</p>
                            <p className="address-top-text">
                                1st Floor, Thykoottathil Square,<br /> Civil Line Rd, opp. St. Joseph Church,<br /> Vazhakkala, Kochi, Kakkanad,<br /> Kerala 682030
                            </p>
                        </div>
                    </Copy>
                </div>

                <div className="contact-header">
                    <Copy delay={1}>
                        <h1 className="header-title">Start Your Journey</h1>
                    </Copy>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <Copy delay={1.1}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="John Doe"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </Copy>

                    <Copy delay={1.2}>
                        <div className="form-group">
                            <label>Phone (Country Code)</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+1 234 567 8900"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </Copy>

                    <Copy delay={1.3}>
                        <div className="form-group">
                            <label>Select Course</label>
                            <select name="course" title="Select Course" value={formData.course} onChange={handleChange} required>
                                <option value="" disabled>Select a course</option>
                                <option value="Diploma in Finance">Diploma in Finance</option>
                                <option value="AI Augmented Finance">AI Augmented Finance</option>
                                <option value="German">German</option>
                                <option value="IELTS & PTE">IELTS &amp; PTE</option>
                                <option value="AI Automation">AI Automation</option>
                                <option value="Data Analytics + AI + Agentic AI">Data Analytics + AI + Agentic AI</option>
                                <option value="Data Science + AI / ML + Gen AI">Data Science + AI / ML + Gen AI</option>
                                <option value="AI Automation + Agentic AI">AI Automation + Agentic AI</option>
                                <option value="Devops Engineering / Cloud Engineering">Devops Engineering / Cloud Engineering</option>
                                <option value="3D Digital Marketing">3D Digital Marketing</option>
                                <option value="Full Stack Development">Full Stack Development</option>
                            </select>
                        </div>
                    </Copy>

                    <Copy delay={1.4}>
                        <button type="submit" className="submit-btn">
                            Submit Application
                        </button>
                    </Copy>
                </form>

                <div className="contact-actions">
                    <Copy delay={1.5}>
                        <button className="whatsapp-btn" onClick={handleWhatsApp}>
                            Chat on WhatsApp
                        </button>
                    </Copy>
                </div>

                <div className="contact-details" style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
                    <Copy delay={1.6}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25em' }}>
                            <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em', opacity: 0.6 }}>Phone</p>
                            <p className="sm" style={{ fontWeight: 400, fontSize: '1.1rem' }}>+91 8111995577</p>
                        </div>
                    </Copy>
                    <Copy delay={1.7}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25em' }}>
                            <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em', opacity: 0.6 }}>Email</p>
                            <a href="mailto:info@themagnateacademy.com" className="sm" style={{ fontWeight: 400, fontSize: '1.1rem', color: 'inherit', textDecoration: 'none' }}>info@themagnateacademy.com</a>
                        </div>
                    </Copy>
                    <Copy delay={1.8}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25em' }}>
                            <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em', opacity: 0.6 }}>Address</p>
                            <p className="sm" style={{ maxWidth: '300px', lineHeight: '1.4', fontWeight: 400, fontSize: '1.1rem' }}>
                                1st Floor, Thykoottathil Square,<br /> Civil Line Rd, opp. St. Joseph Church,<br /> Vazhakkala, Kochi, Kakkanad,<br /> Kerala 682030
                            </p>
                        </div>
                    </Copy>
                </div>
            </div>

            <div className="contact-footer">
                <div className="fc-col-sm">
                    <div className="footer-text">
                        <div className="footer-text-content">
                            <p className="sm caps">&copy; 2025 All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
