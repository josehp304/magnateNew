"use client";

import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";
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
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-10 opacity-80">Platform</h3>
            <ul className="space-y-4 text-base opacity-70">
              {[
                { name: 'About Us',       href: '/aboutus' },
                { name: 'Success Stories',href: '/#testimonials' },
                { name: 'Studio',        href: '/studio' },
                { name: 'Archive',       href: '/archive' },
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
          <div className="flex-1 min-w-[180px]">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-10 opacity-80">Commerce</h3>
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
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-10 opacity-80">IT</h3>
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
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-10 opacity-80">Language</h3>
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
          <div className="flex-[1.5] min-w-[280px]">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-10 opacity-80">Connect</h3>
            <div className="space-y-6 text-base opacity-70">
              <a href="mailto:info@themagnateacademy.com" className="block hover:text-white transition-colors">
                info@themagnateacademy.com
              </a>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                 <p className="leading-relaxed flex-1">
                  1st Floor, Thykoottathil Square, Civil Line Rd,<br />
                  opp. St. Joseph Church, Vazhakkala,<br />
                  Kochi, Kakkanad, Kerala 682030
                </p>
                <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-2xl group border border-white/10">
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

              <a href="tel:+918111995577" className="block hover:text-white transition-colors text-lg font-medium">
                +91 8111995577
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 md:right-20 pointer-events-auto">
          <a 
            href="https://wa.me/918111995577" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#011C77] border border-white/20 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 hover:bg-[#0028A1] transition-all duration-300 group"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="group-hover:rotate-12 transition-transform">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.629-.086-.117-.694-.925-.694-1.762 0-.838.441-1.249.527-1.34s.252-.135.341-.135c.089 0 .179.002.253.007.078.004.145-.018.225.176.081.194.275.67.299.719.023.049.035.108.005.169-.031.062-.054.097-.108.155-.054.061-.113.136-.162.183-.054.053-.11.11-.048.219.063.108.277.457.596.742.411.365.758.477.863.53s.17.036.235-.035c.063-.072.275-.32.348-.428.072-.108.144-.089.243-.053.1.035.631.297.74.351.108.053.18.081.207.126.027.045.027.26-.117.665z" />
              <path d="M12.036 0C5.39 0 0 5.39 0 12.036c0 2.122.553 4.187 1.621 6.007L0 24l6.136-1.597a12.006 12.006 0 0 0 5.9 1.543c6.646 0 12.036-5.39 12.036-12.036S18.682 0 12.036 0zm.012 21.921A9.873 9.873 0 0 1 6.84 20.4l-.367-.218-3.64.954.97-3.543-.239-.381A9.872 9.872 0 0 1 2.131 12.03a9.897 9.897 0 0 1 9.897-9.897 9.897 9.897 0 0 1 9.897 9.897c0 5.457-4.44 9.894-9.877 9.894z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
