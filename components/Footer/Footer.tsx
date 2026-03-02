"use client";

import Link from "next/link";
import { Linkedin, Instagram, Twitter, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-[#011C77] text-white py-20 px-6 md:px-20 overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1400px] mx-auto"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-4">
          
          {/* Column 1 — Platform */}
          <div className="flex-auto lg:flex-[0.7] min-w-[100px]">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold mb-10 opacity-80">Platform</h3>
            <ul className="space-y-4 text-base opacity-70">
              {[
                { name: 'About Us',       href: '/aboutus' },
                { name: 'Success Stories',href: '/#testimonials' },
                { name: 'Contact',       href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block w-px h-32 bg-white/20 self-center mx-4"></div>

          {/* Column 2 — Commerce */}
          <div className="flex-auto lg:flex-[0.9] min-w-[140px]">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold mb-10 opacity-80">Commerce</h3>
            <ul className="space-y-4 text-base opacity-70">
              {[
                { name: 'AI Augmented Finance', href: '/courses/ai-augmented-finance' },
                { name: 'Diploma in Finance',   href: '/courses/finance' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors leading-tight block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block w-px h-32 bg-white/20 self-center mx-4"></div>

          {/* Column 3 — IT */}
          <div className="flex-auto lg:flex-[1] min-w-[160px]">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold mb-10 opacity-80">IT</h3>
            <ul className="space-y-4 text-base opacity-70">
              {[
                { name: 'AI Automation', href: '/courses/ai-automation' },
                { name: 'Data Analytics', href: '/courses/data-analytics' },
                { name: 'Data Science', href: '/courses/data-analytics' },
                { name: 'AI Automation', href: '/courses/ai-automation' },
                { name: 'DevOps / Cloud Engineering', href: '/courses' },
                { name: '3D Digital Marketing', href: '/courses/digital-marketing' },
                { name: 'Full Stack Development', href: '/courses/full-stack' },
              ].map((item, index) => (
                <li key={`${item.name}-${index}`}>
                  <Link href={item.href} className="hover:text-white transition-colors leading-tight block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block w-px h-32 bg-white/20 self-center mx-4"></div>

          {/* Column 4 — Language */}
          <div className="flex-auto lg:flex-[0.6] min-w-[80px]">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold mb-10 opacity-80">Language</h3>
            <ul className="space-y-4 text-base opacity-70">
              {[
                { name: 'German', href: '/courses/german' },
                { name: 'IELTS',  href: '/courses/ielts-pte' },
                { name: 'PTE',    href: '/courses/ielts-pte' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block w-px h-32 bg-white/20 self-center mx-4"></div>

          {/* Column 5 — Connect */}
          <div className="flex-auto lg:flex-[2.5] min-w-[320px]">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold mb-10 opacity-80">Contact Us</h3>
            <div className="space-y-6 text-base opacity-70">

              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                 <p className="leading-relaxed flex-1">
                  1st Floor, Thykoottathil Square, Civil Line Rd,<br />
                  Opp. St. Joseph Church, Vazhakkala,<br />
                  Kochi, Kakkanad, Kerala 682030
                </p>
                <div className="relative w-32 sm:w-48 h-28 sm:h-32 rounded-xl overflow-hidden shadow-2xl group border border-white/10 shrink-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.451!2d76.3272!3d9.9956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTknNDQuMCJOIDc2wrAxOSczOC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="grayscale-[20%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  ></iframe>
                </div>
              </div>

              <a href="tel:+918111995577" className="flex w-fit items-center gap-3 hover:text-white transition-colors text-lg font-medium">
                <Phone className="w-5 h-5 shrink-0" />
                <span>+91 8111995577</span>
              </a>
              <a href="mailto:info@themagnateacademy.com" className="flex w-fit items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 shrink-0" />
                <span>info@themagnateacademy.com</span>
              </a>
            </div>
          </div>
        </div>


      </motion.div>
    </footer>
  );
};

export default Footer;
