import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";

const ProjectsSlider = ( { projects } ) => {
  return (
    <>
        <section className="mil-p-90-0">
            <div className="row">
                <div className="col-lg-9">
                    <Swiper
                        {...sliderProps.milPortfolioCarousel}
                        className="mil-swiper-container mil-portfolio-carousel mil-up"
                    >
                            {projects.map((item, key) => (
                            <SwiperSlide className="swiper-slide" key={`projects-item-${key}`}>

                                <div className="mil-portfolio-item mil-item-2 mil-carousel-item">
                                    <div className="mil-cover-frame">
                                        <img src={item.image} alt={item.title} data-swiper-parallax="-130" data-swiper-parallax-scale="1.25" />
                                    </div>
                                    <div className="mil-description" data-swiper-parallax-y="-100%" data-swiper-parallax-duration="400">
                                        <h4>{item.title}</h4>
                                        <Link href={`/projects/${item.id}`} className="mil-btn">View project</Link>
                                    </div>
                                </div>

                            </SwiperSlide>
                            ))}
                    </Swiper>

                </div>
                <div className="col-lg-3">
                    <div className="mil-carousel-nav">
                        <div className="mil-carousel-nav-arrow mil-portfolio-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </div>
                        <div className="mil-carousel-nav-arrow mil-portfolio-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </div>
                        <div className="mil-portfolio-pagination mil-upper mil-dark" />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};
export default ProjectsSlider;
