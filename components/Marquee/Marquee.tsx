import React from "react";
import "./Marquee.css";

const partnersRow1 = [
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
    { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
    { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
];

const partnersRow2 = [
    { name: "HCL Tech", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/HCL_Technologies_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
];

const MarqueeCard = ({ name, logo }: { name: string, logo: string }) => {
    return (
        <div className="marquee-card">
            <div className="marquee-initial-wrapper">
                <img src={logo} alt={name} className="marquee-logo" style={{ filter: 'brightness(0) invert(1)', opacity: 0.8 }} onError={(e) => {
                    // Fallback to first letter if image fails to load
                    (e.target as HTMLElement).style.display = 'none';
                    const fallback = document.createElement('span');
                    fallback.className = 'marquee-initial';
                    fallback.innerText = name.charAt(0);
                    (e.target as HTMLElement).parentElement?.appendChild(fallback);
                }} />
            </div>
            <span className="marquee-name">{name}</span>
            <div className="marquee-glow"></div>
        </div>
    );
};

const Marquee = () => {
    // We duplicate the array multiple times to ensure the screen is filled and we get a completely seamless infinite loop.
    const row1Items = [...partnersRow1, ...partnersRow1, ...partnersRow1, ...partnersRow1];
    const row2Items = [...partnersRow2, ...partnersRow2, ...partnersRow2, ...partnersRow2];

    return (
        <section className="marquee-section">
            <div className="marquee-header">
                <div className="marquee-badge">
                    <span className="marquee-badge-dot"></span>
                    Hiring Partners
                </div>
                <h2 className="marquee-title">
                    Empowering careers at <br />
                    <span className="marquee-title-highlight">industry-leading</span> companies
                </h2>
                <p className="marquee-desc">Our graduates are sought after by top-tier organizations around the globe.</p>
            </div>

            <div className="marquee-wrapper">
                {/* Row 1 - Left to Right */}
                <div className="marquee-row">
                    <div className="marquee-content scroll-left">
                        {row1Items.map((partner, index) => (
                            <MarqueeCard key={`row1-${index}`} name={partner.name} logo={partner.logo} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - Right to Left */}
                <div className="marquee-row" style={{ marginTop: "1rem" }}>
                    <div className="marquee-content scroll-right">
                        {row2Items.map((partner, index) => (
                            <MarqueeCard key={`row2-${index}`} name={partner.name} logo={partner.logo} />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Gradient overlays to fade out the edges seamlessly */}
            <div className="marquee-overlay marquee-overlay-left"></div>
            <div className="marquee-overlay marquee-overlay-right"></div>
        </section>
    );
};

export default Marquee;
