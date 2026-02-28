import Link from "next/link";
import { GraduationCap, Youtube, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-white text-black p-2 rounded-lg">
                                <GraduationCap size={20} />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                MAGNATE
                            </span>
                        </Link>
                        <p className="text-sm max-w-xs">
                            Empowering students to achieve their global education dreams through expert guidance and personalized support.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">University Admissions</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Visa Counseling</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Scholarship Aid</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Test Preparation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="https://www.youtube.com/@The_Magnates_Academy" className="hover:text-white transition-colors"><Youtube size={20} /></Link>
                            <Link href="https://www.instagram.com/magnate.academy/" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
                            <Link href="https://www.linkedin.com/company/magnateacademy/?originalSubdomain=in" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© 2024 Magnate Education. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
