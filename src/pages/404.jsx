import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const E404 = () => {
  return (
    <Layouts 
      noFooter
      rightPanelBackground={"/img/person/bg-3.jpg"}
      rightPanelImg={"/img/person/3.png"}
    >
      {/* banner */}
      <section className="mil-side-banner mil-center">
        <div className="mil-banner-top mil-up" />
        <div className="mil-banner-title">
          <h3 className="mil-dark mil-up mil-mb-30">Page not found</h3>
          <h1 className="mil-404 mil-up mil-mb-30">404</h1>
          <p className="mil-upper mil-dark mil-up">Oops! Something went wrong :(</p>
        </div>
        <div className="mil-up mil-oval-frame">
          <div className="mil-circle-text">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve" className="mil-ct-svg mil-rotate" data-value="360">
              <defs>
                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
              </defs>
              <circle cx="150" cy="100" r="75" fill="none" />
              <g>
                <use xlinkHref="#circlePath" fill="none" />
                <text style={{"letterSpacing": "7.8px"}}>
                  {/* circle text */}
                  <textPath xlinkHref="#circlePath">Go back to the homepage - </textPath>
                </text>
              </g>
            </svg>
            <Link href="/" className="mil-button mil-button-left">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* banner end */}
    </Layouts>
  );
};
export default E404;
