import React from 'react'
import { Accordion } from '../components/common/Accordion'
import { Breadcrumb } from '../components/common/Breadcrumb'
import { Link } from 'react-router-dom'

export const Research = () => {
  return (
    <div>
      <Breadcrumb />
      <div class="tl-event-details-container pt-120 pb-120">
        <div class="container">
          <div class="row g-0 tl-event-details-row">
            <div class="col-lg-8">
              <div class="tl-event-details-left">
                <div class="tl-event-details-video">
                  <iframe
                    src="https://www.youtube.com/embed/VqhDnaqhnd4?si=LL6xoZfjSJkMNNLJ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>

                  <h2 class="tl-event-details-title">
                    Mastering English Speaking
                  </h2>
                </div>

                <div class="tl-course-details-infos">
                  <div class="tl-course-details-info">
                    <h6 class="tl-course-details-info-name">
                      <i class="fa-regular fa-user"></i>instructor
                    </h6>
                    <h5 class="tl-course-details-info-value">Brian Cumin</h5>
                  </div>
                  <div class="tl-course-details-info">
                    <h6 class="tl-course-details-info-name">
                      <i class="fa-solid fa-layer-group"></i>Category
                    </h6>
                    <h5 class="tl-course-details-info-value">Language</h5>
                  </div>
                  <div class="tl-course-details-info">
                    <h6 class="tl-course-details-info-name">
                      <i class="fa-solid fa-user-graduate"></i>Students
                    </h6>
                    <h5 class="tl-course-details-info-value">245+</h5>
                  </div>
                  <div class="tl-course-details-info">
                    <h6 class="tl-course-details-info-name">
                      <i class="fa-solid fa-sharp fa-star"></i>Ratings
                    </h6>
                    <div class="tl-course-details-stars tl-course-details-info-value">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>

                <ul
                  class="nav nav-tabs tl-course-details-navs"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="overview-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#overview-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="overview-tab-pane"
                      aria-selected="true"
                    >
                      overview
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="curriculum-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#curriculum-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="curriculum-tab-pane"
                      aria-selected="false"
                    >
                      curriculum
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="instructor-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#instructor-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="instructor-tab-pane"
                      aria-selected="false"
                    >
                      instructor
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="reviews-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#reviews-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="reviews-tab-pane"
                      aria-selected="false"
                    >
                      reviews
                    </button>
                  </li>
                </ul>

                <div class="tab-content" id="tl-course-tab-content">
                  <div
                    class="tab-pane fade show active"
                    id="overview-tab-pane"
                    role="tabpanel"
                    aria-labelledby="overview-tab"
                    tabindex="0"
                  >
                    <div class="tl-event-details-descr tl-event-details-area">
                      <h3 class="tl-event-details-area-title">
                        About The Course
                      </h3>

                      <p class="tl-event-details-descr-txt">
                        Mastering English Speaking" is an intensive course
                        designed to empower learners with the confidence and
                        skills needed to excel in spoken English. Through a
                        comprehensive curriculum, students will enhance their
                        fluency, pronunciation, and conversational proficiency,
                        equipping them to communicate effectively in diverse
                        settings.
                      </p>

                      <p class="tl-event-details-descr-txt">
                        With interactive lessons, personalized feedback, and
                        practical exercises, participants will embark on a
                        transformative journey towards mastering the art of
                        English speaking, unlocking new opportunities for
                        personal and professional growth. Whether aiming to
                        excel in academia, business, or everyday interactions,
                        this course provides the tools and support necessary to
                        become a proficient and articulate English speaker.
                      </p>
                    </div>

                    <div class="tl-event-details-faq tl-event-details-area">
                      <h3 class="tl-event-details-area-title">
                        Things you'll get to learn from this course
                      </h3>

                      <Accordion />
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="curriculum-tab-pane"
                    role="tabpanel"
                    aria-labelledby="curriculum-tab"
                    tabindex="0"
                  >
                    <div class="accordion" id="accordionExample">
                      <div class="tl-event-details-area tl-course-details-curriculum">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Foundations of Fluent English Speaking
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-video"></i> Mastering
                                Pronunciation and Intonation
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  43:28m
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>

                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-video"></i> Building a
                                Strong Vocabulary for Everyday Communication
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  01:05hrs
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>

                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-file-contract"></i>{' '}
                                Understanding Basic Sentence Structure and
                                Grammar
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  01:05h
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="tl-event-details-area tl-course-details-curriculum">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Conversational Skills and Strategies
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-video"></i> Mastering
                                Pronunciation and Intonation
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  43:28m
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>

                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-video"></i> Building a
                                Strong Vocabulary for Everyday Communication
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  01:05hrs
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>

                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-file-contract"></i>{' '}
                                Understanding Basic Sentence Structure and
                                Grammar
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  01:05h
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="tl-event-details-area tl-course-details-curriculum">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Fluency Development through Real-world Scenarios
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-video"></i> Mastering
                                Pronunciation and Intonation
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  43:28m
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>

                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-video"></i> Building a
                                Strong Vocabulary for Everyday Communication
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  01:05hrs
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>

                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-file-contract"></i>{' '}
                                Understanding Basic Sentence Structure and
                                Grammar
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  01:05h
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="tl-event-details-area tl-course-details-curriculum">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Cultural Nuances and Cross-cultural Communication
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-video"></i> Mastering
                                Pronunciation and Intonation
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  43:28m
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>

                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-video"></i> Building a
                                Strong Vocabulary for Everyday Communication
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  01:05hrs
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>

                            <div class="tl-course-details-content">
                              <span class="tl-course-details-content-left">
                                <i class="fa-solid fa-file-contract"></i>{' '}
                                Understanding Basic Sentence Structure and
                                Grammar
                              </span>

                              <span class="tl-course-details-content-right">
                                <span class="tl-course-details-duration">
                                  01:05h
                                </span>
                                <span class="tl-course-details-availability">
                                  <i class="fa-solid fa-lock"></i>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="instructor-tab-pane"
                    role="tabpanel"
                    aria-labelledby="instructor-tab"
                    tabindex="0"
                  >
                    <div class="tl-course-details-instructor tl-event-details-area">
                      <div class="tl-course-details-instructor-heading">
                        <img
                          class="tl-course-details-instructor-img"
                          src="assets/images/tl-2/teacher-1.jpg"
                          alt="instructor Poster"
                        />

                        <div class="tl-course-details-instructor-info">
                          <h5 class="tl-course-details-instructor-name">
                            <Link to="/transfer">Brian Cumin</Link>
                          </h5>
                          <h6 class="tl-staff-profile-role">
                            Sr. Instructor at University
                          </h6>
                          <ul class="tl-course-details-instructor-socials">
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
                      </div>

                      <div class="tl-course-details-instructor-txt">
                        <p class="tl-course-details-instructor-intro">
                          Hello! I'm Brian Cumin, your guide in the "Mastering
                          English Speaking" course. As a seasoned language
                          enthusiast with 03+ years of experience, I'm here to
                          help you unlock the world of fluent English
                          communication. Get ready to embark on an exciting
                          journey where we'll build essential skills, explore
                          diverse topics, and boost your confidence in speaking
                          English. Let's make this learning experience impactful
                          and enjoyable together. Ready to get started? Let's
                          dive in!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="reviews-tab-pane"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                    tabindex="0"
                  >
                    <div class="tl-event-details-area tl-course-details-review">
                      <div class="tl-course-details-stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>

                      <p class="tl-2-testimony-txt">
                        It was my immense luck and fortune to be a part of
                        Educlab University where I can grow. The entire faculty
                        & department leaves no stone unturned to shape one's
                        future in my four years.
                      </p>

                      <div class="tl-2-testimony-reviewer">
                        <img
                          src="assets/images/tl-2/reviewer-2.jpg"
                          alt="Person"
                          class="tl-2-testimony-reviewer-img"
                        />
                        <div class="tl-2-testimony-reviewer-info">
                          <h6 class="tl-2-testimony-reviewer-name">
                            Alan Corey
                          </h6>
                          <p class="tl-2-testimony-reviewer-label">
                            B.Tech - Civil, 2015 - 2020
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="tl-event-details-area tl-course-details-review">
                      <div class="tl-course-details-stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>

                      <p class="tl-2-testimony-txt">
                        It was my immense luck and fortune to be a part of
                        Educlab University where I can grow. The entire faculty
                        & department leaves no stone unturned to shape one's
                        future in my four years.
                      </p>

                      <div class="tl-2-testimony-reviewer">
                        <img
                          src="assets/images/tl-2/reviewer-1.jpg"
                          alt="Person"
                          class="tl-2-testimony-reviewer-img"
                        />
                        <div class="tl-2-testimony-reviewer-info">
                          <h6 class="tl-2-testimony-reviewer-name">
                            Brian Cumin
                          </h6>
                          <p class="tl-2-testimony-reviewer-label">
                            B.Tech - Civil, 2015 - 2020
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tl-event-details-left mt-30">
                <div class="tl-course-details-top-courses tl-event-details-area mt-0">
                  <h3 class="tl-event-details-area-title">
                    Top Courses from the same instructor
                  </h3>

                  <div class="row g-4">
                    <div class="col-md-6">
                      <div class="tl-1-course">
                        <div class="tl-1-course-img">
                          <img
                            src="/assets/images/tl-13/about-img.jpg"
                            alt="Course Poster"
                          />
                          <span class="tl-1-course-price">$53.00</span>
                        </div>

                        <div class="tl-1-course-txt">
                          <span class="tl-1-course-author">
                            By <div>Brian Cumin</div>
                          </span>
                          <h4 class="tl-1-course-title">
                            <div>
                              Teaching Math and Science Inquiry-Based Approaches
                            </div>
                          </h4>
                          <div class="tl-1-course-stats">
                            <div class="tl-1-course-stat">
                              <span class="tl-1-course-stat-icon">
                                <i class="fa-solid fa-book-blank"></i>
                              </span>
                              <span class="tl-1-course-stat-txt">
                                6 Lessons
                              </span>
                            </div>

                            <div class="tl-1-course-stat">
                              <span class="tl-1-course-stat-icon">
                                <i class="fa-solid fa-user-group"></i>
                              </span>
                              <span class="tl-1-course-stat-txt">
                                32 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="tl-1-course">
                        <div class="tl-1-course-img">
                          <img
                            src="assets/images/tl-12/event-2.jpg"
                            alt="Course Poster"
                          />
                          <span class="tl-1-course-price">$53.00</span>
                        </div>

                        <div class="tl-1-course-txt">
                          <span class="tl-1-course-author">
                            By <div>Brian Cumin</div>
                          </span>
                          <h4 class="tl-1-course-title">
                            <div>
                              Teaching Math and Science Inquiry-Based Approaches
                            </div>
                          </h4>
                          <div class="tl-1-course-stats">
                            <div class="tl-1-course-stat">
                              <span class="tl-1-course-stat-icon">
                                <i class="fa-solid fa-book-blank"></i>
                              </span>
                              <span class="tl-1-course-stat-txt">
                                6 Lessons
                              </span>
                            </div>

                            <div class="tl-1-course-stat">
                              <span class="tl-1-course-stat-icon">
                                <i class="fa-solid fa-user-group"></i>
                              </span>
                              <span class="tl-1-course-stat-txt">
                                32 Students
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="tl-event-details-right">
                <div class="tl-course-details-sidebar-heading">
                  <iframe
                    src="https://www.youtube.com/embed/SEO9YPzSH-0?si=doOkRVmfpzt3BlZO"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>

                  <h3 class="tl-course-details-price">
                    $160{' '}
                    <span class="prev-price text-decoration-line-through">
                      $200
                    </span>
                  </h3>
                </div>

                <ul class="tl-event-details-infos p-3 mb-4">
                  <li class="tl-event-details-info">
                    <span class="key">
                      <i class="fa-regular fa-clock"></i> Duration:
                    </span>
                    <span class="value">4hrs 17mins</span>
                  </li>
                  <li class="tl-event-details-info">
                    <span class="key">
                      <i class="fa-solid fa-video"></i> Video Lectures:
                    </span>
                    <span class="value">90+</span>
                  </li>
                  <li class="tl-event-details-info">
                    <span class="key">
                      <i class="fa-solid fa-tv"></i> live Class
                    </span>
                    <span class="value">10+</span>
                  </li>
                  <li class="tl-event-details-info">
                    <span class="key">
                      <i class="fa-solid fa-file-contract"></i> Quizzes:
                    </span>
                    <span class="value">10+</span>
                  </li>
                  <li class="tl-event-details-info">
                    <span class="key">
                      <i class="fa-regular fa-user"></i> Enrolled:
                    </span>
                    <span class="value">30+</span>
                  </li>
                  <li class="tl-event-details-info">
                    <span class="key">
                      <i class="fa-solid fa-bars-progress"></i> Level:
                    </span>
                    <span class="value">Basic</span>
                  </li>
                  <li class="tl-event-details-info">
                    <span class="key">
                      <i class="fa-solid fa-globe"></i> Language:
                    </span>
                    <span class="value">English</span>
                  </li>
                </ul>

                <img
                  class="tl-course-details-payment-methods"
                  src="assets/images/card.png"
                  alt=""
                />
              </div>

              <div class="tl-event-details-right tl-upcoming-events">
                <h3 class="tl-upcoming-events-title">Popular Courses</h3>
                <div class="tl-upcoming-event tl-pop-course">
                  <img
                    class="tl-upcoming-event-img"
                    src="/assets/images/tl-6/news-1.jpg"
                    alt="event poster"
                  />
                  <div class="tl-upcoming-event-txt">
                    <h4 class="tl-upcoming-event-title">
                      <Link to="/transfer">
                        Education Foster Inclusivity and Understanding.
                      </Link>
                    </h4>
                    <ul class="tl-2-blog-infos">
                      <li>
                        By <div>Dora max</div>
                      </li>
                      <li>$89.00</li>
                    </ul>
                  </div>
                </div>

                <div class="tl-upcoming-event tl-pop-course">
                  <img
                    class="tl-upcoming-event-img"
                    src="/assets/images/tl-6/news-3.jpg"
                    alt="event poster"
                  />
                  <div class="tl-upcoming-event-txt">
                    <h4 class="tl-upcoming-event-title">
                      <Link to="/transfer">
                        Education Foster Inclusivity and Understanding.
                      </Link>
                    </h4>
                    <ul class="tl-2-blog-infos">
                      <li>
                        By <div>Les Migaro</div>
                      </li>
                      <li>Free</li>
                    </ul>
                  </div>
                </div>

                <div class="tl-upcoming-event tl-pop-course">
                  <img
                    class="tl-upcoming-event-img"
                    src="/assets/images/tl-6/news-2.jpg"
                    alt="event poster"
                  />
                  <div class="tl-upcoming-event-txt">
                    <h4 class="tl-upcoming-event-title">
                      <Link to="/transfer">
                        Sducation Foster Inclusivity and Understanding.
                      </Link>
                    </h4>
                    <ul class="tl-2-blog-infos">
                      <li>
                        By <div>Alex jane</div>
                      </li>
                      <li>$29.99</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
