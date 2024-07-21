import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import homeCarouselContent from './content'

const HomeCarousel = () => {
  return (
    <section className="tl-4-banner">
      <div className="tl-4-banner-slider owl-carousel">
        <Carousel
          autoPlay
          interval="5000"
          transitionTime="500"
          infiniteLoop
          showArrows={false}
        >
          {homeCarouselContent.map((content) => (
            <div
              className="tl-4-banner-slide bg-defaults"
              data-background={content.image}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),url(/${content.image})`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-9 col-10 col-xxs-12">
                    <div className="tl-4-banner-txt">
                      <h6 className="tl-4-banner-sub-title">{content.label}</h6>
                      <h1 className="tl-4-banner-title">{content.title}</h1>
                      <p className="tl-4-banner-descr">{content.description}</p>
                      <Link to={content.link} className="tl-4-banner-btn">
                        {content.linkLabel}{' '}
                        <i class="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="tl-4-banner-slider-dots"></div>
    </section>
  )
}

export default HomeCarousel
