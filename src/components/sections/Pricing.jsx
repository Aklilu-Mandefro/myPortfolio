import React from "react";
import Data from "@data/sections/pricing.json";
import Link from "next/link";

const PricingSection = () => {
    
    return (
        <>
        <div className="mil-section-title mil-up">
            <div className="mil-divider" />
            <h3>{Data.title}</h3>
        </div>

        {/* prices */}
        <section className="mil-p-90-60">
            <div className="row">
                {Data.items.map((item, key) => (
                <div key={`pricing-item-${key}`} className="col-lg-6">

                    <div className="mil-price-card mil-up mil-mb-30">
                        <h4 className="mil-upper mil-accent mil-up mil-mb-30">{item.name}</h4>

                        <div className="mil-price-number mil-up mil-mb-30">{item.price.value} <span>{item.price.after}</span></div>

                        <div className="mil-divider mil-up mil-mb-30" />

                        <ul className="mil-mb-60">
                            {item.list.map((element, key2) => (
                            <React.Fragment key={`pricing-item-${key}-list-${key2}`}>
                                { element.active == 1 &&
                                <li className="mil-up">{element.value}</li>
                                }
                                { element.active != 1 &&
                                <li className="mil-up mil-empty">{element.value}</li>
                                }
                            </React.Fragment>
                            ))}
                        </ul>

                        <Link href={item.button.link} className="mil-link mil-up">
                            <span>{item.button.label}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                </div>
                ))}
            </div>
        </section>
        {/* prices end */}
        </>
    );
};

export default PricingSection;