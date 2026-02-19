
import { OverviewFeature, OverviewSkill } from '@/components/OverviewSection/OverviewSection';
import { TestimonialVideo } from '@/components/VideoTestimonials/VideoTestimonials';
import { Tool } from '@/components/ToolsSection/ToolsSection';
import { GuideStep } from '@/components/GuideSection/GuideSection';
import { RoadmapPhase } from '@/components/RoadmapSection/RoadmapSection';
import { Mentor } from '@/components/MentorsSection/MentorsSection';
import { Career } from '@/components/CareerPathsSection/CareerPathsSection';
import { CertificateFeature } from '@/components/CertificateSection/CertificateSection';
import { Testimonial } from '@/components/TestimonialsSection/TestimonialsSection';
import { FAQItem } from '@/components/FAQSection/FAQSection';

export interface CourseData {
    slug: string;
    metadata: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        description: string;
        bannerText: string;
        ratingCount: number;
        learnerCount: string;
        courseType: string;
        duration: string;
        imageSrc: string;
        enquiryHref: string;
        syllabusHref: string;
    };
    overview: {
        title: string;
        description: string;
        features: OverviewFeature[];
        skillsTitle: string;
        skillsDescription: string;
        skills: OverviewSkill[];
        ctaText: string;
    };
    videoTestimonials: TestimonialVideo[];
    tools: {
        title: string;
        description: string;
        tools: Tool[];
    };
    guide: {
        title: string;
        steps: GuideStep[];
        ctaTitle: string;
        ctaButtonText: string;
        ctaHref: string;
    };
    roadmap: {
        title: string;
        description: string;
        phases: RoadmapPhase[];
    };
    mentors: {
        title: string;
        description: string;
        list: Mentor[];
    };
    careers: {
        title: string;
        subtitle: string;
        description: string;
        paths: Career[];
        stats: {
            placementRate: string;
            avgSalary: string;
        };
    };
    certificate: {
        title: string;
        description: string;
        features: CertificateFeature[];
        roleName: string;
        backgroundColor?: string;
    };
    textTestimonials: {
        title: string;
        subtitle: string;
        list: Testimonial[];
    };
    faqs: {
        title: string;
        description: string;
        list: FAQItem[];
    };
}

