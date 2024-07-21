import React from 'react'
import { Link } from 'react-router-dom'

const NewsSection = () => {
  return (
    <section
      className="tl-4-blogs tl-3-section-spacing"
      data-bg-color="#F3F1F1"
    >
      <div className="container">
        <h2 className="tl-4-section-title">Read Our Latest News</h2>

        <div className="row g-xl-4 g-3 justify-content-center justify-content-md-around">
          <div className="col-lg-6 ">
            <div className="tl-4-blog">
              <div className="tl-4-blog-img">
                <img src="assets/images/prof-1.jpg" alt="Blog Thumbnail" />
                <span className="kb-10-pop-article-category tl-4-blog-category">
                  Education
                </span>
              </div>

              <div className="tl-single-blog-txt">
                <span className="tl-single-blog-date">
                  <i className="fa-regular fa-clock"></i> March 24, 2023
                </span>
                <h4 className="tl-single-blog-title">
                  <Link to="/transfer">
                    Adapting to a Digital Learning Landscape
                  </Link>
                </h4>
                <p className="tl-single-blog-descr">
                  Delve into the evolving landscape of online education,
                  discussing its advantages, challenges, and the potential it
                  holds for democratizing access to quality education worldwide.
                </p>
                <Link className="tl-single-blog-btn" to="/transfer">
                  Read More <i class="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="tl-4-blog">
              <div className="tl-4-blog-img">
                <img src="assets/images/prof-3.jpg" alt="Blog Thumbnail" />
                <span className="kb-10-pop-article-category tl-4-blog-category">
                  Education
                </span>
              </div>

              <div className="tl-single-blog-txt">
                <span className="tl-single-blog-date">
                  <i className="fa-regular fa-clock"></i> April 24, 2023
                </span>
                <h4 className="tl-single-blog-title">
                  <Link to="/transfer">
                    Preparing Students for a Globalized World.
                  </Link>
                </h4>
                <p className="tl-single-blog-descr">
                  How globalization is reshaping higher education, emphasizing
                  the importance of intercultural competence, global
                  perspectives, and international collaboration.
                </p>
                <Link className="tl-single-blog-btn" to="/transfer">
                  Read More <i class="fa-solid fa-angles-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
