import Data from "@data/sections/call-to-action.json";
import Link from "next/link";

const CallToActionSection = ( { bg } ) => {
  return (
    <>
        <div className="mil-divider mil-up mil-mb-90" />

        {/* call to action */}
        <div className="mil-p-0-90">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="mil-center">
                        <h2 className="mil-up mil-mb-30">{Data.title}</h2>
                        <div className="mil-up">
                            <Link href={Data.button.link} className="mil-btn mil-sm-btn">{Data.button.label}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* call to action end */}
    </>
  );
};

export default CallToActionSection;