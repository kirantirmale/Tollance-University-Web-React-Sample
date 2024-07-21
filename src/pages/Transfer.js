import React from 'react'
import { Breadcrumb } from '../components/common/Breadcrumb'
import { PopularArticles } from '../components/common/PopularArticles'
import { Link } from 'react-router-dom'

export const Transfer = () => {
  return (
    <div>
      <Breadcrumb />
      <section class="tl-11-banner">
        <div class="container">
          <div class="tl-11-banner-heading">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <h1 class="tl-11-banner-title">EDUCATION MAGAZINES</h1>
              </div>
            </div>
          </div>

          <div class="tl-11-banner-articles">
            <div class="row">
              <div class="col-lg-3">
                <div class="tl-11-banner-articles-col">
                  <div class="tl-11-banner-article">
                    <div class="tl-11-banner-article-img">
                      <img
                        src="/assets/images/tl-11/banner-img-1.jpg"
                        alt="Article Poster"
                      />
                    </div>

                    <div class="tl-11-banner-article-txt">
                      <span class="tl-11-banner-article-category">
                        Revolution
                      </span>
                      <h4 class="tl-11-banner-article-title">
                        <Link to="/leadership">
                          Range Input That Looks Consistent Across All Browser.
                        </Link>
                      </h4>
                      <h6 class="tl-11-banner-article-author">
                        <span>By</span> Hugh Millie-Yate
                      </h6>
                    </div>
                  </div>

                  <div class="tl-11-banner-article">
                    <div class="tl-11-banner-article-img">
                      <img
                        src="/assets/images/tl-11/banner-img-2.jpg"
                        alt="Article Poster"
                      />
                    </div>

                    <div class="tl-11-banner-article-txt">
                      <span class="tl-11-banner-article-category">
                        Learning
                      </span>
                      <h4 class="tl-11-banner-article-title">
                        <Link to="/leadership">
                          The Top Technical Skills Employees Need in 2023
                        </Link>
                      </h4>
                      <h6 class="tl-11-banner-article-author">
                        <span>By</span> Hugh Millie-Yate
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="tl-11-banner-article-center">
                  <div class="tl-11-banner-article-center-img">
                    <img
                      src="/assets/images/tl-11/banner-img-3.jpg"
                      alt="Article Poster"
                    />
                  </div>

                  <div class="tl-11-banner-article-center-txt">
                    <div class="tl-11-banner-article-center-infos">
                      <span class="tl-11-banner-article-center-date">
                        March 24, 2023
                      </span>
                      <span class="tl-11-banner-article-center-category">
                        Education
                      </span>
                    </div>

                    <h2 class="tl-11-banner-article-center-title">
                      <Link to="/leadership">
                        The Edu-Revolution Redefining Education for the Future
                      </Link>
                    </h2>
                    <p class="tl-11-banner-article-center-descr">
                      Embark on a journey of transformative learning with
                      Tollence University, leading the way in the education
                      revolution
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="tl-11-banner-articles-col">
                  <div class="tl-11-banner-article">
                    <div class="tl-11-banner-article-img">
                      <img
                        src="/assets/images/tl-11/banner-img-4.jpg"
                        alt="Article Poster"
                      />
                    </div>

                    <div class="tl-11-banner-article-txt">
                      <span class="tl-11-banner-article-category">
                        Learning
                      </span>
                      <h4 class="tl-11-banner-article-title">
                        <Link to="/leadership">
                          Great Tableau Dashboard Examples to Try out Today
                        </Link>
                      </h4>
                      <h6 class="tl-11-banner-article-author">
                        <span>By</span> Hugh Millie-Yate
                      </h6>
                    </div>
                  </div>

                  <div class="tl-11-banner-article">
                    <div class="tl-11-banner-article-img">
                      <img
                        src="/assets/images/tl-11/banner-img-5.jpg"
                        alt="Article Poster"
                      />
                    </div>

                    <div class="tl-11-banner-article-txt">
                      <span class="tl-11-banner-article-category">
                        Learning
                      </span>
                      <h4 class="tl-11-banner-article-title">
                        <Link to="/leadership">
                          The Learning Lab: Where Curiosity Meets Education
                        </Link>
                      </h4>
                      <h6 class="tl-11-banner-article-author">
                        <span>By</span> Hugh Millie-Yate
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container ">
        <section class="tl-11-pop-articles tl-11-section-spacing">
          <PopularArticles />
          <div class="tl-11-sidebar">
            <div class="tl-11-sidebar-area tl-11-sidebar-area-articles">
              <h4 class="tl-11-sidebar-area-title">Recent Posts</h4>

              <div class="tl-11-sidebar-area-article">
                <img
                  src="/assets/images/tl-11/sidebar-article-1.jpg"
                  alt="Article Poster"
                  class="tl-11-sidebar-area-article-img"
                />

                <div class="tl-11-sidebar-area-article-txt">
                  <span class="tl-11-sidebar-area-article-date">
                    March 24, 2023
                  </span>
                  <h5 class="tl-11-sidebar-area-article-title">
                    Eduphoria Inspiring Passion for Education.
                  </h5>
                </div>
              </div>

              <div class="tl-11-sidebar-area-article">
                <img
                  src="/assets/images/tl-11/sidebar-article-2.jpg"
                  alt="Article Poster"
                  class="tl-11-sidebar-area-article-img"
                />

                <div class="tl-11-sidebar-area-article-txt">
                  <span class="tl-11-sidebar-area-article-date">
                    June 16, 2023
                  </span>
                  <h5 class="tl-11-sidebar-area-article-title">
                    Education Renaissance Reviving the Art of Learning.
                  </h5>
                </div>
              </div>

              <div class="tl-11-sidebar-area-article">
                <img
                  src="/assets/images/tl-11/sidebar-article-3.jpg"
                  alt="Article Poster"
                  class="tl-11-sidebar-area-article-img"
                />

                <div class="tl-11-sidebar-area-article-txt">
                  <span class="tl-11-sidebar-area-article-date">
                    April 18, 2023
                  </span>
                  <h5 class="tl-11-sidebar-area-article-title">
                    Education Trailblazers Innovating the Learning.
                  </h5>
                </div>
              </div>
            </div>

            <div class="tl-11-sidebar-area tl-11-sidebar-magazine-cover">
              <img
                src="/assets/images/tl-11/magazine.jpg"
                alt="Magazine Cover"
              />
            </div>
          </div>
        </section>
      </div>
      <section class="tl-11-editorial tl-11-section-spacing">
        <div class="container">
          <div class="tl-11-section-heading">
            <h2 class="tl-11-section-title">Editorial Team</h2>
          </div>

          <div class="kb-9-staff-row">
            <div class="row gx-3 gx-lg-4 gy-4">
              <div class="col-md-4 col-6 col-xxs-12">
                <div class="tl-3-single-staff">
                  <div class="tl-3-single-staff-img">
                    <img src="/assets/images/prof-1.jpg" alt="Staff Poster" />
                    <ul class="tl-3-single-staff-socials tl-11-single-edi-socials">
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="tl-3-single-staff-txt tl-11-single-edi-txt">
                    <h5 class="tl-3-single-staff-name">Douglas Lyphe</h5>
                    <span class="tl-3-single-staff-role">Headmaster</span>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-6 col-xxs-12">
                <div class="tl-3-single-staff">
                  <div class="tl-3-single-staff-img">
                    <img src="/assets/images/prof-2.jpg" alt="Staff Poster" />
                    <ul class="tl-3-single-staff-socials tl-11-single-edi-socials">
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="tl-3-single-staff-txt tl-11-single-edi-txt">
                    <h5 class="tl-3-single-staff-name">Nathaneal Down</h5>
                    <span class="tl-3-single-staff-role">Language Teacher</span>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-6 col-xxs-12">
                <div class="tl-3-single-staff">
                  <div class="tl-3-single-staff-img">
                    <img src="/assets/images/pro.jpg" alt="Staff Poster" />
                    <ul class="tl-3-single-staff-socials tl-11-single-edi-socials">
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="tl-3-single-staff-txt tl-11-single-edi-txt">
                    <h5 class="tl-3-single-staff-name">Parsley Montana</h5>
                    <span class="tl-3-single-staff-role">
                      Special Education Teacher
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="tl-12-blogs tl-11-section-spacing"
        data-background="assets/images/tl-12/blogs-bg.png"
        style={{ backgroundImage: `url(/assets/images/tl-12/blogs-bg.png)` }}
      >
        <div class="container">
          <div class="row g-0 gy-4 justify-content-center">
            <div class="col-xl-5 col-lg-10">
              <div class="tl-12-blogs-txt">
                <div class="tl-12-section-heading tl-12-blogs-heading">
                  <h2 class="tl-12-section-title">
                    Latest News Blogs & Articles.
                  </h2>
                  <p class="tl-12-section-descr">
                    Dive into a wealth of knowledge and stay informed with our
                    curated collection of news, blogs, and articles covering a
                    diverse range of topics.Explore thought-provoking insights,
                    stay abreast of current events, and discover expert opinions
                    on trending issues.
                  </p>
                  <Link to="/leadership">
                    View All News <i class="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>

                <div class="tl-12-blogs-slider-nav"></div>
              </div>
            </div>

            <div class="col-xl-7 col-lg-10">
              <div class="tl-12-blogs-slider">
                <div class="tl-12-blogs-slide">
                  <div class="tl-3-single-blog tl-12-blog">
                    <div class="tl-3-single-blog-img">
                      <img
                        src="assets/images/tl-12/event-1.jpg"
                        alt="Blog Poster"
                      />
                      <span class="tl-3-single-blog-tag">Education</span>
                    </div>

                    <div class="tl-3-single-blog-txt">
                      <div class="tl-3-single-blog-info">
                        <div class="tl-3-single-blog-single-info">
                          <i class="fa-regular fa-clock"></i> 24 April 2023
                        </div>
                        <div class="tl-3-single-blog-single-info">
                          <i class="fa-regular fa-comments"></i> 24 Comments
                        </div>
                      </div>
                      <h4 class="tl-3-single-blog-title">
                        Enhancing Student Success with Learning Management
                        Systems.
                      </h4>
                      <Link to="/leadership" class="tl-3-single-blog-btn">
                        Read More <i class="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="tl-12-blogs-slide">
                  <div class="tl-3-single-blog tl-12-blog">
                    <div class="tl-3-single-blog-img">
                      <img
                        src="assets/images/tl-12/event-2.jpg"
                        alt="Blog Poster"
                      />
                      <span class="tl-3-single-blog-tag">Education</span>
                    </div>

                    <div class="tl-3-single-blog-txt">
                      <div class="tl-3-single-blog-info">
                        <div class="tl-3-single-blog-single-info">
                          <i class="fa-regular fa-clock"></i> 24 April 2023
                        </div>
                        <div class="tl-3-single-blog-single-info">
                          <i class="fa-regular fa-comments"></i> 24 Comments
                        </div>
                      </div>
                      <h4 class="tl-3-single-blog-title">
                        The Future of Education Exploring The Impact of LMS.
                      </h4>
                      <Link to="/leadership" class="tl-3-single-blog-btn">
                        Read More <i class="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="tl-12-blogs-slide">
                  <div class="tl-3-single-blog tl-12-blog">
                    <div class="tl-3-single-blog-img">
                      <img
                        src="assets/images/tl-12/event-3.jpg"
                        alt="Blog Poster"
                      />
                      <span class="tl-3-single-blog-tag">Education</span>
                    </div>

                    <div class="tl-3-single-blog-txt">
                      <div class="tl-3-single-blog-info">
                        <div class="tl-3-single-blog-single-info">
                          <i class="fa-regular fa-clock"></i> 24 April 2023
                        </div>
                        <div class="tl-3-single-blog-single-info">
                          <i class="fa-regular fa-comments"></i> 24 Comments
                        </div>
                      </div>
                      <h4 class="tl-3-single-blog-title">
                        Maximizing Learning Outcomes Harnessing the Benefits of
                        LMS.
                      </h4>
                      <Link to="/leadership" class="tl-3-single-blog-btn">
                        Read More <i class="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
