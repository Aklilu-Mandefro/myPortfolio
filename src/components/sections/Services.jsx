import Data from "@data/sections/services.json";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <>
        <div className="mil-section-title mil-up">
            <div className="mil-divider"></div>
            <h3>{Data.title}</h3>
        </div>

        {/* services */}
        <section className="mil-p-90-30">
            <div className="row justify-content-between align-items-center">
                {Data.items.map((item, key) => (
                <div key={`services-item-${key}`} className="col-lg-4">
                    <div className="mil-icon-box mil-center mil-mb-60">
                        <div className="mil-service-icon mil-up">
                            <img src={item.icon} alt={item.title} className="mil-mb-30" />
                        </div>
                        <h5 className="mil-up mil-mb-30">{item.title}</h5>
                        <p className="mil-up mil-mb-30">{item.text}</p>
                        <div className="mil-up">
                            <Link href={item.link} className="mil-link mil-icon-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
        {/* services end */}
    </>
  );
};

export default ServicesSection;