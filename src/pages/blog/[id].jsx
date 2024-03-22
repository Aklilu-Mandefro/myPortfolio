import Layouts from "@layouts/Layouts";
import { getAllPostsIds, getPostData, getRelatedPosts } from "@library/posts";
import Date from '@library/date';
import Link from "next/link";
import RelatedPostsSection from "@components/sections/RelatedPosts";
import SubscribeSection from "@components/sections/Subscribe";

const PostsDetail = ( props ) => {
  
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
                <li className="mil-puplication-author">
                  <img src={postData.author.avatar} alt={postData.author.name} />
                  <span className="mil-upper mil-dark">{postData.author.name}</span>
                </li>
                <li><span className="mil-upper mil-dark">Date:</span>&nbsp;&nbsp;<span className="mil-upper"><Date dateString={postData.date} /></span></li>
                <li className="mil-upper mil-accent">{postData.category}</li>
            </ul>
            <h1 className="mil-h1-sm mil-up mil-mb-60">{postData.title}</h1>
            <ul className="mil-breadcrumbs mil-up">
                <li><Link href="/">Homepage</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li>Publication</li>
            </ul>

        </div>
      </section>
      {/* banner end */}
      
      {/* publication */}
      <section className="mil-p-0-60">

          {postData.fullWidth == true &&
          <img src={postData.image} alt={postData.title} style={{"width": "100%"}} className="mil-up mil-mb-90" />
          }
          
          <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : postData.contentHtml}} />

          {typeof postData.gallery != "undefined" &&
            <>
              {postData.gallery.enabled == 1 &&
                <>
                  <div className="row">
                      {postData.gallery.items.map((item, key) => (
                      <div key={`gallery-item-${key}`} className="col-lg-6">
                          <img src={item.image} alt={item.alt} style={{"width": "100%"}} className="mil-up mil-mb-30" />
                      </div>
                      ))}
                  </div>
                </>
              }
            </>
          }

          {typeof postData.additional != "undefined" &&
            <>
              {postData.additional.enabled == 1 &&
              <div className="mil-text mil-up" dangerouslySetInnerHTML={{__html : postData.additional.content}} />
              }
            </>
          }

      </section>
      {/* publication end */}

      <RelatedPostsSection items={props.related} />
      
      <SubscribeSection />
    </Layouts>
  );
};
export default PostsDetail;

export async function getStaticPaths() {
    const paths = getAllPostsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const relatedPosts = await getRelatedPosts(params.id)

    return {
      props: {
        data: postData,
        related: relatedPosts
      }
    }
}