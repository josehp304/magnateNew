import React from 'react';
import Link from 'next/link';

const courses = [
    { title: "Diploma in Finance", color: "#FFD700", link: "/courses/finance" },
    { title: "AI Augmented Finance", color: "#FFD700", link: "/courses/ai-augmented-finance" },
    { title: "German Language", color: "#FFD700", link: "/courses/german" },
    { title: "IELTS & PTE", color: "#FFD700", link: "/courses/ielts-pte" },
    { title: "3D Digital Marketing", color: "#FFD700", link: "/courses/digital-marketing" },
    { title: "Data Science + AI Engineering", color: "#FFD700", link: "/courses/data-science-ai-engineering" },
    { title: "AI Integrated Data Analytics", color: "#FFD700", link: "/courses/ai-integrated-data-analytics" },
    { title: "AI Automation", color: "#FFD700", link: "/courses/ai-automation" },
];

const CourseList = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12 text-black">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Decorative Header */}
                <div className="flex flex-col items-center mb-16 relative">
                    <div className="absolute -top-8 -left-8 text-[#D4AF37] opacity-80 animate-pulse">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">In-Demand Courses</h2>
                    <p className="text-gray-600 text-lg text-center max-w-2xl">
                        You are just a course away from your dream career
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                    {courses.map((course, index) => {
                        const CardContent = (
                            <>
                                {/* Icon Placeholder */}
                                <div className="w-12 h-12 rounded-lg bg-white group-hover:bg-[#333] flex items-center justify-center flex-shrink-0 transition-colors">
                                    {/* Simple circle/icon representation */}
                                    <div className="w-6 h-6 rounded-full border-2 border-[#D4AF37]"></div>
                                </div>

                                <span className="font-medium text-lg leading-tight">{course.title}</span>
                            </>
                        );

                        const cardClasses = "group flex items-center gap-4 bg-[#F5F5F7] p-4 rounded-xl hover:bg-black hover:text-[#D4AF37] transition-all duration-300 cursor-pointer border border-transparent hover:border-[#D4AF37] shadow-sm hover:shadow-xl w-full";

                        return (course as any).link ? (
                            <Link href={(course as any).link} key={index} className={cardClasses}>
                                {CardContent}
                            </Link>
                        ) : (
                            <div key={index} className={cardClasses}>
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CourseList;
