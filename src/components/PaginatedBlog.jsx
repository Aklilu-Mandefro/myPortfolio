import Link from "next/link";
import Date from '@library/date';

const PaginationPage = ({ items }) => {
    return (
      <>
        {items.map((item, index) => (
        <div className="col-lg-6" key={`post-${index}`}>
            <Link href={`/blog/${item.id}`} className="mil-blog-card mil-mb-60">
                <div className="mil-cover mil-up">
                    <img src={item.image} alt={item.title} />
                    <div className="mil-link mil-icon-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>
                </div>
                <div className="mil-descr">
                    <h4 className="mil-up mil-mb-15">{item.title}</h4>
                    <p className="mil-up">{item.short}</p>
                </div>
            </Link>
        </div>
        ))}
      </>
    );
  };
  export default PaginationPage;
  