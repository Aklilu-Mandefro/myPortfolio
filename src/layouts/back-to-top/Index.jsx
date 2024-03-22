const backToTopModule = () => {
    return (
        <>
            {/* back to top */}
            <div className="mil-back-to-top">
                <a href="#top" className="mil-link mil-btt-icon">
                    <span>Back to top</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
            {/* back to top end */}
        </>
    );
};
export default backToTopModule;