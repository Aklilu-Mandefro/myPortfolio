const CursorModule = () => {
    return (
        <>
        {/* preloader */}
        <div className="mil-preloader-frame">
            <div className="mil-preloader-content" style={{"transform": "scale(.6) translateY(200px)", "opacity": "0"}}>
                <div className="mil-preloader">
                    <div className="mil-circ-1"></div>
                    <div className="mil-circ-2"></div>
                    <div className="mil-circ-3"></div>
                    <div className="mil-circ-4"></div>
                </div>
                <div className="mil-upper">Loading</div>
            </div>
        </div>
        {/* preloader end */}
        </>
    );
};
export default CursorModule;