export const courses: CourseData[] = [
    {
        slug: "ai-augmented-finance",
        metadata: {
            title: "AI Augmented Finance Course | Magnate",
            description: "Master the intersection of Finance and AI. Learn Algorithmic Trading, FinTech, and AI-driven Financial Analysis.",
        },
        hero: {
            title: "AI Augmented Finance",
            description: "The future of finance is here. Master AI, Machine Learning, and Algorithmic Trading to revolutionize the financial industry.",
            bannerText: "Join the FinTech Revolution →",
            ratingCount: 450,
            learnerCount: "800 +",
            courseType: "Online Live",
            duration: "5 Months",
            imageSrc: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop",
            enquiryHref: "/enroll",
            syllabusHref: "/syllabus",
        },
        overview: {
            title: "Finance Meets Future Tech",
            description: "Learn the skills that are redefining Wall Street. From robo-advisors to high-frequency trading, master the tech behind the money.",
            features: [
                { icon: "🤖", text: "AI in Finance" },
                { icon: "📈", text: "Algo Trading" },
                { icon: "🐍", text: "Python for Finance" },
                { icon: "💳", text: "FinTech Innovation" }
            ],
            skillsTitle: "Tech Stack",
            skillsDescription: "A robust curriculum covering the modern financial technology stack.",
            skills: [
                { title: "AI/ML", description: "Machine Learning models for stock prediction" },
                { title: "Trading", description: "Automated & High-Frequency Trading" },
                { title: "Big Data", description: "Financial Data Analysis & Visualization" },
                { title: "Blockchain", description: "DeFi & Smart Contracts basics" }
            ]
        },
        videoTestimonials: [
            {
                id: 1,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                poster: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
                name: "Alex Chen",
                role: "Quant Analyst @ Citadel"
            },
            {
                id: 2,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                poster: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
                name: "Sarah Jones",
                role: "FinTech Product Mgr @ Stripe"
            },
            {
                id: 3,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                poster: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
                name: "David Kim",
                role: "Data Scientist @ JP Morgan"
            }
        ],
        tools: {
            title: "FinTech Toolkit",
            description: "Hands-on experience with the most powerful tools in quantitative finance and data science.",
            tools: [
                { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
                { name: "TensorFlow", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
                { name: "Tableau", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
                { name: "TradingView", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/TradingView_Logo_Block.svg/200px-TradingView_Logo_Block.svg.png", darkModeInvert: true },
                { name: "Jupyter", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" },
                { name: "SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
            ]
        },
        guide: {
            title: "Become a Quant",
            steps: [
                {
                    number: 1,
                    title: "Programming Foundation",
                    description: "Learn Python specifically tailored for financial data analysis and manipulation."
                },
                {
                    number: 2,
                    title: "AI & ML Models",
                    description: "Build predictive models for stock prices, credit risk scoring, and fraud detection."
                },
                {
                    number: 3,
                    title: "Algorithmic Trading",
                    description: "Design, backtest, and deploy automated trading strategies using real market data."
                }
            ],
            ctaTitle: "Ready to innovate?",
            ctaButtonText: "Start Learning",
            ctaHref: "/enroll"
        },
        roadmap: {
            title: "Course Roadmap",
            description: "From Python basics to deploying AI trading bots.",
            phases: [
                {
                    phase: "Phase 1",
                    description: "Financial Data Science",
                    color: "#3B82F6",
                    icon: "📊",
                    items: [
                        { type: 'node', label: 'Python for Finance', status: 'core' },
                        { type: 'node', label: 'Pandas & NumPy', status: 'core' },
                        { type: 'node', label: 'Data Visualization', status: 'tool' },
                        { type: 'checkpoint', label: 'Project: Portfolio Analysis', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 2",
                    description: "Machine Learning in Finance",
                    color: "#8B5CF6",
                    icon: "🧠",
                    items: [
                        { type: 'node', label: 'Regression & Classification', status: 'core' },
                        { type: 'node', label: 'Time Series Forecasting', status: 'core' },
                        { type: 'node', label: 'Sentiment Analysis (NLP)', status: 'tool' },
                        { type: 'checkpoint', label: 'Project: Stock Price Predictor', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 3",
                    description: "Algorithmic Trading",
                    color: "#10B981",
                    icon: "💹",
                    items: [
                        { type: 'node', label: 'Backtesting Strategies', status: 'core' },
                        { type: 'node', label: 'API Integration (Binance/Alpaca)', status: 'core' },
                        { type: 'node', label: 'Risk Management', status: 'tool' },
                        { type: 'checkpoint', label: 'Project: Live Trading Bot', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 4",
                    description: "FinTech & Blockchain",
                    color: "#F59E0B",
                    icon: "🔗",
                    items: [
                        { type: 'node', label: 'DeFi Overview', status: 'core' },
                        { type: 'node', label: 'Smart Contracts (Solidity)', status: 'tool' },
                        { type: 'node', label: 'Robo-Advisors', status: 'core' },
                        { type: 'checkpoint', label: 'Final Capstone Project', status: 'nav' }
                    ]
                }
            ]
        },
        mentors: {
            title: "Learn from Quants & Tech Leads",
            description: "Our mentors come from the intersection of major technology firms and top investment banks.",
            list: [
                {
                    name: "Dr. Arrya Simpson",
                    role: "Head of AI, FinTech Startup",
                    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Stripe",
                    bio: "PhD in Computational Finance. Expert in applying Deep Learning to financial markets."
                },
                {
                    name: "Mark T.",
                    role: "Quant Trader",
                    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Jane Street",
                    bio: "Specializes in high-frequency trading algorithms and market microstructure."
                },
                {
                    name: "Elena R.",
                    role: "Data Science Manager",
                    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Visa",
                    bio: "Leads fraud detection teams using advanced ML techniques."
                }
            ]
        },
        careers: {
            title: "High-Tech Financial Careers",
            subtitle: "FUTURE PROOF YOUR CAREER",
            description: "The highest paying roles in finance require these exact skills.",
            paths: [
                {
                    title: 'Quantitative Analyst',
                    salary: 150,
                    growth: 25,
                    demand: 'high',
                    skills: ['Math', 'Python', 'Modeling'],
                    companies: [
                        { name: 'Two Sigma', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Two_Sigma_Logo.svg/200px-Two_Sigma_Logo.svg.png' },
                        { name: 'D. E. Shaw', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/D._E._Shaw_%26_Co._logo.svg/200px-D._E._Shaw_%26_Co._logo.svg.png' }
                    ],
                    color: '#3B82F6',
                    featured: true
                },
                {
                    title: 'FinTech Engineer',
                    salary: 130,
                    growth: 30,
                    demand: 'critical',
                    skills: ['Blockchain', 'APIs', 'Security'],
                    companies: [
                        { name: 'Coinbase', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase_Logo_2013-2016.svg/200px-Coinbase_Logo_2013-2016.svg.png' },
                        { name: 'Robinhood', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Robinhood_Logo.svg' }
                    ],
                    color: '#10B981',
                    featured: true
                },
                {
                    title: 'Financial Data Scientist',
                    salary: 120,
                    growth: 20,
                    demand: 'moderate',
                    skills: ['SQL', 'Tableau', 'Big Data'],
                    companies: [
                        { name: 'Bloomberg', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Bloomberg_Terminal_Logo.svg' }
                    ],
                    color: '#8B5CF6'
                }
            ],
            stats: {
                placementRate: "95%",
                avgSalary: "$120K"
            }
        },
        certificate: {
            title: "AI Finance Certification",
            description: "Prove your dual-competency in Finance and Artificial Intelligence.",
            features: [
                {
                    title: "AI Finance Specialist",
                    description: "Validate your expertise in merging financial theory with modern AI practices."
                },
                {
                    title: "Hands-on Projects",
                    description: "Portfolio including a live trading bot and a risk assessment model."
                },
                {
                    title: "Global Recognition",
                    description: "Recognized by top FinTech companies and quantitative funds."
                }
            ],
            roleName: "AI Financial Specialist",
            backgroundColor: "#3B82F6"
        },
        textTestimonials: {
            title: "Student Stories",
            subtitle: "See what our graduates are building.",
            list: [
                {
                    id: 1,
                    name: "Carlos M.",
                    role: "Dev at Revolut",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "Magnate's course bridged the gap between my finance degree and the coding skills I needed for FinTech."
                },
                {
                    id: 2,
                    name: "Sophia L.",
                    role: "Analyst at Citadel",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "The algorithmic trading module is top-notch. I deployed my first bot within weeks of finishing the section."
                }
            ]
        },
        faqs: {
            title: "FAQs",
            description: "Common questions about our AI Augmented Finance program.",
            list: [
                {
                    question: "Do I need coding experience?",
                    answer: "Basic knowledge is helpful, but we start Python from scratch with a focus on financial applications."
                },
                {
                    question: "What is the difference between this and the standard Finance course?",
                    answer: "This course focuses on the TECHNOLOGY side of finance (AI, ML, Algo Trading, Blockchain), whereas the standard Finance course focuses on traditional Investment Banking, Accounting, and Valuation."
                },
                {
                    question: "Is there math involved?",
                    answer: "Yes, Quantitative Finance involves statistics and calculus, but we teach the practical application of these concepts."
                },
                {
                    question: "What hardware do I need?",
                    answer: "A standard laptop (Windows/Mac) is sufficient. For deep learning models, we use cloud-based notebooks like Google Colab."
                }
            ]
        }
    },
    {
        slug: "ai-automation",
        metadata: {
            title: "AI Automation Course | Magnate",
            description: "Learn to build AI Agents, Automate Workflows, and scale businesses without coding. Master Zapier, Make, and LLMs.",
        },
        hero: {
            title: "AI Automation & Agents",
            description: "Work smarter, not harder. Learn to build AI workforces that run on autopilot using No-Code tools.",
            bannerText: "Start your AI Automation Agency today →",
            ratingCount: 650,
            learnerCount: "1200 +",
            courseType: "Online Live",
            duration: "3 Months",
            imageSrc: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
            enquiryHref: "/enroll",
            syllabusHref: "/syllabus",
        },
        overview: {
            title: "The No-Code AI Revolution",
            description: "Why hire 10 people when 1 person with AI can do the same work? Master the tools that are reshaping the workforce.",
            features: [
                { icon: "🤖", text: "Build AI Agents" },
                { icon: "⚡", text: "No-Code Autos" },
                { icon: "🔗", text: "Integrate APIs" },
                { icon: "💼", text: "Freelance Ready" }
            ],
            skillsTitle: "What You'll Build",
            skillsDescription: "Real-world automations that save time and money.",
            skills: [
                { title: "Workflow Automation", description: "Connect apps to work on autopilot" },
                { title: "LLM Engineering", description: "Prompt Engineering & RAG basics" },
                { title: "Chatbots", description: "Build custom AI assistants" },
                { title: "Business Logic", description: "Audit & optimize business processes" }
            ],
            ctaText: "See Projects"
        },
        videoTestimonials: [
            {
                id: 1,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                poster: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
                name: "Tom Harris",
                role: "AI Automation Agency Owner"
            },
            {
                id: 2,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                poster: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
                name: "Linda M.",
                role: "Operations Manager"
            },
            {
                id: 3,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                poster: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
                name: "Gary V.",
                role: "Freelance Automator"
            }
        ],
        tools: {
            title: "Automation Stack",
            description: "Master the visual builders that connect the internet.",
            tools: [
                { name: "Zapier", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/200px-Zapier_logo.svg.png", darkModeInvert: true },
                { name: "Make.com", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Make_Logo.svg/1200px-Make_Logo.svg.png" },
                { name: "OpenAI API", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/200px-OpenAI_Logo.svg.png", darkModeInvert: true },
                { name: "Voiceflow", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Voiceflow_Logo.png" },
                { name: "Airtable", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/200px-Airtable_Logo.svg.png" },
                { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/200px-Slack_icon_2019.svg.png" },
            ]
        },
        guide: {
            title: "Your Automation Journey",
            steps: [
                {
                    number: 1,
                    title: "Identify Bottlenecks",
                    description: "Learn to spot repetitive tasks in any business that can be handed over to AI."
                },
                {
                    number: 2,
                    title: "Build Workflows",
                    description: "Use visual builders like Make and Zapier to create complex logic without writing code."
                },
                {
                    number: 3,
                    title: "Deploy Agents",
                    description: "Create autonomous AI agents that can read emails, update CRMs, and generate reports 24/7."
                }
            ],
            ctaTitle: "Stop doing busy work",
            ctaButtonText: "Automate Now",
            ctaHref: "/enroll"
        },
        roadmap: {
            title: "Learning Path",
            description: "From simple Zaps to autonomous AI Agents.",
            phases: [
                {
                    phase: "Phase 1",
                    description: "Automation Basics",
                    color: "#F97316",
                    icon: "⚡",
                    items: [
                        { type: 'node', label: 'Triggers & Actions', status: 'core' },
                        { type: 'node', label: 'Zapier Fundamentals', status: 'core' },
                        { type: 'node', label: 'Airtable Databases', status: 'tool' },
                        { type: 'checkpoint', label: 'First Auto-Email Bot', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 2",
                    description: "Advanced Logic (Make)",
                    color: "#8B5CF6",
                    icon: "🍇",
                    items: [
                        { type: 'node', label: 'Make.com Scenarios', status: 'core' },
                        { type: 'node', label: 'JSON & Webhooks', status: 'core' },
                        { type: 'node', label: 'Error Handling', status: 'tool' },
                        { type: 'checkpoint', label: 'CRM Sync Automation', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 3",
                    description: "AI Integration",
                    color: "#10B981",
                    icon: "🤖",
                    items: [
                        { type: 'node', label: 'ChatGPT API Calls', status: 'core' },
                        { type: 'node', label: 'Building Custom GPTs', status: 'core' },
                        { type: 'node', label: 'Voiceflow Chatbots', status: 'tool' },
                        { type: 'checkpoint', label: 'customer Support AI', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 4",
                    description: "Business & Agency",
                    color: "#3B82F6",
                    icon: "💼",
                    items: [
                        { type: 'node', label: 'Pricing your Services', status: 'core' },
                        { type: 'node', label: 'Cold Outreach', status: 'core' },
                        { type: 'node', label: 'Client Onboarding', status: 'tool' },
                        { type: 'checkpoint', label: 'Launch Your Agency', status: 'nav' }
                    ]
                }
            ]
        },
        mentors: {
            title: "Taught by Builders",
            description: "Learn from agency owners who are actively selling automation services.",
            list: [
                {
                    name: "Brett Malinowski",
                    role: "AI Agency Founder",
                    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Godmode HQ",
                    bio: "Scaled an AI automation agency to $50k/mo. Expert in replacing human labor with AI systems."
                },
                {
                    name: "Sarah Connors",
                    role: "No-Code Architect",
                    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Freelance",
                    bio: "Top Rated Plus Upwork freelancer specializing in complex Make.com integrations."
                },
                {
                    name: "David Kim",
                    role: "Prompt Engineer",
                    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
                    companyName: "OpenAI (Ex)",
                    bio: "Teaches the art of crafting perfect prompts to get reliable outputs from LLMs."
                }
            ]
        },
        careers: {
            title: "New Age Careers",
            subtitle: "BECOME UNREPLACEABLE",
            description: "Prompt Engineering and Automation are the most valuable skills of this decade.",
            paths: [
                {
                    title: 'Automation Engineer',
                    salary: 110,
                    growth: 50,
                    demand: 'critical',
                    skills: ['Make', 'Python', 'APIs'],
                    companies: [
                        { name: 'Zapier', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/200px-Zapier_logo.svg.png' },
                        { name: 'ClickUp', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/ClickUp_Logo.svg/200px-ClickUp_Logo.svg.png' }
                    ],
                    color: '#F97316',
                    featured: true
                },
                {
                    title: 'AI Consultant',
                    salary: 140,
                    growth: 40,
                    demand: 'high',
                    skills: ['Strategy', 'Implementation', 'Audit'],
                    companies: [
                        { name: 'McKinsey', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/McKinsey_%26_Company_Logo.svg/200px-McKinsey_%26_Company_Logo.svg.png' }
                    ],
                    color: '#10B981',
                    featured: true
                },
                {
                    title: 'Freelance Automator',
                    salary: 90,
                    growth: 25,
                    demand: 'high',
                    skills: ['Sales', 'Delivery', 'Support'],
                    companies: [
                        { name: 'Upwork', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Upwork-logo.svg/200px-Upwork-logo.svg.png' }
                    ],
                    color: '#3B82F6',
                    featured: true
                }
            ],
            stats: {
                placementRate: "92%",
                avgSalary: "$100K"
            }
        },
        certificate: {
            title: "Automation Architect",
            description: "Certification proving your ability to design and build complex AI systems.",
            features: [
                {
                    title: "Automation Expert",
                    description: "Certified proficiency in Zapier, Make.com, and AI Agent development."
                },
                {
                    title: "Agency Ready",
                    description: "Curriculum designed to help you start your own AI Automation Agency (AAA)."
                },
                {
                    title: "Practical Projects",
                    description: "Build a portfolio of real automated systems before you graduate."
                }
            ],
            roleName: "Automation Engineer",
            backgroundColor: "#F97316"
        },
        textTestimonials: {
            title: "Success Stories",
            subtitle: "Businesses transformed by our students.",
            list: [
                {
                    id: 1,
                    name: "Jason Derulo (Not the singer)",
                    role: "Agency Owner",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "I automated my entire lead gen process. This course paid for itself in the first week."
                },
                {
                    id: 2,
                    name: "Maria G.",
                    role: "HR Manager",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "We reduced our manual data entry by 90%. My team now focuses on strategy instead of spreadsheets."
                }
            ]
        },
        faqs: {
            title: "Common Questions",
            description: "Answers about the AI Automation course.",
            list: [
                {
                    question: "Do I need to know how to code?",
                    answer: "No! 90% of the course relies on No-Code tools. We touch on very basic Python for advanced customizations, but it's not required."
                },
                {
                    question: "Is this course relevant for business owners?",
                    answer: "Extremely. Business owners take this course to save 20+ hours a week by automating their busy work."
                },
                {
                    question: "What tools do I need to pay for?",
                    answer: "Zapier and Make have free tiers which are enough for learning. For production, you might need paid plans (~$20/mo)."
                },
                {
                    question: "Can I make money with this?",
                    answer: "Yes, 'AI Automation Agency' is one of the hottest business models right now. Businesses are desperate for automation services."
                }
            ]
        }
    },
    {
        slug: "data-analytics",
        metadata: {
            title: "Data Analytics (ML & AI) Course | Magnate",
            description: "From SQL to Deep Learning. Master Data Science with Python, Machine Learning, and AI.",
        },
        hero: {
            title: "Data Analytics & AI",
            description: "The sexiest job of the 21st century. Learn to derive insights from data and build intelligent systems to solve complex problems.",
            bannerText: "Join the Data Revolution →",
            ratingCount: 1800,
            learnerCount: "4000 +",
            courseType: "Online Live",
            duration: "8 Months",
            imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            enquiryHref: "/enroll",
            syllabusHref: "/syllabus",
        },
        overview: {
            title: "Decode the Future",
            description: "Data is the new oil. Companies are hiring aggressively for professionals who can clean, analyze, and interpret data.",
            features: [
                { icon: "🔢", text: "Big Data Processing" },
                { icon: "🤖", text: "Machine Learning" },
                { icon: "📉", text: "Predictive Analytics" },
                { icon: "🧠", text: "Deep Learning" }
            ],
            skillsTitle: "Full Stack Data Science",
            skillsDescription: "From Data Engineering to Model Deployment, we cover the entire pipeline.",
            skills: [
                { title: "Python Programming", description: "Pandas, NumPy, Scikit-learn" },
                { title: "Data Visualization", description: "Tableau, PowerBI & Matplotlib" },
                { title: "Database Mgmt", description: "SQL (MySQL/PostgreSQL) & NoSQL" },
                { title: "AI Models", description: "Building & Deploying ML models" }
            ],
            ctaText: "Download Curriculum"
        },
        videoTestimonials: [
            {
                id: 1,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                poster: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
                name: "Priya K.",
                role: "Data Scientist @ Microsoft"
            },
            {
                id: 2,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                poster: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
                name: "Arjun Singh",
                role: "ML Engineer @ Amazon"
            },
            {
                id: 3,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                poster: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
                name: "Emily R.",
                role: "Data Analyst @ Fractal"
            }
        ],
        tools: {
            title: "Full Stack Data Science",
            description: "From Data Engineering to Model Deployment, we cover the entire pipeline.",
            tools: [
                { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
                { name: "SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
                { name: "Tableau", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
                { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
                { name: "Jupyter", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" },
                { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
            ]
        },
        guide: {
            title: "Decode the Future",
            steps: [
                {
                    number: 1,
                    title: "Data Handling",
                    description: "Learn to collect, clean, and manipulate massive datasets using Python and SQL."
                },
                {
                    number: 2,
                    title: "Visual Storytelling",
                    description: "Create compelling dashboards that convert raw numbers into actionable business insights."
                },
                {
                    number: 3,
                    title: "Predictive AI",
                    description: "Develop algorithms that can predict future trends, customer behavior, and market shifts."
                }
            ],
            ctaTitle: "Ready to Innovate?",
            ctaButtonText: "Enroll Now",
            ctaHref: "/enroll"
        },
        roadmap: {
            title: "Course Roadmap",
            description: "From SQL Queries to Deep Learning Neural Networks.",
            phases: [
                {
                    phase: "Phase 1",
                    description: "Data Analysis Core",
                    color: "#EAB308",
                    icon: "📊",
                    items: [
                        { type: 'node', label: 'Advanced Excel', status: 'core' },
                        { type: 'node', label: 'SQL for Data Science', status: 'core' },
                        { type: 'node', label: 'PowerBI/Tableau', status: 'tool' },
                        { type: 'checkpoint', label: 'Sales Dashboard Project', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 2",
                    description: "Python & Statistics",
                    color: "#3B82F6",
                    icon: "🐍",
                    items: [
                        { type: 'node', label: 'Python (Pandas/NumPy)', status: 'core' },
                        { type: 'node', label: 'Exploratory Data Analysis', status: 'core' },
                        { type: 'node', label: 'Statistical Inference', status: 'core' },
                        { type: 'checkpoint', label: 'EDA Case Study', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 3",
                    description: "Machine Learning (ML)",
                    color: "#10B981",
                    icon: "🤖",
                    items: [
                        { type: 'node', label: 'Supervised Learning', status: 'core' },
                        { type: 'node', label: 'Unsupervised Learning', status: 'core' },
                        { type: 'node', label: 'Model Evaluation', status: 'tool' },
                        { type: 'checkpoint', label: 'Churn Prediction Model', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 4",
                    description: "Deep Learning & AI",
                    color: "#A855F7",
                    icon: "🧠",
                    items: [
                        { type: 'node', label: 'Neural Networks (Keras)', status: 'core' },
                        { type: 'node', label: 'Computer Vision Basics', status: 'tool' },
                        { type: 'node', label: 'NLP (Text Mining)', status: 'core' },
                        { type: 'checkpoint', label: 'AI Capstone Project', status: 'nav' }
                    ]
                }
            ]
        },
        mentors: {
            title: "Learn from Data Leaders",
            description: "Mentors from top tech companies and research labs.",
            list: [
                {
                    name: "Dr. Sameer Khan",
                    role: "Principal Data Scientist",
                    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Google",
                    bio: "10+ years in AI research. Published author on deep learning optimization."
                },
                {
                    name: "Ananya Gupta",
                    role: "Analytics Lead",
                    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Walmart",
                    bio: "Expert in retail analytics and supply chain optimization using Big Data."
                },
                {
                    name: "Chris Evans",
                    role: "ML Engineer",
                    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Spotify",
                    bio: "Specializes in recommendation systems and audio analysis algorithms."
                }
            ]
        },
        careers: {
            title: "Data Science Careers",
            subtitle: "HIGH DEMAND ROLES",
            description: "Data Scientists are among the highest paid professionals globally.",
            paths: [
                {
                    title: 'Data Scientist',
                    salary: 130,
                    growth: 30,
                    demand: 'high',
                    skills: ['Python', 'Stats', 'ML'],
                    companies: [
                        { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
                        { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png' }
                    ],
                    color: '#3B82F6',
                    featured: true
                },
                {
                    title: 'Data Analyst',
                    salary: 85,
                    growth: 20,
                    demand: 'critical',
                    skills: ['SQL', 'Tableau', 'Excel'],
                    companies: [
                        { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/200px-Deloitte.svg.png' },
                        { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/200px-Accenture.svg.png' }
                    ],
                    color: '#EAB308',
                    featured: true
                },
                {
                    title: 'ML Engineer',
                    salary: 150,
                    growth: 40,
                    demand: 'critical',
                    skills: ['Deep Learning', 'Cloud', 'DevOps'],
                    companies: [
                        { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/200px-Tesla_Motors.svg.png' }
                    ],
                    color: '#A855F7'
                }
            ],
            stats: {
                placementRate: "96%",
                avgSalary: "$95K"
            }
        },
        certificate: {
            title: "Data Science Specialization",
            description: "A comprehensive certification covering the full data science lifecycle.",
            features: [
                {
                    title: "Certified Data Scientist",
                    description: "Industry-recognized certification valid for DS and Analyst roles."
                },
                {
                    title: "Project Portfolio",
                    description: "Graduate with a GitHub portfolio of 5+ end-to-end ML projects."
                },
                {
                    title: "Hackathon Ready",
                    description: "Skills to compete and win in global data science competitions like Kaggle."
                }
            ],
            roleName: "Data Scientist",
            backgroundColor: "#3B82F6"
        },
        textTestimonials: {
            title: "Student Success",
            subtitle: "From Beginners to Data Professionals.",
            list: [
                {
                    id: 1,
                    name: "Vikram S.",
                    role: "Analyst @ MuSigma",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "I didn't know how to code. This course took me from Excel basics to building Neural Networks in 6 months."
                },
                {
                    id: 2,
                    name: "Samantha J.",
                    role: "Business Analyst @ Amex",
                    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "The Tableau and PowerBI modules are fantastic. They helped me automate my reporting at work."
                }
            ]
        },
        faqs: {
            title: "Frequently Asked Questions",
            description: "About the Data Analytics & AI Course.",
            list: [
                {
                    question: "Is math important for this course?",
                    answer: "You need a basic understanding of high school math. We teach the specific Statistics and Probability concepts needed for Data Science."
                },
                {
                    question: "Python or R? What do you teach?",
                    answer: "We focus on Python as it is the industry standard for Machine Learning and AI. However, the concepts apply to R as well."
                },
                {
                    question: "What if I miss a live class?",
                    answer: "All classes are recorded and available on your dashboard for lifetime access."
                },
                {
                    question: "Do you help with GitHub profiles?",
                    answer: "Yes, a dedicated module covers version control with Git and building a professional GitHub portfolio to showcase to recruiters."
                }
            ]
        }
    },
    {
        slug: "digital-marketing",
        metadata: {
            title: "3D Digital Marketing Course | Magnate",
            description: "Future-proof your marketing career. Learn SEO, Social Media, plus 3D Content Creation and AR Advertising.",
        },
        hero: {
            title: "3D Digital Marketing",
            description: "Don't just run ads—create immersive experiences. Master SEO, Performance Marketing, and 3D Content Creation.",
            bannerText: "Learn to create Viral 3D Ads →",
            ratingCount: 950,
            learnerCount: "2000 +",
            courseType: "Online Live",
            duration: "6 Months",
            imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            enquiryHref: "/enroll",
            syllabusHref: "/syllabus",
        },
        overview: {
            title: "Marketing in the Metaverse Era",
            description: "Traditional marketing is saturated. Stand out by combining data-driven strategies with cutting-edge 3D visuals.",
            features: [
                { icon: "🚀", text: "3D Ad Creatives" },
                { icon: "📈", text: "Performance Mktg" },
                { icon: "🕶️", text: "AR/VR Campaigns" },
                { icon: "🔍", text: "Advanced SEO" }
            ],
            skillsTitle: "Hybrid Skillset",
            skillsDescription: "Merge the analytical (Data/SEO) with the creative (3D/Design).",
            skills: [
                { title: "Digital Strategy", description: "Integrated marketing funnels" },
                { title: "Content Creation", description: "3D product renders & animation" },
                { title: "Paid Ads", description: "Google, Meta & LinkedIn Ads" },
                { title: "Analytics", description: "Data-driven decision making" }
            ],
            ctaText: "View Syllabus"
        },
        videoTestimonials: [
            {
                id: 1,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                poster: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
                name: "Kevin D.",
                role: "Marketing Manager @ Nike"
            },
            {
                id: 2,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                poster: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
                name: "Anita R.",
                role: "Freelance 3D Marketer"
            },
            {
                id: 3,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                poster: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop",
                name: "Jason S.",
                role: "Growth Hacker @ TechStartup"
            }
        ],
        tools: {
            title: "The Modern Marketer's Stack",
            description: "Master the tools for both performance and creativity.",
            tools: [
                { name: "Google Ads", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/200px-Google_Ads_logo.svg.png", darkModeInvert: true },
                { name: "Meta Ads", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png", darkModeInvert: true },
                { name: "Blender", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/200px-Blender_logo_no_text.svg.png" },
                { name: "Canva", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/200px-Canva_icon_2021.svg.png" },
                { name: "Semrush", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Semrush_logo.svg/200px-Semrush_logo.svg.png", darkModeInvert: true },
                { name: "Spline", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spline_logo.png/200px-Spline_logo.png" },
            ]
        },
        guide: {
            title: "Marketing Mastery",
            steps: [
                {
                    number: 1,
                    title: "Marketing Foundation",
                    description: "Understand the core principles of digital marketing, consumer psychology, and brand building."
                },
                {
                    number: 2,
                    title: "3D & Interactive Content",
                    description: "Learn to create stunning 3D assets and AR filters that drive higher engagement than traditional images."
                },
                {
                    number: 3,
                    title: "Campaign Mastery",
                    description: "Launch, optimize, and scale profitable ad campaigns across Google, Social Media, and the Metaverse."
                }
            ],
            ctaTitle: "Start Creating",
            ctaButtonText: "Join Now",
            ctaHref: "/enroll"
        },
        roadmap: {
            title: "Course Roadmap",
            description: "From Basic SEO to Immersive 3D Campaigns.",
            phases: [
                {
                    phase: "Phase 1",
                    description: "Digital Foundations",
                    color: "#EC4899",
                    icon: "📣",
                    items: [
                        { type: 'node', label: 'SEO & Content Marketing', status: 'core' },
                        { type: 'node', label: 'Social Media Strategy', status: 'core' },
                        { type: 'node', label: 'Graphic Design (Canva/Ps)', status: 'tool' },
                        { type: 'checkpoint', label: 'Live Blog/Page Launch', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 2",
                    description: "3D Content Creation",
                    color: "#8B5CF6",
                    icon: "🧊",
                    items: [
                        { type: 'node', label: 'Blender Basics', status: 'core' },
                        { type: 'node', label: 'Product Rendering', status: 'core' },
                        { type: 'node', label: 'Web 3D (Spline/Three.js concept)', status: 'tool' },
                        { type: 'checkpoint', label: '3D Ad Creative Project', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 3",
                    description: "Performance Marketing",
                    color: "#3B82F6",
                    icon: "🚀",
                    items: [
                        { type: 'node', label: 'Google Ads (Search/Shopping)', status: 'core' },
                        { type: 'node', label: 'Fb/Insta Ads Manager', status: 'core' },
                        { type: 'node', label: 'Analytics & Attribution', status: 'tool' },
                        { type: 'checkpoint', label: 'Live Campaign (Budget Provided)', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 4",
                    description: "Future Tech",
                    color: "#10B981",
                    icon: "🕶️",
                    items: [
                        { type: 'node', label: 'AR Filters (Spark AR)', status: 'core' },
                        { type: 'node', label: 'Metaverse Marketing', status: 'tool' },
                        { type: 'node', label: 'AI Copywriting', status: 'core' },
                        { type: 'checkpoint', label: 'Final Portfolio Review', status: 'nav' }
                    ]
                }
            ]
        },
        mentors: {
            title: "Expert Marketers",
            description: "Learn from creative directors and growth hackers.",
            list: [
                {
                    name: "Jessica Miller",
                    role: "Creative Director",
                    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Ogilvy",
                    bio: "Award-winning creative director specializing in immersive brand experiences and AR campaigns."
                },
                {
                    name: "David Chen",
                    role: "Growth Lead",
                    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Shopify",
                    bio: "Expert in E-commerce growth hacking and performance marketing scale-up."
                },
                {
                    name: "Sarah T.",
                    role: "3D Artist & Marketer",
                    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Freelance",
                    bio: "Teaches the workflow of creating viral 3D product animations for social media ads."
                }
            ]
        },
        careers: {
            title: "Marketing Careers",
            subtitle: "CREATIVE & ANALYTICAL",
            description: "Modern marketing roles require a blend of tech and creativity.",
            paths: [
                {
                    title: 'Digital Marketing Mgr',
                    salary: 90,
                    growth: 20,
                    demand: 'high',
                    skills: ['Strategy', 'Analytics', 'Budgeting'],
                    companies: [
                        { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
                        { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/200px-Spotify_logo_without_text.svg.png' }
                    ],
                    color: '#EC4899',
                    featured: true
                },
                {
                    title: 'Creative Technologist',
                    salary: 110,
                    growth: 40,
                    demand: 'high',
                    skills: ['3D Design', 'AR/VR', 'Marketing'],
                    companies: [
                        { name: 'Snapchat', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/200px-Snapchat_logo.svg.png' },
                        { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png' }
                    ],
                    color: '#8B5CF6',
                    featured: true
                },
                {
                    title: 'SEO Specialist',
                    salary: 75,
                    growth: 15,
                    demand: 'moderate',
                    skills: ['Technical SEO', 'Content', 'Link Building'],
                    companies: [
                        { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/HubSpot_Logo.svg/200px-HubSpot_Logo.svg.png' }
                    ],
                    color: '#3B82F6'
                }
            ],
            stats: {
                placementRate: "94%",
                avgSalary: "$85K"
            }
        },
        certificate: {
            title: "3D Marketing Specialist",
            description: "Proof of your advanced marketing capabilities.",
            features: [
                {
                    title: "3D Marketing Expert",
                    description: "Certified in both traditional digital marketing and 3D/AR content creation."
                },
                {
                    title: "Platform Certified",
                    description: "Preparation for Google Ads and Meta Blueprint certifications."
                },
                {
                    title: "Portfolio Ready",
                    description: "Graduate with a stunning portfolio of live campaigns and 3D assets."
                }
            ],
            roleName: "Digital Marketer",
            backgroundColor: "#EC4899"
        },
        textTestimonials: {
            title: "Success Stories",
            subtitle: "What our students say.",
            list: [
                {
                    id: 1,
                    name: "Tara W.",
                    role: "Brand Manager @ Dior",
                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "The 3D modules set this course apart. I learned to create product visualizations that increased our ad CTR by 200%."
                },
                {
                    id: 2,
                    name: "Mike L.",
                    role: "Agency Owner",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "Comprehensive and futuristic. If you want to stay ahead of the curve in marketing, this is the course."
                }
            ]
        },
        faqs: {
            title: "FAQs",
            description: "Common questions about the Digital Marketing course.",
            list: [
                {
                    question: "Why 3D Digital Marketing?",
                    answer: "The industry is moving towards immersive content. 3D and AR ads perform significantly better than static images. This course future-proofs your skills."
                },
                {
                    question: "Is this course hard for non-designers?",
                    answer: "No. We teach Blender and design tools from scratch, focusing on what's needed for marketing, not complex character modeling."
                },
                {
                    question: "Do you cover traditional marketing too?",
                    answer: "Absolutely. 70% of the course covers core digital marketing (SEO, Ads, Strategy), and 30% focuses on next-gen content creation (3D, AR)."
                },
                {
                    question: "What software will I learn?",
                    answer: "You will master Google Ads, Meta Ads Manager, Google Analytics, Blender (for 3D), Canva, and Spark AR."
                }
            ]
        }
    },
    {
        slug: "finance",
        metadata: {
            title: "Finance & Investment Banking Course | Magnate",
            description: "Master financial modeling, valuation, and investment banking with our comprehensive job-oriented course.",
        },
        hero: {
            title: "Investment Banking & Finance",
            description: "Become a top 1% finance professional. Master financial modeling, valuation, and exam prep for CFA/FRM with industry experts.",
            bannerText: "Enroll now & get access to Bloomberg Terminal Training →",
            ratingCount: 850,
            learnerCount: "1.5K +",
            courseType: "Online / Hybrid",
            duration: "6 Months",
            imageSrc: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop",
            enquiryHref: "/enroll",
            syllabusHref: "/syllabus",
        },
        overview: {
            title: "Launch Your Career on Wall Street",
            description: "A comprehensive program designed to take you from a novice to a job-ready finance professional. Learn by doing with real-world case studies.",
            features: [
                { icon: "📊", text: "100+ Financial Models" },
                { icon: "💼", text: "Live Deal Simulations" },
                { icon: "🎓", text: "CFA/FRM Aligned" },
                { icon: "🤝", text: "Placement with Top Banks" }
            ],
            skillsTitle: "Core Competencies",
            skillsDescription: "Gain the technical skills and practical knowledge required by top financial firms.",
            skills: [
                { title: "Modeling", description: "DCF, LBO, M&A Models" },
                { title: "Analysis", description: "Financial Statement Analysis" },
                { title: "Valuation", description: "Relative & Intrinsic Valuation" },
                { title: "Tools", description: "Excel, PowerPoint, Bloomberg" }
            ],
            ctaText: "Download Syllabus"
        },
        videoTestimonials: [
            {
                id: 1,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                poster: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop",
                name: "James Wilson",
                role: "Analyst @ Goldman Sachs"
            },
            {
                id: 2,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                poster: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
                name: "Priya Sharma",
                role: "Associate @ JP Morgan"
            },
            {
                id: 3,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                poster: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
                name: "Robert Chang",
                role: "Equity Research @ Morgan Stanley"
            }
        ],
        tools: {
            title: "Financial Toolkit",
            description: "Master the tools used by investment bankers worldwide.",
            tools: [
                { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
                { name: "PowerPoint", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg" },
                { name: "Bloomberg", icon: "https://upload.wikimedia.org/wikipedia/commons/6/69/Bloomberg_Terminal_Logo.svg", darkModeInvert: true },
                { name: "Tableau", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
                { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
                { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
            ]
        },
        guide: {
            title: "Path to Wall Street",
            steps: [
                {
                    number: 1,
                    title: "Financial Foundations",
                    description: "Master accounting principles, financial statements, and core finance concepts used in investment banking."
                },
                {
                    number: 2,
                    title: "Advanced Modeling",
                    description: "Build complex financial models from scratch, including Discounted Cash Flow (DCF), LBOs, and M&A models."
                },
                {
                    number: 3,
                    title: "Deal Execution",
                    description: "Learn the art of deal-making, pitch deck creation, and simulated transactions with industry experts."
                }
            ],
            ctaTitle: "Start Your Career",
            ctaButtonText: "Apply Now",
            ctaHref: "/enroll"
        },
        roadmap: {
            title: "Course Roadmap",
            description: "From Basics to Boardroom Presentations.",
            phases: [
                {
                    phase: "Phase 1",
                    description: "Core Accounting & Excel",
                    color: "#16A34A",
                    icon: "📊",
                    items: [
                        { type: 'node', label: 'Advanced Excel', status: 'core' },
                        { type: 'node', label: 'Financial Statement Analysis', status: 'core' },
                        { type: 'node', label: 'Accounting Standards (GAAP/IFRS)', status: 'core' },
                        { type: 'checkpoint', label: 'Project: 3-Statement Model', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 2",
                    description: "Valuation & Modeling",
                    color: "#EA580C",
                    icon: "📈",
                    items: [
                        { type: 'node', label: 'DCF Valuation', status: 'core' },
                        { type: 'node', label: 'Relative Valuation (Comps)', status: 'core' },
                        { type: 'node', label: 'Sensitivity Analysis', status: 'tool' },
                        { type: 'checkpoint', label: 'Project: Company Valuation', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 3",
                    description: "Investment Banking",
                    color: "#2563EB",
                    icon: "🏦",
                    items: [
                        { type: 'node', label: 'Mergers & Acquisitions (M&A)', status: 'core' },
                        { type: 'node', label: 'Leveraged Buyouts (LBO)', status: 'core' },
                        { type: 'node', label: 'Pitch Books & Decks', status: 'tool' },
                        { type: 'checkpoint', label: 'Project: M&A Pitch Deck', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 4",
                    description: "Career Prep",
                    color: "#9333EA",
                    icon: "🎓",
                    items: [
                        { type: 'node', label: 'Resume & LinkedIn', status: 'core' },
                        { type: 'node', label: 'Technical Interviews', status: 'core' },
                        { type: 'node', label: 'Mock Interviews', status: 'tool' },
                        { type: 'checkpoint', label: 'Final Placement Drive', status: 'nav' }
                    ]
                }
            ]
        },
        mentors: {
            title: "Wall Street Veterans",
            description: "Learn from investment bankers and private equity professionals.",
            list: [
                {
                    name: "Vikram Malhotra",
                    role: "Vice President, Goldman Sachs",
                    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
                    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg",
                    bio: "Over 10 years of experience in Investment Banking and M&A. Mentored 500+ students to break into top-tier banks."
                },
                {
                    name: "Sarah Lee",
                    role: "Associate, Blackstone",
                    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Blackstone",
                    bio: "Specializes in Private Equity and Real Estate investments. Expert in LBO modeling and deal structuring."
                },
                {
                    name: "Rahul Mehta",
                    role: "CFA, Portfolio Manager",
                    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Fidelity",
                    bio: "CFA Charterholder with deep expertise in Asset Management and Equity Research. Passionate about financial education."
                }
            ]
        },
        careers: {
            title: "Finance Careers",
            subtitle: "PRESTIGIOUS ROLES",
            description: "Investment Banking and PE roles are highly competitive and lucrative.",
            paths: [
                {
                    title: 'Investment Banker',
                    salary: 120,
                    growth: 22,
                    demand: 'high',
                    skills: ['Valuation', 'M&A', 'Modeling'],
                    companies: [
                        { name: 'J.P. Morgan', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/JPMorgan_Chase.svg/200px-JPMorgan_Chase.svg.png' },
                        { name: 'Citi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citigroup_Logo.svg/200px-Citigroup_Logo.svg.png' }
                    ],
                    color: '#16A34A',
                    featured: true
                },
                {
                    title: 'Private Equity Analyst',
                    salary: 140,
                    growth: 18,
                    demand: 'critical',
                    skills: ['LBO', 'Due Diligence', 'Deal Sourcing'],
                    companies: [
                        { name: 'Blackstone', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_Blackstone_Group_logo.svg/200px-The_Blackstone_Group_logo.svg.png' },
                        { name: 'KKR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/KKR_logo.svg/200px-KKR_logo.svg.png' }
                    ],
                    color: '#EA580C',
                    featured: true
                },
                {
                    title: 'Equity Research Associate',
                    salary: 100,
                    growth: 15,
                    demand: 'moderate',
                    skills: ['Analysis', 'Forecasting', 'Writing'],
                    companies: [
                        { name: 'Morgan Stanley', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Morgan_Stanley_Logo_1.svg/200px-Morgan_Stanley_Logo_1.svg.png' }
                    ],
                    color: '#2563EB'
                }
            ],
            stats: {
                placementRate: "93%",
                avgSalary: "$105K"
            }
        },
        certificate: {
            title: "Financial Modeling Expert",
            description: "Certification in Advanced Financial Modeling and Valuation.",
            features: [
                {
                    title: "Industry Recognized",
                    description: "Accepted by top investment banks and financial institutions globally."
                },
                {
                    title: "Deal Experience",
                    description: "Showcase a portfolio of live deal simulations and valuation models."
                },
                {
                    title: "CFA Aligned",
                    description: "Curriculum covers key topics from CFA Level 1 & 2."
                }
            ],
            roleName: "Investment Banking Analyst",
            backgroundColor: "#16A34A"
        },
        textTestimonials: {
            title: "Career Transformations",
            subtitle: "Success stories from our alumni.",
            list: [
                {
                    id: 1,
                    name: "Amit Patel",
                    role: "Associate @ Deutsche Bank",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "The financial modeling modules were practically identical to what I do on the job. Magnate gave me the edge I needed."
                },
                {
                    id: 2,
                    name: "Jessica Wong",
                    role: "Analyst @ Deloitte",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "Transitioning from engineering to finance seemed impossible until I found this course. The mentorship was a game changer."
                }
            ]
        },
        faqs: {
            title: "FAQs",
            description: "Common questions about the Finance course.",
            list: [
                {
                    question: "Do I need a finance degree to apply?",
                    answer: "No, a finance degree is not mandatory. We start with the basics of accounting and finance. However, a strong interest in numbers and analytical thinking is recommended."
                },
                {
                    question: "Is this course helpful for CFA preparation?",
                    answer: "Yes! Our curriculum aligns with major portions of the CFA Level 1 and Level 2 exams, giving you a strong head start if you plan to pursue the charter."
                },
                {
                    question: "What kind of jobs can I get after this course?",
                    answer: "You can apply for roles like Investment Banking Analyst, Private Equity Analyst, Equity Research Associate, Financial Analyst, and Corporate Finance Manager."
                },
                {
                    question: "Do you provide placement assistance?",
                    answer: "Yes, we have a dedicated placement cell that helps with resume reviews, mock interviews, and connecting you with our network of hiring partners in the finance industry."
                }
            ]
        }
    },
    {
        slug: "full-stack",
        metadata: {
            title: "Full Stack Development Course | Magnate",
            description: "Launch your career in tech with our comprehensive job-oriented Full Stack Development course.",
        },
        hero: {
            title: "Master Full Stack Development",
            description: "A comprehensive program designed to transform beginners into expert developers. Master the MERN stack, Next.js, and cloud deployment from industry leaders.",
            bannerText: "Enroll now with No-Cost EMI options at Zero Interest →",
            ratingCount: 1250,
            learnerCount: "2K +",
            courseType: "Online",
            duration: "8 Months",
            imageSrc: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
            enquiryHref: "/enroll",
            syllabusHref: "/syllabus",
        },
        overview: {
            title: "Your Gateway to High-Paying Tech Careers",
            description: "Master the end-to-end software development lifecycle. From designing intuitive user interfaces to architecting robust backend systems, this course equips you with the skills top tech companies demand.",
            features: [
                { icon: "💻", text: "200+ Hours of Live Coding" },
                { icon: "🚀", text: "15+ Real World Projects" },
                { icon: "👨‍🏫", text: "1:1 Mentorship" },
                { icon: "💼", text: "100% Placement Support" }
            ],
            skillsTitle: "What You'll Master",
            skillsDescription: "A curated curriculum covering the most in-demand technologies in the industry.",
            skills: [
                { title: "Frontend", description: "React, Next.js, Tailwind CSS" },
                { title: "Backend", description: "Node.js, Express, Python" },
                { title: "Database", description: "MongoDB, PostgreSQL, Redis" },
                { title: "DevOps", description: "Docker, AWS, CI/CD" }
            ],
            ctaText: "Start Learning Today"
        },
        videoTestimonials: [
            {
                id: 1,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                poster: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop",
                name: "Sarah Johnson",
                role: "Software Engineer @ Adobe"
            },
            {
                id: 2,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                poster: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
                name: "Michael Chen",
                role: "Full Stack Developer @ Uber"
            },
            {
                id: 3,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                poster: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
                name: "Emily Davis",
                role: "Frontend Engineer @ Vercel"
            }
        ],
        tools: {
            title: "Industry Standard Tech Stack",
            description: "Learn the tools and frameworks used by Fortune 500 companies.",
            tools: [
                { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
                { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
                { name: "MongoDB", icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
                { name: "Next.js", icon: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png", darkModeInvert: true },
                { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" },
                { name: "Docker", icon: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png", darkModeInvert: true },
                { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", darkModeInvert: true },
                { name: "Git", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" }
            ]
        },
        guide: {
            title: "From Hello World to Hired",
            steps: [
                {
                    number: 1,
                    title: "Foundation & Fundamentals",
                    description: "Start with the building blocks of the web: HTML, CSS, and JavaScript. Learn how to structure pages, style them beautifully, and add interactivity."
                },
                {
                    number: 2,
                    title: "Frontend Mastery",
                    description: "Deep dive into React.js ecosystem. Learn state management, hooks, and component patterns. Build single-page applications that are fast and responsive."
                },
                {
                    number: 3,
                    title: "Backend & System Design",
                    description: "Master Node.js and Express. Understand APIs, authentication, database modeling with MongoDB/SQL, and scalable architecture principles."
                }
            ],
            ctaTitle: "Code Your Future",
            ctaButtonText: "Enroll Now",
            ctaHref: "/enroll"
        },
        roadmap: {
            title: "Course Roadmap",
            description: "Step-by-step path to becoming a Full Stack Developer.",
            phases: [
                {
                    phase: "Phase 1",
                    description: "Web Fundamentals & Logic",
                    color: "#3B82F6",
                    icon: "🏗️",
                    items: [
                        { type: 'node', label: 'HTML5 & Semantic Markup', status: 'core' },
                        { type: 'node', label: 'CSS3, Flexbox & Grid', status: 'core' },
                        { type: 'node', label: 'JavaScript (ES6+)', status: 'core' },
                        { type: 'checkpoint', label: 'Project: Personal Portfolio', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 2",
                    description: "Frontend Development",
                    color: "#10B981",
                    icon: "🎨",
                    items: [
                        { type: 'node', label: 'React.js & Hooks', status: 'core' },
                        { type: 'node', label: 'State Management (Redux/Zustand)', status: 'tool' },
                        { type: 'node', label: 'Tailwind CSS', status: 'tool' },
                        { type: 'checkpoint', label: 'Project: E-commerce Dashboard', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 3",
                    description: "Backend & Database",
                    color: "#F59E0B",
                    icon: "⚙️",
                    items: [
                        { type: 'node', label: 'Node.js & Express', status: 'core' },
                        { type: 'node', label: 'MongoDB & Mongoose', status: 'db' },
                        { type: 'node', label: 'Authentication (JWT/OAuth)', status: 'core' },
                        { type: 'checkpoint', label: 'Project: Social Media API', status: 'nav' }
                    ]
                },
                {
                    phase: "Phase 4",
                    description: "Full Stack & DevOps",
                    color: "#8B5CF6",
                    icon: "🚀",
                    items: [
                        { type: 'node', label: 'Next.js (App Router)', status: 'core' },
                        { type: 'node', label: 'Docker & CI/CD', status: 'tool' },
                        { type: 'node', label: 'Deployment (AWS/Vercel)', status: 'tool' },
                        { type: 'checkpoint', label: 'Final Capstone Project', status: 'nav' }
                    ]
                }
            ]
        },
        mentors: {
            title: "Tech Industry Leaders",
            description: "Learn from engineers at Samsung, Zeta, and Tesla.",
            list: [
                {
                    name: "Akhil Unnikrishnan",
                    role: "Senior Engineer, STAR Labs Samsung",
                    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
                    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1024px-Samsung_Logo.svg.png",
                    bio: "Founding member of Samsung's Technology and Advanced Research (STAR) Lab. Specializes in scalable architecture and distributed systems."
                },
                {
                    name: "Narayana Babu",
                    role: "VP of Engineering, Zeta",
                    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Zeta",
                    bio: "Creator of multiple successful AI startups. Leads product and engineering at Zeta, bringing extensive experience in fintech and high-scale systems."
                },
                {
                    name: "Dinesh Raveendran",
                    role: "Data Engineer, Tesla",
                    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
                    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
                    bio: "Expert in building optimized, scalable data pipelines. Brings deep insights into big data, cloud infrastructure, and performance optimization."
                }
            ]
        },
        careers: {
            title: "Tech Careers",
            subtitle: "BUILD THE FUTURE",
            description: "Full Stack Developers are the backbone of the digital economy.",
            paths: [
                {
                    title: 'Full Stack Developer',
                    salary: 95,
                    growth: 25,
                    demand: 'critical',
                    skills: ['React', 'Node.js', 'MongoDB'],
                    companies: [
                        { name: 'Google', logo: 'https://img.icons8.com/?size=100&id=17949&format=png' },
                        { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo_%28cropped%29.svg/288px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png' }
                    ],
                    color: '#F5A623',
                    featured: true
                },
                {
                    title: 'DevOps Engineer',
                    salary: 110,
                    growth: 30,
                    demand: 'critical',
                    skills: ['AWS', 'Docker', 'Kubernetes'],
                    companies: [
                        { name: 'AWS', logo: 'https://seeklogo.com/images/A/amazon-web-services-aws-logo-3CEFE22863-seeklogo.com.png' },
                        { name: 'GitLab', logo: 'https://logo.svgcdn.com/logos/gitlab.png' }
                    ],
                    color: '#E09000',
                    featured: true
                },
                {
                    title: 'Frontend Developer',
                    salary: 85,
                    growth: 20,
                    demand: 'high',
                    skills: ['React', 'Vue.js', 'CSS'],
                    companies: [
                        { name: 'Airbnb', logo: 'https://seeklogo.com/images/A/airbnb-logo-6B95A1A9CB-seeklogo.com.png' }
                    ],
                    color: '#FFD54F'
                }
            ],
            stats: {
                placementRate: "95%",
                avgSalary: "$94K"
            }
        },
        certificate: {
            title: "Full Stack Certified",
            description: "Proof of your ability to build complete web applications.",
            features: [
                {
                    title: "Industry Recognized",
                    description: "Validates your expertise in Full Stack Development for top tech employers."
                },
                {
                    title: "Project Portfolio",
                    description: "Prove your skills with a verified portfolio of production-grade applications."
                },
                {
                    title: "Shareable Credential",
                    description: "Add to your LinkedIn and resume to stand out to recruiters."
                }
            ],
            roleName: "Software Engineer",
            backgroundColor: "#F5A623"
        },
        textTestimonials: {
            title: "Success Stories",
            subtitle: "See where our graduates are working.",
            list: [
                {
                    id: 1,
                    name: "Elena Rodriguez",
                    role: "Full Stack Developer @ Google",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "The MERN stack curriculum was comprehensive and up-to-date. Building real-world projects gave me the confidence to crack the technical interviews at Google."
                },
                {
                    id: 2,
                    name: "Michael Chen",
                    role: "Frontend Engineer @ Amazon",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "Coming from a non-tech background, the structured learning path and mentorship helped me transition smoothly into software engineering. Highly recommended!"
                }
            ]
        },
        faqs: {
            title: "Frequently Asked Questions",
            description: "About the Full Stack Development course.",
            list: [
                {
                    question: "Do I need any prior coding experience to join?",
                    answer: "Not necessarily! While basic computer literacy is required, our Full Stack Development course starts with the fundamentals of HTML, CSS, and JavaScript before moving into advanced topics. If you're a complete beginner, be prepared for a steep learning curve, but our mentors are here to support you every step of the way."
                },
                {
                    question: "What specific technologies will I learn?",
                    answer: "You will master the MERN stack (MongoDB, Express.js, React, Node.js), along with Next.js for server-side rendering, TypeScript for type safety, and PostgreSQL for relational database management. We also cover version control with Git, containerization with Docker, and cloud deployment on AWS."
                },
                {
                    question: "Is this course live or pre-recorded?",
                    answer: "It's a hybrid model designed for maximum effectiveness. You'll have access to high-quality pre-recorded lectures for conceptual learning at your own pace, supplemented by live mentorship sessions, code reviews, and Q&A webinars to resolve doubts and work on real-world projects."
                }
            ]
        }
    },
    {
        slug: "german",
        metadata: {
            title: "German Language Course | Magnate",
            description: "Learn German from A1 to B2 level. Prepare for work, study, and life in Germany with native instructors.",
        },
        hero: {
            title: "Learn German Language",
            description: "Your passport to education and career in Germany. Comprehensive training from A1 to B2 with native experts.",
            bannerText: "Batches starting soon for Winter Semester 2026 intake →",
            ratingCount: 1200,
            learnerCount: "3000 +",
            courseType: "Online / Offline",
            duration: "4-8 Months",
            imageSrc: "https://images.unsplash.com/photo-1467269204594-9661b4dc4dce?q=80&w=2070&auto=format&fit=crop",
            enquiryHref: "/enroll",
            syllabusHref: "/syllabus",
        },
        overview: {
            title: "Willkommen to Your Future",
            description: "Germany is the land of ideas and opportunities. Mastering the language is the key to unlocking free education and high-paying jobs.",
            features: [
                { icon: "🇩🇪", text: "Native Instructors" },
                { icon: "🗣️", text: "Speaking Focus" },
                { icon: "📜", text: "Goethe Exam Prep" },
                { icon: "✈️", text: "Visa Support" }
            ],
            skillsTitle: "Language Proficiency",
            skillsDescription: "We follow the Common European Framework of Reference for Languages (CEFR).",
            skills: [
                { title: "Speaking", description: "Fluent conversation & pronunciation" },
                { title: "Grammar", description: "Master German sentence structures (A1-B2)" },
                { title: "Vocabulary", description: "Business & daily life vocabulary" },
                { title: "Culture", description: "Understanding German work culture" }
            ],
            ctaText: "Check Batches"
        },
        videoTestimonials: [
            {
                id: 1,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                poster: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?q=80&w=1000&auto=format&fit=crop",
                name: "Rahul Sharma",
                role: "Masters Student in Berlin"
            },
            {
                id: 2,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                poster: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop",
                name: "Anjali Gupta",
                role: "Nurse in Munich"
            },
            {
                id: 3,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
                name: "John Doe",
                role: "Engineer at BMW"
            }
        ],
        tools: {
            title: "Language Learning Tools",
            description: "Resources to accelerate your German fluency.",
            tools: [
                { name: "Duolingo", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Duolingo_logo_2019.svg/200px-Duolingo_logo_2019.svg.png" },
                { name: "Zoom", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/200px-Zoom_Communications_Logo.svg.png" },
                { name: "Anki", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Anki_logo.svg" },
                { name: "Goethe", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Goethe-Institut-Logo.svg/200px-Goethe-Institut-Logo.svg.png", darkModeInvert: true },
                { name: "Quizlet", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Quizlet_Logo.png" },
            ]
        },
        guide: {
            title: "Journey to Fluency",
            steps: [
                {
                    number: 1,
                    title: "Foundation (A1-A2)",
                    description: "Build basic vocabulary, grammar, and conversational skills for daily survival in Germany."
                },
                {
                    number: 2,
                    title: "Intermediate (B1-B2)",
                    description: "Develop fluency, complex sentence structures, and professional communication abilities."
                },
                {
                    number: 3,
                    title: "Exam Preparation",
                    description: "Intensive practice for Goethe-Zertifikat or Telc exams to secure your visa/job."
                }
            ],
            ctaTitle: "Start Speaking German",
            ctaButtonText: "Join a Batch",
            ctaHref: "/enroll"
        },
        roadmap: {
            title: "CEFR Levels",
            description: "Structured progression from A1 to B2.",
            phases: [
                {
                    phase: "Level A1",
                    description: "Absolute Beginner",
                    color: "#EF4444",
                    icon: "🐣",
                    items: [
                        { type: 'node', label: 'Alphabet & Pronunciation', status: 'core' },
                        { type: 'node', label: 'Basic Greetings', status: 'core' },
                        { type: 'node', label: 'Present Tense', status: 'core' },
                        { type: 'checkpoint', label: 'Mock A1 Exam', status: 'nav' }
                    ]
                },
                {
                    phase: "Level A2",
                    description: "Elementary",
                    color: "#F59E0B",
                    icon: "🌱",
                    items: [
                        { type: 'node', label: 'Daily Routine', status: 'core' },
                        { type: 'node', label: 'Past Tense (Perfekt)', status: 'core' },
                        { type: 'node', label: 'Adjective Endings', status: 'tool' },
                        { type: 'checkpoint', label: 'Mock A2 Exam', status: 'nav' }
                    ]
                },
                {
                    phase: "Level B1",
                    description: "Intermediate",
                    color: "#000000",
                    icon: "🌿",
                    items: [
                        { type: 'node', label: 'Complex Sentences', status: 'core' },
                        { type: 'node', label: 'Passive Voice', status: 'core' },
                        { type: 'node', label: 'Discussion & Debate', status: 'tool' },
                        { type: 'checkpoint', label: 'Mock B1 Exam', status: 'nav' }
                    ]
                },
                {
                    phase: "Level B2",
                    description: "Upper Intermediate",
                    color: "#3B82F6",
                    icon: "🌳",
                    items: [
                        { type: 'node', label: 'Business German', status: 'core' },
                        { type: 'node', label: 'Technical Vocabulary', status: 'core' },
                        { type: 'node', label: 'Job Interview Prep', status: 'tool' },
                        { type: 'checkpoint', label: 'Final Certification', status: 'nav' }
                    ]
                }
            ]
        },
        mentors: {
            title: "Meet Your Instructors",
            description: "Native speakers and certified trainers.",
            list: [
                {
                    name: "Lisa Müller",
                    role: "Senior Instructor (Native)",
                    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Goethe Institut",
                    bio: "15+ years of teaching experience. Specialized in preparing students for C1/C2 exams."
                },
                {
                    name: "Hans Weber",
                    role: "Language Coach",
                    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
                    companyName: "University of Munich",
                    bio: "Expert in phonetics and accent reduction. Helps students sound like natives."
                },
                {
                    name: "Priya Singh",
                    role: "C1 Certified Trainer",
                    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
                    companyName: "TU Berlin Alumni",
                    bio: "Understand the challenges of Indian students learning German. Provides targeted strategies."
                }
            ]
        },
        careers: {
            title: "Opportunities in Germany",
            subtitle: "WORK & STUDY",
            description: "Open doors to the largest economy in Europe.",
            paths: [
                {
                    title: 'Work in Germany',
                    salary: 60,
                    growth: 20,
                    demand: 'high',
                    skills: ['German B2', 'Domain Skills'],
                    companies: [
                        { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Siemens_AG_logo.svg/200px-Siemens_AG_logo.svg.png' },
                        { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png' }
                    ],
                    color: '#EF4444',
                    featured: true
                },
                {
                    title: 'Study in Germany',
                    salary: 0,
                    growth: 100,
                    demand: 'high',
                    skills: ['German B1/C1', 'Academic Writing'],
                    companies: [
                        { name: 'TU Munich', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Technische_Universit%C3%A4t_M%C3%BCnchen_Logo.svg/200px-Technische_Universit%C3%A4t_M%C3%BCnchen_Logo.svg.png' },
                        { name: 'RWTH Aachen', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/RWTH_Aachen_University_Logo.svg/200px-RWTH_Aachen_University_Logo.svg.png' }
                    ],
                    color: '#F59E0B',
                    featured: true
                },
                {
                    title: 'Language Specialist',
                    salary: 50,
                    growth: 15,
                    demand: 'moderate',
                    skills: ['Translation', 'Teaching', 'Interpreting'],
                    companies: [
                        { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' }
                    ],
                    color: '#3B82F6'
                }
            ],
            stats: {
                placementRate: "98%",
                avgSalary: "€55K"
            }
        },
        certificate: {
            title: "Language Proficiency Certificate",
            description: "Proof of your German language skills.",
            features: [
                {
                    title: "CEFR Aligned",
                    description: "Certificate mentions your proficiency level (A1-B2) according to European standards."
                },
                {
                    title: "Visa Valid",
                    description: "Accepted by many institutions as proof of language proficiency training."
                },
                {
                    title: "Goethe Prep",
                    description: "Our assessment pattern mirrors the official Goethe-Zertifikat exams."
                }
            ],
            roleName: "German Speaker",
            backgroundColor: "#EF4444"
        },
        textTestimonials: {
            title: "Student Stories",
            subtitle: "See where our students are now.",
            list: [
                {
                    id: 1,
                    name: "Aditya R.",
                    role: "Student @ TU Berlin",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "I went from zero to B1 in 4 months. The teachers are amazing and very patient."
                },
                {
                    id: 2,
                    name: "Sneha P.",
                    role: "Nurse @ Heidelberg",
                    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "Learning medical German was tough, but Magnate's specialized modules helped me clear my licensing exam."
                }
            ]
        },
        faqs: {
            title: "Common Questions",
            description: "About learning German.",
            list: [
                {
                    question: "How long does it take to reach B2 level?",
                    answer: "Typically, it takes about 6-8 months of intensive study to go from A1 to B2. Our course is designed to accelerate this process."
                },
                {
                    question: "Is this course valid for a Student Visa?",
                    answer: "While looking for a visa, embassies usually require a Goethe or Telc certificate. Our course prepares you specifically to pass these official exams with high scores."
                },
                {
                    question: "Are classes online or offline?",
                    answer: "We offer both. Online live interactive sessions and offline weekend batches are available."
                },
                {
                    question: "Do you help with university applications?",
                    answer: "Yes, we have a separate consultancy wing that assists with shortlisting universities and reviewing SOPs for Germany."
                }
            ]
        }
    },
    {
        slug: "ielts-pte",
        metadata: {
            title: "IELTS & PTE Coaching | Magnate",
            description: "Achieve your target score (8777 or 79+) in IELTS and PTE. Expert coaching for study abroad and PR visa.",
        },
        hero: {
            title: "IELTS & PTE Coaching",
            description: "Your gateway to global opportunities. Personalized coaching to help you smash your target scores in the first attempt.",
            bannerText: "New Weekend Batch Starting Soon →",
            ratingCount: 2500,
            learnerCount: "5000 +",
            courseType: "Online / Offline",
            duration: "4-8 Weeks",
            imageSrc: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
            enquiryHref: "/enroll",
            syllabusHref: "/syllabus",
        },
        overview: {
            title: "Ace Your English Test",
            description: "Whether for study abroad or PR, our proven strategies make complex test tasks simple and manageable.",
            features: [
                { icon: "🎯", text: "Target Band 8+" },
                { icon: "📝", text: "Mock Tests" },
                { icon: "🗣️", text: "1:1 Speaking" },
                { icon: "🌏", text: "Visa Guidance" }
            ],
            skillsTitle: "What We Cover",
            skillsDescription: "Comprehensive coverage of all 4 language modules.",
            skills: [
                { title: "Listening", description: "Master various accents (British, Australian, American)" },
                { title: "Reading", description: "Speed reading & skimming techniques" },
                { title: "Writing", description: "Essay structuring & vocabulary enhancement" },
                { title: "Speaking", description: "Fluency, pronunciation & coherence" }
            ],
            ctaText: "Book Free Demo"
        },
        videoTestimonials: [
            {
                id: 1,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                poster: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
                name: "Priya P.",
                role: "Scored IELTS 8.5"
            },
            {
                id: 2,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                poster: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop",
                name: "Ahmed K.",
                role: "PTE 90/90 Scorer"
            },
            {
                id: 3,
                video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                poster: "https://images.unsplash.com/photo-1517256673644-544c81294329?q=80&w=1000&auto=format&fit=crop",
                name: "Sarah L.",
                role: "Study Permit - Canada"
            }
        ],
        tools: {
            title: "Preparation Tools",
            description: "Use the best resources to track your progress and improve daily.",
            tools: [
                { name: "Cambridge", icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/Cambridge_University_Press_logo.svg", darkModeInvert: true },
                { name: "British Council", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/British_Council_Logo.svg/200px-British_Council_Logo.svg.png", darkModeInvert: true },
                { name: "Pearson", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pearson_logo.svg/200px-Pearson_logo.svg.png", darkModeInvert: true },
                { name: "Grammarly", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Grammarly_logo.svg/200px-Grammarly_logo.svg.png" },
                { name: "Zoom", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/200px-Zoom_Communications_Logo.svg.png" },
            ]
        },
        guide: {
            title: "How We Prepare You",
            steps: [
                {
                    number: 1,
                    title: "Assessment",
                    description: "Take a diagnostic test to identify your current band score and weak areas."
                },
                {
                    number: 2,
                    title: "Skill Building",
                    description: "Intensive practice on Reading, Writing, Listening, and Speaking modules with expert feedback."
                },
                {
                    number: 3,
                    title: "Mock Drills",
                    description: "Full-length simulated tests under exam conditions to boost speed and accuracy."
                }
            ],
            ctaTitle: "Get your dream score",
            ctaButtonText: "Join Now",
            ctaHref: "/enroll"
        },
        roadmap: {
            title: "Complete Roadmap",
            description: "4-8 week intensive plan.",
            phases: [
                {
                    phase: "Week 1-2",
                    description: "Foundation & Strategies",
                    color: "#F43F5E",
                    icon: "🏗️",
                    items: [
                        { type: 'node', label: 'Test Format Overview', status: 'core' },
                        { type: 'node', label: 'Grammar Refresher', status: 'core' },
                        { type: 'node', label: 'Vocabulary Builder', status: 'tool' },
                        { type: 'checkpoint', label: 'Diagnostic Test', status: 'nav' }
                    ]
                },
                {
                    phase: "Week 3-4",
                    description: "Receptive Skills (R & L)",
                    color: "#14B8A6",
                    icon: "🎧",
                    items: [
                        { type: 'node', label: 'Skimming & Scanning', status: 'core' },
                        { type: 'node', label: 'Listening for Details', status: 'core' },
                        { type: 'node', label: 'Accent Training', status: 'tool' },
                        { type: 'checkpoint', label: 'Sectional Mocks', status: 'nav' }
                    ]
                },
                {
                    phase: "Week 5-6",
                    description: "Productive Skills (W & S)",
                    color: "#3B82F6",
                    icon: "✍️",
                    items: [
                        { type: 'node', label: 'Essay Structure (Task 2)', status: 'core' },
                        { type: 'node', label: 'Data Interpretation (Task 1)', status: 'core' },
                        { type: 'node', label: 'Speaking Cues', status: 'tool' },
                        { type: 'checkpoint', label: '1:1 Speaking Mock', status: 'nav' }
                    ]
                },
                {
                    phase: "Week 7-8",
                    description: "Review & Final Mocks",
                    color: "#8B5CF6",
                    icon: "🏆",
                    items: [
                        { type: 'node', label: 'Full Length Mocks', status: 'core' },
                        { type: 'node', label: 'Performance Analysis', status: 'core' },
                        { type: 'node', label: 'Time Management', status: 'tool' },
                        { type: 'checkpoint', label: 'Exam Readiness Check', status: 'nav' }
                    ]
                }
            ]
        },
        mentors: {
            title: "Score Boosters",
            description: "Trainers with a proven track record.",
            list: [
                {
                    name: "Sharon D'Souza",
                    role: "Certified IELTS Trainer",
                    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
                    companyName: "British Council",
                    bio: "Train the Trainer certified. 8+ years of experience helping students achieve Band 8.0+."
                },
                {
                    name: "Robert Keane",
                    role: "PTE Expert",
                    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000&auto=format&fit=crop",
                    companyName: "Pearson",
                    bio: "Expert in PTE tricks and strategies. Former examiner knowing exactly what software looks for."
                },
            ]
        },
        careers: {
            title: "Global Opportunities",
            subtitle: "MIGRATION & EDUCATION",
            description: "Your scores determine your visa eligibility.",
            paths: [
                {
                    title: 'Study Abroad',
                    salary: 0,
                    growth: 100,
                    demand: 'high',
                    skills: ['Academic English', 'Critical Thinking'],
                    companies: [
                        { name: 'Canada', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/200px-Flag_of_Canada.svg.png' },
                        { name: 'UK', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_Kingdom.svg/200px-Flag_of_the_United_Kingdom.svg.png' },
                        { name: 'Australia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/200px-Flag_of_Australia.svg.png' }
                    ],
                    color: '#F43F5E',
                    featured: true
                },
                {
                    title: 'PR / Immigration',
                    salary: 80, // Avg salary range abroad
                    growth: 50,
                    demand: 'high',
                    skills: ['General Training IELTS', 'Communication'],
                    companies: [
                        { name: 'Canada Express Entry', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/200px-Flag_of_Canada.svg.png' },
                        { name: 'Australia PR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/200px-Flag_of_Australia.svg.png' }
                    ],
                    color: '#14B8A6'
                }
            ],
            stats: {
                placementRate: "99%",
                avgSalary: "N/A"
            }
        },
        certificate: {
            title: "Score Guarantee",
            description: "We don't stop until you get your score.",
            features: [
                {
                    title: "Mock Test Analysis",
                    description: "Detailed breakdown of your performance in each section."
                },
                {
                    title: "Course Completion",
                    description: "Certificate of training completion from Magnate Academy."
                },
                {
                    title: "Score Guarantee",
                    description: "We prepare you until you hit your target score (T&C apply)."
                }
            ],
            roleName: "English Speaker",
            backgroundColor: "#F43F5E"
        },
        textTestimonials: {
            title: "Top Scorers",
            subtitle: "Our Wall of Fame.",
            list: [
                {
                    id: 1,
                    name: "Rohan M.",
                    role: "Student @ Univ of Toronto",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "I was stuck at 6.5 in writing. Magnate's feedback sessions helped me jump to 7.5 in just 3 weeks."
                },
                {
                    id: 2,
                    name: "Kavita S.",
                    role: "Nurse in UK",
                    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
                    quote: "The listening strategies were a lifesaver. I scored a perfect 9.0 in listening!"
                }
            ]
        },
        faqs: {
            title: "Frequently Asked Questions",
            description: "About IELTS & PTE Coaching.",
            list: [
                {
                    question: "What is the difference between IELTS Academic and General?",
                    answer: "Academic is for students planning to study abroad, while General Training is for immigration (PR) and work visas."
                },
                {
                    question: "How long is the coaching?",
                    answer: "Our crash course is 4 weeks, while the comprehensive program is 8 weeks. We offer flexible batches."
                },
                {
                    question: "Do you provide study material?",
                    answer: "Yes, you get access to the official Cambridge guides, 50+ mock tests, and our proprietary vocabulary lists."
                },
                {
                    question: "Can I switch between IELTS and PTE?",
                    answer: "Yes, our trainers are proficient in both. If you find one test difficult, we can assess and recommend the other based on your strengths."
                }
            ]
        }
    }
];

export const getCourseBySlug = (slug: string) => {
    return courses.find(course => course.slug === slug);
};
