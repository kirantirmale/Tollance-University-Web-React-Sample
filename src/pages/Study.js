import React from 'react'
import { Breadcrumb } from '../components/common/Breadcrumb'

export const Study = () => {
  return (
    <div>
      <Breadcrumb />
      <section class="tl-1-about pt-120 pb-120">
        <div class="container">
          <div class="row align-items-center tl-1-about-row">
            <div class="col-lg-6">
              <div class="tl-1-about-img">
                <img
                  src="/assets/images/tl-13/banner-img-4.jpg"
                  alt="Banner Poster"
                  class="tl-1-about-main-img"
                />
                <img
                  src="/assets/images/tl-1/sticker.png"
                  alt="sticker"
                  class="tl-1-about-sticker"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="tl-1-about-txt">
                <h2 class="tl-1-section-title">
                  Revolutionizing Education Through Online Learning.
                </h2>
                <p class="tl-1-about-descr">
                  In today’s era of cut-throat competition, you need to gain
                  skills relevant to the current industry trends. Online
                  learning allows you to update your skills a per industry
                  standards.Study as per your convenience without worrying about
                  any timing restraints, unlike regular programs. Choose your
                  place and time and learn at your convenience within your
                  comfort zone.
                </p>

                <div class="tl-1-about-author">
                  <div class="tl-1-about-author-intro">
                    <div class="tl-1-about-author-img">
                      <img
                        src="/assets/images/tl-3/author-img.png"
                        alt="Author poster"
                      />
                    </div>
                    <div class="tl-1-about-author-info">
                      <h5 class="tl-1-about-author-name">Hugh Millie-Yate</h5>
                      <span class="tl-1-about-author-role">Vice Principal</span>
                    </div>
                  </div>
                  <div class="tl-1-about-author-signature">
                    <img
                      src="/assets/images/tl-3/signature.png"
                      alt="signature"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tl-1-stats">
            <div class="tl-1-stat">
              <span class="tl-1-stat-num">29+</span>
              <h6 class="tl-1-stat-name">Year Experiences</h6>
            </div>
            <div class="tl-1-stat">
              <span class="tl-1-stat-num">5k+</span>
              <h6 class="tl-1-stat-name">Enrolled Learners</h6>
            </div>
            <div class="tl-1-stat">
              <span class="tl-1-stat-num">36+</span>
              <h6 class="tl-1-stat-name">Education Awards</h6>
            </div>
            <div class="tl-1-stat">
              <span class="tl-1-stat-num">8k+</span>
              <h6 class="tl-1-stat-name">Video Tutorials</h6>
            </div>
          </div>
        </div>
      </section>
      <section
        class="tl-9-services tl-9-section-spacing bg-defaults"
        data-background="/assets/images/tl-9/service-bg.jpg"
        style={{ backgroundImage: `url(/assets/images/tl-9/service-bg.jpg)` }}
      >
        <div class="container">
          <div class="tl-9-section-heading">
            <div class="row gy-4 align-items-center">
              <div class="col-md-7">
                <h2 class="tl-9-section-title" data-text="Our Services">
                  We Give You The Best Facilities For Learning.
                </h2>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-4 col-6 col-xxs-12">
              <div class="tl-9-service">
                <img
                  class="tl-9-service-icon"
                  src="/assets/images/tl-9/service-1.png"
                  alt="Icon"
                />
                <h4 class="tl-9-service-title">
                  Multimedia Learning Center and Library
                </h4>
                <p class="tl-9-service-descr">
                  Immerse yourself in a world of knowledge and collaboration at
                  our Multimedia Learning Center, equipped with cutting-edge
                  technology and resources to support your academic journey.
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-6 col-xxs-12">
              <div class="tl-9-service">
                <img
                  class="tl-9-service-icon"
                  src="/assets/images/tl-9/service-4.png"
                  alt="Icon"
                />
                <h4 class="tl-9-service-title">Innovation Hub Center</h4>
                <p class="tl-9-service-descr">
                  Discover a ecosystem of innovation & entrepreneurship at our
                  Innovation Hub, providing resources, & networking
                  opportunities to fuel your entrepreneurial aspirations.
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-6 col-xxs-12">
              <div class="tl-9-service">
                <img
                  class="tl-9-service-icon"
                  src="/assets/images/tl-9/service-2.png"
                  alt="Icon"
                />
                <h4 class="tl-9-service-title">
                  Student Community Center, Social Hub
                </h4>
                <p class="tl-9-service-descr">
                  Engage with fellow students and build lifelong friendships at
                  our Student Community Center, a vibrant community hub of
                  activity and social interaction on campus.
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-6 col-xxs-12">
              <div class="tl-9-service">
                <img
                  class="tl-9-service-icon"
                  src="/assets/images/tl-9/service-3.png"
                  alt="Icon"
                />
                <h4 class="tl-9-service-title">Performing Arts Center</h4>
                <p class="tl-9-service-descr">
                  Experience the magic of live performances and cultural events
                  at our Arts Center, showcasing the talents of students and
                  artists from around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="tl-3-events tl-3-section-spacing pb-50">
        <div class="container">
          <h2 class="tl-4-section-title">
            Upcoming <span class="last-word">Events</span>
          </h2>
          <div class="tl-3-events-cards">
            <div class="row">
              <div class="col-md-6">
                <div class="tl-3-single-event">
                  <div class="tl-3-single-event-date">
                    <span class="date">05</span>
                    <span class="month-year">March, 2023</span>
                  </div>

                  <div class="tl-3-single-event-txt">
                    <div class="tl-3-single-event-info">
                      <h6 class="tl-3-single-event-location">
                        <i class="fa-solid fa-location-dot"></i> London, UK
                      </h6>
                      <h6 class="tl-3-single-event-time">
                        <i class="fa-regular fa-clock"></i> 6.00 am - 8.00 pm
                      </h6>
                    </div>

                    <h3 class="tl-3-single-event-title">
                      Connecting Education and Real-World Challenges.
                    </h3>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="tl-3-single-event">
                  <div class="tl-3-single-event-date">
                    <span class="date">25</span>
                    <span class="month-year">March, 2023</span>
                  </div>

                  <div class="tl-3-single-event-txt">
                    <div class="tl-3-single-event-info">
                      <h6 class="tl-3-single-event-location">
                        <i class="fa-solid fa-location-dot"></i> London, UK
                      </h6>
                      <h6 class="tl-3-single-event-time">
                        <i class="fa-regular fa-clock"></i> 6.00 am - 8.00 pm
                      </h6>
                    </div>

                    <h3 class="tl-3-single-event-title">
                      Learning Digital Adapting Education for the 21st Century.
                    </h3>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="tl-3-single-event">
                  <div class="tl-3-single-event-date">
                    <span class="date">14</span>
                    <span class="month-year">April, 2023</span>
                  </div>

                  <div class="tl-3-single-event-txt">
                    <div class="tl-3-single-event-info">
                      <h6 class="tl-3-single-event-location">
                        <i class="fa-solid fa-location-dot"></i> London, UK
                      </h6>
                      <h6 class="tl-3-single-event-time">
                        <i class="fa-regular fa-clock"></i> 6.00 am - 8.00 pm
                      </h6>
                    </div>

                    <h3 class="tl-3-single-event-title">
                      Education Fostering Inclusivity and Understanding.
                    </h3>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="tl-3-single-event">
                  <div class="tl-3-single-event-date">
                    <span class="date">30</span>
                    <span class="month-year">June, 2023</span>
                  </div>

                  <div class="tl-3-single-event-txt">
                    <div class="tl-3-single-event-info">
                      <h6 class="tl-3-single-event-location">
                        <i class="fa-solid fa-location-dot"></i> London, UK
                      </h6>
                      <h6 class="tl-3-single-event-time">
                        <i class="fa-regular fa-clock"></i> 6.00 am - 8.00 pm
                      </h6>
                    </div>

                    <h3 class="tl-3-single-event-title">
                      Empowering Minds: Unleashing the Potential of Education.
                    </h3>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="tl-3-single-event">
                  <div class="tl-3-single-event-date">
                    <span class="date">05</span>
                    <span class="month-year">March, 2023</span>
                  </div>

                  <div class="tl-3-single-event-txt">
                    <div class="tl-3-single-event-info">
                      <h6 class="tl-3-single-event-location">
                        <i class="fa-solid fa-location-dot"></i> London, UK
                      </h6>
                      <h6 class="tl-3-single-event-time">
                        <i class="fa-regular fa-clock"></i> 6.00 am - 8.00 pm
                      </h6>
                    </div>

                    <h3 class="tl-3-single-event-title">
                      Connecting Education and Real-World Challenges.
                    </h3>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="tl-3-single-event">
                  <div class="tl-3-single-event-date">
                    <span class="date">25</span>
                    <span class="month-year">March, 2023</span>
                  </div>

                  <div class="tl-3-single-event-txt">
                    <div class="tl-3-single-event-info">
                      <h6 class="tl-3-single-event-location">
                        <i class="fa-solid fa-location-dot"></i> London, UK
                      </h6>
                      <h6 class="tl-3-single-event-time">
                        <i class="fa-regular fa-clock"></i> 6.00 am - 8.00 pm
                      </h6>
                    </div>

                    <h3 class="tl-3-single-event-title">
                      Learning Digital Adapting Education for the 21st Century.
                    </h3>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="tl-3-single-event">
                  <div class="tl-3-single-event-date">
                    <span class="date">14</span>
                    <span class="month-year">April, 2023</span>
                  </div>

                  <div class="tl-3-single-event-txt">
                    <div class="tl-3-single-event-info">
                      <h6 class="tl-3-single-event-location">
                        <i class="fa-solid fa-location-dot"></i> London, UK
                      </h6>
                      <h6 class="tl-3-single-event-time">
                        <i class="fa-regular fa-clock"></i> 6.00 am - 8.00 pm
                      </h6>
                    </div>

                    <h3 class="tl-3-single-event-title">
                      Education Fostering Inclusivity and Understanding.
                    </h3>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="tl-3-single-event">
                  <div class="tl-3-single-event-date">
                    <span class="date">30</span>
                    <span class="month-year">June, 2023</span>
                  </div>

                  <div class="tl-3-single-event-txt">
                    <div class="tl-3-single-event-info">
                      <h6 class="tl-3-single-event-location">
                        <i class="fa-solid fa-location-dot"></i> London, UK
                      </h6>
                      <h6 class="tl-3-single-event-time">
                        <i class="fa-regular fa-clock"></i> 6.00 am - 8.00 pm
                      </h6>
                    </div>

                    <h3 class="tl-3-single-event-title">
                      Empowering Minds: Unleashing the Potential of Education.
                    </h3>
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
