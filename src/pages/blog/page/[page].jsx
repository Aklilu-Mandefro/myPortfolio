import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'

import PageBanner from "@components/PageBanner";
import SubscribeSection from "@components/sections/Subscribe";
import Layouts from "@layouts/Layouts";

import { getPaginatedPostsData } from "@library/posts";

export const PER_PAGE = 8

import { Content } from "../../blog"

const Blog = ( { posts, currentPage, totalPosts } ) => {

  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-2.jpg"}
      rightPanelImg={"/img/person/1.png"}
    >
      <PageBanner pageTitle={"Exploring the World <br>Through Our Blog"} breadTitle={"Blog"} align={"center"} />

      {/* blog */}
      <section>
          <div className="row justify-content-between align-items-center">
              <PaginatedBlog
                items={posts}
              />

              <Pagination
                currentPage={currentPage}
                totalItems={totalPosts}
                perPage={PER_PAGE}
                renderPageLink={(page) => `/blog/page/${page}`}
              />
          </div>
      </section>
      {/* blog end */}

      <SubscribeSection />
      
    </Layouts>
  );
};
export default Blog;

export async function getStaticPaths() {
    return {
        paths: Array.from({ length: 5 }).map((_, i) => `/blog/page/${i + 2}`),
        fallback: 'blocking',
    }
}

export async function getStaticProps( { params } ) {
    const page = Number(params?.page) || 1
    const { posts, total } = getPaginatedPostsData( PER_PAGE, page );
  
    if (!posts.length) {
      return {
        notFound: true,
      }
    }
  
    if (page === 1) {
      return {
        redirect: {
          destination: '/blog',
          permanent: false,
        },
      }
    }
  
    return {
      props: {
        posts,
        totalPosts: total,
        currentPage: page,
      },
      revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
    }
}