import Head from 'next/head';
import Link from "next/link";
import { useRouter } from 'next/router';
import appData from "@data/app.json";

const PageBanner = ({ pageTitle, breadTitle, align }) => {
  const { asPath } = useRouter();
  let clearBreadTitle;

  if ( breadTitle != undefined ) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  const headTitle = `${appData.settings.siteName} - ${clearBreadTitle}`;

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      
      {/* banner */}
      <section className={`mil-banner-sm mil-${align}`}>
          <div className="mil-banner-top mil-up"></div>
          <div className="mil-banner-title">
              <h1 className="mil-h1-sm mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : pageTitle}} />
              <ul className="mil-breadcrumbs mil-up">
                  <li><Link href="/">Homepage</Link></li>
                  {asPath.indexOf('/blog/') != -1 &&
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  }
                  {asPath.indexOf('/projects/') != -1 &&
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  }
                  {asPath.indexOf('/services/') != -1 &&
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  }
                  <li dangerouslySetInnerHTML={{__html : clearBreadTitle}} />
              </ul>
          </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
