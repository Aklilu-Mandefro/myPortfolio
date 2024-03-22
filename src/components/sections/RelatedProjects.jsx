import Data from "@data/sections/related-projects.json";
import Link from "next/link";

const RelatedProjectsSection = ( Content ) => {

    return (
        <>
        <div className="mil-section-title mil-up">
            <div className="mil-divider" />
            <h3>{Data.title}</h3>
        </div>

        {/* similar projects */}
        <section className="mil-p-90-30">
            <div className="row justify-content-between align-items-center">
                {Content.items.slice(0, Data.numOfItems).map((item, key) => (
                <div className="col-lg-6" key={`projects-item-${item.id}`}>

                    <Link href={`/projects/${item.id}`} className="mil-portfolio-item mil-mb-60">
                        <div className="mil-cover-frame mil-up">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="mil-description mil-up">
                            <div>
                                <p className="mil-upper mil-mb-5">{item.category}</p>
                                <h4>{item.title}</h4>
                            </div>
                            <div className="mil-link mil-icon-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                </div>
                ))}
            </div>

        </section>
        {/* similar projects end */}

        </>
    );
};

export default RelatedProjectsSection;