"use client";

import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-[#011C77] text-white py-32 px-6 md:px-20 overflow-hidden relative border-t border-[#01C5C1]/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto"
      >
        
        {/* SECTION 1 - Brand Statement */}
        <div className="mb-24 md:mb-32 pt-10">
          {/* <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] max-w-4xl mb-8 font-[family-name:var(--font-manrope)] tracking-tight">
            Building the next generation <br className="hidden md:block"/> of global leaders.
          </h2> */}
          <p className="text-base md:text-2xl max-w-3xl montserrat-magnate leading-relaxed text-[#CDDBE8]/80">
            Magnate Academy is a future focused institution shaping confident, career ready individuals through elite, industry driven learning.
<br className="hidden md:block"/> We educate with purpose, nurturing ambition and preparing learners for meaningful success in the real world.
          </p>
        </div>

        {/* SECTION 2 - Minimal Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr_auto] gap-12 md:gap-10 mb-20">

          {/* Column 1 — Platform */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-8 font-[family-name:var(--font-manrope)]">Platform</h3>
            <ul className="space-y-4 font-[family-name:var(--font-inter)]">
              {[
                { name: 'About Us',       href: '/aboutus' },
                { name: 'Success Stories',href: '/work' },
                { name: 'Studio',         href: '/studio' },
                { name: 'Archive',        href: '/archive' },
                { name: 'Contact',        href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-[#CDDBE8]/70 hover:text-[#01C5C1] transition-all duration-300 hover:translate-x-1 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Commerce */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-8 font-[family-name:var(--font-manrope)]">Commerce</h3>
            <ul className="space-y-4 font-[family-name:var(--font-inter)]">
              {[
                { name: 'AI Augmented Finance', href: '/courses/ai-augmented-finance' },
                { name: 'Diploma in Finance',   href: '/courses/finance' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[#CDDBE8]/70 hover:text-[#01C5C1] transition-all duration-300 hover:translate-x-1 inline-block leading-snug">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — IT */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-8 font-[family-name:var(--font-manrope)]">IT</h3>
            <ul className="space-y-4 font-[family-name:var(--font-inter)]">
              {[
                { name: 'AI Automation',                        href: '/courses/ai-automation' },
                { name: 'Data Analytics + AI + Agentic AI',    href: '/courses/data-analytics' },
                { name: 'Data Science + AI / ML + Gen AI',     href: '/courses/data-analytics' },
                { name: 'AI Automation + Agentic AI',          href: '/courses/ai-automation' },
                { name: 'DevOps / Cloud Engineering',          href: '/courses' },
                { name: '3D Digital Marketing',                href: '/courses/digital-marketing' },
                { name: 'Full Stack Development',              href: '/courses/full-stack' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[#CDDBE8]/70 hover:text-[#01C5C1] transition-all duration-300 hover:translate-x-1 inline-block leading-snug">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Language */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-8 font-[family-name:var(--font-manrope)]">Language</h3>
            <ul className="space-y-4 font-[family-name:var(--font-inter)]">
              {[
                { name: 'German', href: '/courses/german' },
                { name: 'IELTS',  href: '/courses/ielts-pte' },
                { name: 'PTE',    href: '/courses/ielts-pte' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[#CDDBE8]/70 hover:text-[#01C5C1] transition-all duration-300 hover:translate-x-1 inline-block leading-snug">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Connect */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-8 font-[family-name:var(--font-manrope)]">Connect</h3>
            <div className="space-y-6 font-[family-name:var(--font-inter)] text-[#CDDBE8]/70">
              <p>
                <a href="mailto:info@themagnateacademy.com" className="hover:text-[#01C5C1] transition-colors text-lg">
                  info@themagnateacademy.com
                </a>
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <p className="leading-relaxed flex-1">
                  1st Floor, Thykoottathil Square, Civil Line Rd,<br />
                  opp. St. Joseph Church, Vazhakkala,<br />
                  Kochi, Kakkanad, Kerala 682030
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.451234567!2d76.3272!3d9.9956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTknNDQuMCJOIDc2wrAxOSczOC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                  width="200"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg opacity-70 hover:opacity-100 transition-opacity"
                ></iframe>
              </div>
              <p>
                 <a href="tel:+918111995577" className="hover:text-[#01C5C1] transition-colors">
                  +91 8111995577
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* SECTION 3 - Divider */}
        <div className="border-t border-[#01C5C1]/15 my-16"></div>

        {/* SECTION 4 - Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-sm font-[family-name:var(--font-inter)]">
          <p>
            © {new Date().getFullYear()} Magnate.
          </p>
          
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-[#01C5C1] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#01C5C1] transition-colors">Terms</Link>
            
            <div className="flex items-center gap-4 ml-4 md:ml-8 pl-4 md:pl-8 border-l border-[#01C5C1]/20">
               <a href="#" className="hover:text-[#01C5C1] transition-colors"><Linkedin size={18} /></a>
               <a href="#" className="hover:text-[#01C5C1] transition-colors"><Instagram size={18} /></a>
               <a href="#" className="hover:text-[#01C5C1] transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;
