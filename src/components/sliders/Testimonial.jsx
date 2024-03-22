import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/testimonial';

const TestimonialSlider = () => {
  return (
    <>
      <div className="mil-section-title mil-up">
          <div className="mil-divider"></div>
          <h3>{Data.title}</h3>
      </div>

      {/* revievs */}
      <section className="mil-p-90-90">

        <div className="row justify-content-center mil-reviews-slider-frame">
            <div className="col-lg-8">
                <Swiper
                  {...sliderProps.milReviewsSlider}
                  className="swiper-container mil-reviews-slider mil-mb-30"
                >
                  {Data.items.map((item, key) => (
                  <SwiperSlide className="swiper-slide" key={`testimonial-slider-item-${key}`}>

                      <div className="mil-review mil-center" data-swiper-parallax-opacity="0" data-swiper-parallax="-90" data-swiper-parallax-scale=".8">
                          <div className="mil-review-top">
                              <img src={item.image} alt={item.name} className="mil-avatar mil-up" />
                              <div className="mil-name">
                                  <h4 className="mil-up mil-mb-5">{item.name}</h4>
                                  <p className="mil-upper mil-up">{item.role}</p>
                              </div>
                          </div>
                          <p className="mil-up">{item.text}</p>
                      </div>

                  </SwiperSlide>
                  ))}
                </Swiper>
            </div>

            <div className="mil-slider-nav mil-up">
                <div className="mil-reviews-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
                <div className="mil-reviews-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>

            <div className="swiper-reviews-pagination mil-up" />

        </div>

      </section>
      {/* revievs end */}
    </>
  );
};
export default TestimonialSlider;
