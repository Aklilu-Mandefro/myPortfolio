import Layouts from "@layouts/Layouts";

import { getSortedPostsData } from "@library/posts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const Story = ( props ) => {
  return (
    <Layouts 
      rightPanelBackground={"/img/person/bg-4.jpg"}
      rightPanelImg={"/img/person/4.png"}
    >
      <PageBanner pageTitle={"Success Story"} />
      
      {/* story */}
      <section>
          <div className="row">
              <div className="col-xl-6">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Education:</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>University of Gondar</h4>
                                  <div className="mil-text-sm">2012 - 2016</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Dolor sit amet, consectetur adipisicing elit laudantium ipsa ad debitis unde? Iste voluptatibus minus.</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Mandefro design school</h4>
                                  <div className="mil-text-sm">2007 - 2013</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Dolor sit amet, consectetur adipisicing elit iusto optio, dolorum provident.</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Web developer courses</h4>
                                  <div className="mil-text-sm">2013</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Adipisicing elit iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Academy of Art</h4>
                                  <div className="mil-text-sm">2015 - 2018</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                          </li>
                      </ul>
                  </div>

              </div>
              <div className="col-xl-6">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Work:</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Mandefro Studio</h4>
                                  <div className="mil-text-sm">2018 - 2019</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora aste voluptatibus laudantium ipsa ad debitis unde. Iste voluptatibus minus veritatis qui ut.</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>The Twins PLC</h4>
                                  <div className="mil-text-sm">2019 - 2021</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic tempora aste voluptatibus laudantium ipsa ad debitis unde Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora. Laudantium Iste voluptatibus minus veritatis qui ut. Rerum aut hic quasi placeat iure tempora laudantium ipsa Iste voluptatibus minus veritatis qui ut.</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>xyz market</h4>
                                  <div className="mil-text-sm">2021 - Today</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. Dolor sit amet, consectetur adipisicing elit.</p>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
      </section>
      {/* story end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Story;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts
    }
  }
}