import Link from "next/link";

const ProjectsGrid = ({ projects, columns }) => {
    let colClasses = "col-lg-12";

    switch (columns) {
        case 1 : colClasses = "col-lg-12"; break;
        case 2 : colClasses = "col-lg-6"; break;
        default : colClasses = "col-lg-12"; break;
    }
    
    return (
      <>
        {/* portfolio */}
        <section>
            <div className="row">
                {projects.map((item, key) => (
                <div className={colClasses} key={`projects-item-${key}`}>
                    {columns == 1 &&
                    <Link href={`/projects/${item.id}`} className="mil-portfolio-item mil-item-2 mil-up mil-mb-60">
                        <div className="mil-cover-frame">
                            <img src={item.image} alt={item.title} data-swiper-parallax="-130" data-swiper-parallax-scale="1.25" />
                        </div>
                        
                        <div className="mil-description" data-swiper-parallax-y="-100%" data-swiper-parallax-duration="400">
                            <h4>{item.title}</h4>
                            <div className="mil-btn">View project</div>
                        </div>
                    </Link>
                    }
                    {columns != 1 &&
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
                    }
                </div>
                ))}

            </div>
        </section>
        {/* portfolio end */}
      </>
    );
};
export default ProjectsGrid;
  