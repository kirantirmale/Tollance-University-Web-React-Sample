import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SampleNextArrow } from './SampleNextArrow'
import { SamplePrevArrow } from './SamplePrevArrow'

export const TestimonialSection = () => {
  const testimonialSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const imageSettings = {
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const testimonials = [
    {
      id: 'testimonial-1',
      image: '/assets/images/back-view-teenage.jpg',
      comment:
        '“Universities offer a wide range of student organizations and clubs catering to diverse interests. These groups focus on hobbies, sports, cultural activities, social causes, academic interests, and more”',
      author: 'Douglas Lyphe',
      authorSuffix: 'Professor of Technology',
    },
    {
      id: 'testimonial-2',
      image: '/assets/images/social-media.jpg',
      comment:
        '“As a professor at Tollence University, I am continually impressed by the dedication and intellectual curiosity of our students. The academic environment fosters critical thinking, innovation, and collaboration, making teaching a truly rewarding experience.”',
      author: 'Dr. Emily Parker',
      authorSuffix: 'Professor of Technology',
    },
    {
      id: 'testimonial-3',
      image: '/assets/images/graduates.jpg',
      comment:
        '“Tollence University offers a vibrant campus life that goes beyond the classroom. From engaging lectures to thought-provoking discussions, students are encouraged to explore their interests and pursue their passions.”',
      author: 'Prof. David Lee',
      authorSuffix: 'Professor of Technology',
    },
  ]

  return (
    <section className="tl-5-testimonial">
      <div className="container">
        <div className="tl-5-testimonial-heading d-flex justify-content-between align-items-center">
          <h2 className="tl-5-section-title">Meet Our Alumni</h2>
          <div className="tl-5-testimonial-slider-nav"></div>
        </div>
      </div>

      <div className="tl-5-testimonial-img-slider">
        <Slider {...imageSettings}>
          {testimonials.map((testimonial) => (
            <div className="tl-5-testimonial-img">
              <img src={testimonial.image} alt="Alumni Poster" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="container position-relative">
        <Slider {...testimonialSettings} className="tl-5-testimonial-slider">
          {testimonials.map((testimonial) => (
            <div className="slider-item">
              <div className="tl-5-single-testimony">
                <img
                  className="tl-5-single-testimony-icon"
                  src="assets/images/tl-5/testimonial-icon.png"
                  alt="Quotation Icon"
                />
                <div className="tl-5-single-testimony-txt">
                  <p>{testimonial.comment}</p>
                  <div className="tl-5-alumni">
                    <h5 className="tl-5-alumni-name">{testimonial.author}</h5>
                    <div className="tl-5-alumni-label">
                      {testimonial.authorSuffix}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
