const rightPanelModule = ( { background, img } ) => {
    return (
        <>
        <div className="mil-right-banner" id="scene">
            {/* scrollbar */}
            <div className="mil-progress-track">
                <div className="mil-progress" />
            </div>
            {/* scrollbar end */}
            <div className="mil-banner-wrapper" data-depth="1">
                <div id="swupBg" className="mil-banner-frame">
                    <img src={background} alt="background" className={img ? "mil-banner-bg mil-blur" : "mil-banner-bg"} />
                </div>
            </div>
            <div className="mil-banner-wrapper" data-depth="0.2">
                {img != undefined &&
                <div id="swupPerson" className="mil-banner-frame">
                    <img src={img} alt="person" className="mil-banner-person" />
                </div>
                }
            </div>
        
        </div>
        </>
    );
};
export default rightPanelModule;