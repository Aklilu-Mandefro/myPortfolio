import Layouts from "@layouts/Layouts";

import Link from "next/link";

import { getAllProjectsIds, getProjectData, getRelatedProjects } from "@library/projects";

import RelatedProjectsSection from "@components/sections/RelatedProjects";

const ProjectDetail = ( props ) => {
  
  const postData = props.data;

  return (
    <Layouts
      fullWidth={postData.fullWidth}
      rightPanelBackground={postData.image}
    >
    
      {/* banner */}
      <section className="mil-banner-sm mil-center">
          <div className="mil-banner-top mil-up" />
          <div className="mil-banner-title">
              <ul className="mil-puplication-details mil-up mil-mb-60">
                  {postData.details.map((item, key) => (
                  <li key={`project-details-item-${key}`}>
                    {item.label != "$category" &&
                    <>
                      <span className="mil-upper mil-dark">{item.label} </span>
                      &nbsp;&nbsp;
                      <span className="mil-upper">{item.value}</span>
                    </>
                    }
                    {item.label == "$category" &&
                    <>
                      <span className="mil-upper mil-accent">{postData.category}</span>
                    </>
                    }
                  </li>
                  ))}
              </ul>
              <h1 className="mil-h1-sm mil-up mil-mb-60">{postData.title}</h1>
              <ul className="mil-breadcrumbs mil-up">
                  <li><Link href="/">Homepage</Link></li>
                  <li><Link href="/projects">Projects</Link></li>
                  <li>Project</li>
              </ul>
          </div>
      </section>
      {/* banner end */}
      
      {postData.fullWidth == true &&
      <img src={postData.image} alt={postData.title} style={{"width": "100%"}} className="mil-up mil-mb-90" />
      }

      {/* project */}
      <section className="mil-p-0-30">

          <div className="row justify-content-center">
              {typeof postData.description != "undefined" &&
                <>
                  {postData.description.enabled == 1 &&
                  <div className="col-lg-9">
                    <div className="mil-text-xl mil-dark mil-up mil-center mil-mb-90" dangerouslySetInnerHTML={{__html : postData.description.content}} />
                  </div>
                  }
                </>
              }
              {typeof postData.gallery != "undefined" &&
                <>
                  {postData.gallery.enabled == 1 &&
                    <>
                    {postData.gallery.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-6"}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }
              
              {typeof postData.description2 != "undefined" &&
                <>
                  {postData.description2.enabled == 1 &&
                  <>
                    <div className="col-lg-6">
                        <h3 className="mil-up mil-mb-30">{postData.description2.heading}</h3>
                    </div>
                    <div className="col-lg-6">
                        <div className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : postData.description2.content}} />
                        {postData.description2.button != undefined &&
                        <a href={postData.description2.button.link} target={postData.description2.button.target} className="mil-link mil-up mil-mb-60">
                            <span>{postData.description2.button.label}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                        }
                    </div>
                  </>
                  }
                </>
              }
              {typeof postData.gallery2 != "undefined" &&
                <>
                  {postData.gallery2.enabled == 1 &&
                    <>
                    {postData.gallery2.items.map((item, key) => (
                    <div key={`gallery-item-${key}`} className={key == 0 ? "col-lg-12" : "col-lg-6"}>
                        <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                    </div>
                    ))}
                    </>
                  }
                </>
              }

          </div>

      </section>
      {/* project end */}

      <RelatedProjectsSection items={props.related} />

    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
    const paths = getAllProjectsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getProjectData(params.id)
    const relatedPosts = await getRelatedProjects(params.id)

    return {
      props: {
        data: postData,
        related: relatedPosts
      }
    }
}