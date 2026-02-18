"use client";

import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0c0026] text-white py-32 px-6 md:px-20 overflow-hidden relative border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto"
      >
        
        {/* SECTION 1 - Brand Statement */}
        <div className="mb-24 md:mb-32 pt-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] max-w-4xl mb-8 font-[family-name:var(--font-manrope)] tracking-tight">
            Building the next generation <br className="hidden md:block"/> of global leaders.
          </h2>
          <p className="text-base md:text-lg opacity-70 max-w-xl font-[family-name:var(--font-inter)] leading-relaxed text-white/80">
            Magnate is an elite e-learning platform designed for ambitious professionals. We bridge the gap between education and industry excellence.
          </p>
        </div>

        {/* SECTION 2 - Minimal Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 mb-20">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-8 font-[family-name:var(--font-manrope)]">Platform</h3>
            <ul className="space-y-4 font-[family-name:var(--font-inter)]">
              {['About Us', 'Success Stories', 'Studio', 'Archive'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-base text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-8 font-[family-name:var(--font-manrope)]">Academics</h3>
            <ul className="space-y-4 font-[family-name:var(--font-inter)]">
              {[
                { name: 'Finance & Banking', href: '/courses/finance' },
                { name: 'Data Analytics', href: '/courses/data-analytics' },
                { name: 'Digital Marketing', href: '/courses/digital-marketing' },
                { name: 'German Language', href: '/courses/german' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-base text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-8 font-[family-name:var(--font-manrope)]">Connect</h3>
            <div className="space-y-6 font-[family-name:var(--font-inter)] text-white/70">
              <p>
                <a href="mailto:info@magnatestudyabroad.com" className="hover:text-white transition-colors text-lg">
                  info@magnatestudyabroad.com
                </a>
              </p>
              <p className="leading-relaxed">
                1st Floor, Jairaj Building<br />
                Kochi, India - 682024
              </p>
              <p>
                 <a href="tel:+919207995577" className="hover:text-white transition-colors">
                  +91 9207995577
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* SECTION 3 - Divider */}
        <div className="border-t border-white/10 my-16"></div>

        {/* SECTION 4 - Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-sm font-[family-name:var(--font-inter)]">
          <p>
            © {new Date().getFullYear()} Magnate.
          </p>
          
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            
            <div className="flex items-center gap-4 ml-4 md:ml-8 pl-4 md:pl-8 border-l border-white/20">
               <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
               <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
               <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;
