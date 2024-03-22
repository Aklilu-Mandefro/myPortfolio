import { useEffect } from "react";
import { scrollAnimation } from "../common/scrollAnims";
import { preloaderAnimation } from "../common/preloader";
import { countersAnimation } from "../common/counters";
import { parallaxAnimation } from "../common/parallax";
import { anchorSscroll } from "../common/utilits";

import Footer from "./footers/Index";
import Header from "./headers/Index";
import Preloader from "./preloader/Index";
import LeftPanel from "./left-bar/Index";
import RightPanel from "./right-bar/Index";
import BackToTop from "./back-to-top/Index";

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  fullWidth,
  rightPanelBackground,
  rightPanelImg,
  fullWidth100,
  extraClass,
}) => {
  let bodyClass = false;
  let containerClass = false;

  if ( fullWidth && fullWidth100 ) {
    bodyClass = ['mil-fw-page', 'mil-100-page'];
    containerClass = 'mil-container-100';
  } else if ( fullWidth ) {
    bodyClass = 'mil-fw-page';
    containerClass = 'mil-container-fw';
  } else {
    bodyClass = false;
  }

  useEffect(() => {
    //preloaderAnimation();
    scrollAnimation();
    countersAnimation();
    parallaxAnimation();
    anchorSscroll();

    if ( document != undefined && bodyClass ) {
      document.querySelector('body').classList.add(...bodyClass);
    } else {
      document.querySelector('body').classList.remove('mil-fw-page');
      document.querySelector('body').classList.remove('mil-100-page');
    }
  }, []);

  return (
    <div className="mil-wrapper" id="top">
      {/* <Preloader /> */}

      <div className="mil-frame">

        {!noHeader && (
          <Header
            layout={header}
            extraclassName={extraClass}
          />
        )}

        <LeftPanel />
        
        <BackToTop />
      </div>

      <div className="mil-content">
        <div className="mil-scroll-wrapper transition-fade" id="swupMain">
          <div className={containerClass ? containerClass : "mil-container"}>
            {children}

            {!noFooter && <Footer layout={footer} />}
          </div>
        </div>
        
        {!fullWidth &&
        <RightPanel background={rightPanelBackground} img={rightPanelImg} />
        }

      </div>
    </div>
  );
};
export default Layouts;
