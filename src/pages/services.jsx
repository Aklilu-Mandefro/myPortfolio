import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import PricingSection from "@components/sections/Pricing";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

import Link from "next/link";

const Services = (props) => {
  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-4.jpg"}
      rightPanelImg={"/img/person/6.png"}
    >
      <PageBanner pageTitle={"This is what i do best"} align={"center"} />

      {/* services */}
      <section className="mil-p-0-30">
        <div className="row justify-content-between align-items-center">
          {props.services.map((item, key) => (
          <div className="col-lg-4" key={`services-item-${key}`}>
            <div className="mil-icon-box mil-center mil-mb-60">
              <div className="mil-service-icon mil-up">
                <img src={item.image} alt={item.title} className="mil-mb-30" />
              </div>
              <h5 className="mil-up mil-mb-30">{item.title}</h5>
              <p className="mil-up mil-mb-30">{item.short}</p>
              <div className="mil-up">
                <Link href={`/services/${item.id}`} className="mil-link mil-icon-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>
      {/* services end */}
      
      <PricingSection />

      <TestimonialSlider />

      <CallToActionSection />
      
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}