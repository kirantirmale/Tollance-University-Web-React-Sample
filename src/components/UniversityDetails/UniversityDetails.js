import { Link } from 'react-router-dom'

const UniversityDetails = () => {
  return (
    <section className="tl-4-about tl-3-section-spacing">
      <div className="container">
        <div className="row gy-4 gy-sm-5 align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="tl-3-about-img tl-4-about-img">
              <img
                src="assets/images/professors/professor-2.jpg"
                alt="School Poster"
              />
              <img
                src="assets/images/professors/professor-1.jpg"
                alt="School Poster"
              />
            </div>
          </div>

          <div className="col-lg-6 order-lg-2 order-1">
            <div className="tl-4-about-txt">
              <h2 className="tl-4-section-title">
                Leadership and Teaching Excellence
              </h2>
              <p className="tl-4-about-descr">
                At Tollense University, we prioritize excellence in leadership
                and teaching, recognizing their profound impact on education.
                Our programs integrate theory with practical experience,
                equipping future educators and leaders with the skills and
                insight needed to thrive in today's educational landscape.
                Through personalized mentorship and immersive learning
                opportunities, our graduates emerge as adept leaders and
                inspiring educators, poised to shape the future of learning.
                Join us as we cultivate a new generation of educational
                innovators committed to excellence.
              </p>

              <div className="tl-4-about-stats">
                <div className="tl-4-about-stat">
                  <div className="tl-4-about-stat-txt">
                    <span className="tl-4-about-stat-num">52+</span>
                    <span className="tl-4-about-stat-name">Our Teachers</span>
                  </div>
                </div>

                <div className="tl-4-about-stat">
                  <div className="tl-4-about-stat-txt">
                    <span className="tl-4-about-stat-num">85+</span>
                    <span className="tl-4-about-stat-name">
                      National Awards
                    </span>
                  </div>
                </div>

                <div className="tl-4-about-stat">
                  <div className="tl-4-about-stat-txt">
                    <span className="tl-4-about-stat-num">2k+</span>
                    <span className="tl-4-about-stat-name">
                      Student Enrolled
                    </span>
                  </div>
                </div>
              </div>

              <div className="tl-4-about-txt-bottom">
                <Link to="/leadership" className="tl-def-btn tl-4-def-btn">
                  More Details <i class="fa-solid fa-angles-right"></i>
                </Link>

                <div className="tl-4-about-support">
                  <img
                    src="assets/images/tl-4/support.png"
                    alt="support icon"
                  />
                  <div>
                    <span className="tl-4-about-support-txt">Get Support</span>
                    <a
                      href="mailto:info@gmail.com"
                      className="tl-4-about-support-mail"
                    >
                      info.tollenseuniversity@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniversityDetails
