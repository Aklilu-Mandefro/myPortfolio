import Data from "@data/sections/latest-posts.json";
import Date from '@library/date';
import Link from "next/link";

const LatestPostsSection = ( { posts, layout, imageHorizontal } ) => {
    
    return (
        <>
            <div className="mil-section-title mil-up">
                <div className="mil-divider" />
                <h3>{Data.title}</h3>
            </div>

            {/* blog */}
            <section className="mil-p-90-30">
                <div className="row justify-content-between align-items-center">
                    {posts.slice(0, Data.numOfItems).map((item, key) => (
                    <div className="col-lg-6" key={`blog-post-${key}`}>

                        <Link href={`/blog/${item.id}`} className="mil-blog-card mil-mb-60">
                            <div className="mil-cover mil-up">
                                <img src={item.image} alt={item.title} />
                                <div className="mil-link mil-icon-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div className="mil-descr">
                                <h4 className="mil-up mil-mb-30">{item.title}</h4>
                                <p className="mil-up">{item.short}</p>
                            </div>
                        </Link>

                    </div>
                    ))}
                </div>

            </section>
            {/* blog end */}
        </>
    );
};

export default LatestPostsSection;