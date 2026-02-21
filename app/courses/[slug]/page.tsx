
import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getCourseBySlug } from '@/data/courses';
import Footer from '@/components/Footer/Footer';
import CourseHero from '@/components/CourseHero/CourseHero';
import OverviewSection from '@/components/OverviewSection/OverviewSection';
import ToolsSection from '@/components/ToolsSection/ToolsSection';
import GuideSection from '@/components/GuideSection/GuideSection';
import RoadmapSection from '@/components/RoadmapSection/RoadmapSection';
import MentorsSection from '@/components/MentorsSection/MentorsSection';
import CareerPathsSection from '@/components/CareerPathsSection/CareerPathsSection';
import CertificateSection from '@/components/CertificateSection/CertificateSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import FAQSection from '@/components/FAQSection/FAQSection';
import StickyCTA from '@/components/StickyCTA/StickyCTA';
import FadeIn from '@/components/Animations/FadeIn';

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        return {
            title: 'Course Not Found',
        };
    }

    return {
        title: course.metadata.title,
        description: course.metadata.description,
    };
}

export default async function CoursePage({ params }: Props) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        notFound();
    }

    // Prepare breadcrumbs data
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Our Courses", href: "/courses" },
        { label: course.hero.title, isActive: true }
    ];

    return (
        <main className="w-full bg-[#0a0a0a] text-[#e4e7df] font-sans selection:bg-[#ffc22a] selection:text-black overflow-x-hidden">
            
            {/* 1. HERO SECTION - Immersive & High Impact */}
            <div className="relative z-10">
                <CourseHero
                    title={course.hero.title}
                    description={course.hero.description}
                    bannerText={course.hero.bannerText}
                    breadcrumbs={breadcrumbs}
                    ratingCount={course.hero.ratingCount}
                    learnerCount={course.hero.learnerCount}
                    courseType={course.hero.courseType}
                    duration={course.hero.duration}
                    imageSrc={course.hero.imageSrc}
                    enquiryHref={course.hero.enquiryHref}
                    syllabusHref={course.hero.syllabusHref}
                />
            </div>

            {/* Sticky CTA for Conversion */}
            <StickyCTA 
                title={course.hero.title}
                enquiryHref={course.hero.enquiryHref || "/contact"}
                ratingCount={course.hero.ratingCount}
            />

            {/* 2. OVERVIEW BLOCK - The "First Impression" (Features) */}
            <section className="relative z-20 py-24 md:py-32 bg-[#121212]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30 pointer-events-none" />
                
                <FadeIn>
                    <OverviewSection
                        title={course.overview.title}
                        description={course.overview.description}
                        features={course.overview.features}
                        ctaText={course.overview.ctaText}
                    />
                </FadeIn>
            </section>

            {/* 3. SOCIAL PROOF - Video Testimonials (Full Width Break) */}
            {/* Removed Video Testimonials Section */}

            {/* 4. CURRICULUM BLOCK - The "Meat" (Roadmap + Guide) */}
            <section className="py-24 md:py-32 bg-[#141414] relative">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid gap-24">
                    {/* Roadmap */}
                    <FadeIn delay={0.1}>
                        <RoadmapSection
                            title={course.roadmap.title}
                            description={course.roadmap.description}
                            roadmapData={course.roadmap.phases}
                        />
                    </FadeIn>
                    
                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Mentors */}
                    <FadeIn delay={0.1}>
                        <MentorsSection
                            title={course.mentors.title}
                            description={course.mentors.description}
                            mentors={course.mentors.list}
                        />
                    </FadeIn>

                    {/* Guide / Steps */}
                    <FadeIn delay={0.2}>
                         <GuideSection
                            title={course.guide.title}
                            steps={course.guide.steps}
                            ctaTitle={course.guide.ctaTitle}
                            ctaButtonText={course.guide.ctaButtonText}
                            ctaHref={course.guide.ctaHref}
                        />
                    </FadeIn>
                </div>
            </section>

            {/* 5. TOOLS & VALUE ADD - (Tools + Certificate) */}
            <section className="py-24 md:py-32 bg-[#0F0F0F] relative border-b border-white/5">
                <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
                
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
                    <FadeIn>
                        <ToolsSection
                            title={course.tools.title}
                            description={course.tools.description}
                            tools={course.tools.tools}
                        />
                    </FadeIn>

                    <FadeIn>
                         <CertificateSection
                            title={course.certificate.title}
                            description={course.certificate.description}
                            features={course.certificate.features}
                            roleName={course.certificate.roleName}
                            backgroundColor={course.certificate.backgroundColor}
                        />
                    </FadeIn>
                </div>
            </section>

            {/* 6. CAREER & OUTCOMES */}
            <section className="py-24 md:py-32 bg-[#121212]">
                <FadeIn>
                    <CareerPathsSection
                        title={course.careers.title}
                        subtitle={course.careers.subtitle}
                        description={course.careers.description}
                        careers={course.careers.paths}
                        stats={course.careers.stats}
                    />
                </FadeIn>
            </section>

            {/* 7. REINFORCEMENT - Text Testimonials + FAQ */}
            <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
                 <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
                    <FadeIn>
                        <TestimonialsSection
                            title={course.textTestimonials.title}
                            subtitle={course.textTestimonials.subtitle}
                            testimonials={course.textTestimonials.list}
                        />
                    </FadeIn>

                    <div className="w-full h-px bg-white/5" />

                    <FadeIn>
                        <FAQSection
                            title={course.faqs.title}
                            description={course.faqs.description}
                            faqs={course.faqs.list}
                        />
                    </FadeIn>
                 </div>
            </section>

            {/* 8. FINAL CONVERSION BLOCK */}
            <section className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111111] text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ffc22a] opacity-[0.03] blur-[120px] rounded-full" />
                </div>
                
                <FadeIn direction="up">
                    <div className="max-w-3xl mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Start Your Journey?</h2>
                        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                            Join thousands of successful learners who have transformed their careers with this course.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a 
                                href={course.hero.enquiryHref || "/contact"} 
                                className="w-full sm:w-auto px-10 py-4 bg-[#ffc22a] text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,194,42,0.3)]"
                            >
                                Enroll Now
                            </a>
                            <a 
                                href="/contact" 
                                className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
                            >
                                Talk to Counselor
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </section>

            <Footer />
        </main>
    );
}
