import React from "react";
import Link from "next/link";

const ProjectsMasonry = ({ projects }) => {
    const projectRows = [];

    for (var i = 0; i < projects.length; i += 2 ) {
        projectRows.push(projects.slice(i, 2 + i));
    }
    
    return (
      <>
        {/* portfolio */}
        <section>
            <div className="row align-items-center justify-content-between">
                {projectRows.map((row, row_key) => (
                <React.Fragment key={`projects-item-${row_key}`}>
                    {row.map((item, key) => (
                    <div className={row_key%2==0 ? key%2 == 0 ? "col-lg-5" : "col-lg-6" : key%2 == 0 ? "col-lg-6" : "col-lg-5"} key={`projects-item-${row_key}-${key}`}>
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
                </React.Fragment>
                ))}

            </div>
        </section>
        {/* portfolio end */}
      </>
    );
};
export default ProjectsMasonry;
  