import React from 'react'
import { Breadcrumb } from './Breadcrumb'
import { Link, useLocation } from 'react-router-dom'

export const DetailsPages = () => {
  const selectedClass = JSON.parse(sessionStorage.getItem('selectedClass'))
  if (!selectedClass) {
    return <div>No class selected</div>
  }

  const latestArticles = [
    {
      id: 'article-1',
      link: '/transfer',
      title: 'The Learning Revolution: Embracing Innovation in Education',
      category: 'Education',
      image: '/assets/images/tl-5/blog-1.jpg',
      author: 'Hugh Millie-Yate',
      publishedDate: 'Jan 24, 2023',
    },
    {
      id: 'article-2',
      link: '/transfer',
      title: 'The Value of Undergraduate Research Opportunities',
      category: 'Research',
      image: '/assets/images/tl-5/blog-2.jpg',
      author: 'Hugh Millie-Yate',
      publishedDate: 'Feb 24, 2023',
    },
    {
      id: 'article-3',
      link: '/transfer',
      title: 'The Importance of Career Readiness Programs',
      category: 'Career',
      image: '/assets/images/tl-5/blog-3.jpg',
      author: 'Hugh Millie-Yate',
      publishedDate: 'Mar 24, 2023',
    },
  ]
  return (
    <div>
      <Breadcrumb />
      <section class="tl-3-about tl-3-section-spacing">
        <div class="container">
          <div class="row gy-4 gy-sm-5 align-items-center">
            <div class="col-lg-6">
              <div class="tl-3-about-txt">
                <h2 class="tl-3-section-title">{selectedClass.category}</h2>
                <p class="tl-3-about-descr mb-2">{selectedClass.title}</p>
                <p class="tl-3-about-descr mt-0">{selectedClass.description}</p>

                <div class="tl-1-about-author">
                  <div class="tl-1-about-author-intro">
                    <div class="tl-1-about-author-img">
                      <img
                        src="assets/images/tl-3/author-img.png"
                        alt="Author image"
                      />
                    </div>
                    <div class="tl-1-about-author-info">
                      <h5 class="tl-1-about-author-name">
                        {selectedClass.category}
                      </h5>
                      <span class="tl-1-about-author-role">
                        {selectedClass.title}
                      </span>
                    </div>
                  </div>
                  <div class="tl-1-about-author-signature">
                    <img
                      src="assets/images/tl-3/signature.png"
                      alt="signature"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="tl-3-about-img">
                <img src={selectedClass.image} alt="School Picture" />
                <img
                  src="assets/images/tl-3/about-img-2.jpg"
                  alt="School Picture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="tl-11-latest-articles tl-11-section-spacing">
        <div class="container">
          <div class="tl-11-section-heading">
            <h2 class="tl-11-section-title">Latest Articles</h2>
          </div>

          <div class="row g-4 justify-content-center">
            {latestArticles.map((article) => (
              <Link
                to={article.link}
                class="col-lg-4 col-sm-6 col-10 col-xxs-12"
              >
                <div class="tl-11-latest-article">
                  <div class="tl-11-latest-article-img">
                    <img src={article.image} alt="Article Poster" />
                  </div>

                  <div class="tl-11-latest-article-txt">
                    <ul class="tl-11-latest-article-infos">
                      <li>{article.publishedDate}</li>
                      <li>{article.category}</li>
                    </ul>

                    <h3 class="tl-11-latest-article-title">{article.title}</h3>

                    <span class="tl-11-latest-article-author">
                      By {article.author}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
