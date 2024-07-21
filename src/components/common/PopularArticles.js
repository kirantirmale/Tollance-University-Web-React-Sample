import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const articles = [
  {
    category: 'revolution',
    image: '/assets/images/tl-3/stu-1.jpg',
    title: 'The Role of Technology in Modern Education',
    subtitle:
      'This article explores the integration of technology in education, highlighting its impact on teaching methods, student engagement, and overall learning outcomes.',
    description:
      'This article explores the integration of technology in education, highlighting its impact on teaching methods, student engagement, and overall learning outcomes. From interactive learning platforms to virtual reality simulations, discover how innovative technologies are reshaping the educational landscape and preparing students for success in the digital age.',
    date: 'Jan 23, 2023',
    link: '#',
  },
  {
    category: 'notebook',
    image: '/assets/images/tl-3/stu-2.jpg',
    title: 'Fostering Innovation in Higher Education',
    subtitle:
      'Discover how universities like Tollence are fostering innovation by encouraging creativity, critical thinking, and problem-solving among students across various disciplines.',
    description:
      'Discover how universities like Tollence are fostering innovation by encouraging creativity, critical thinking, and problem-solving among students across various disciplines. Through interdisciplinary collaboration, entrepreneurial initiatives, and experiential learning opportunities, institutions are empowering students to become innovative leaders and change-makers in their fields.',
    date: 'Feb 23, 2023',
    link: '#',
  },
  {
    category: 'revolution',
    image: '/assets/images/tl-3/stu-3.jpg',
    title: 'Educational Insights: Discovering the Art of Learning.',
    subtitle:
      'Educational Insights offers a captivating journey into the world of learning, providing valuable perspectives and knowledge to enrich your educational experience. ',
    description:
      'Educational Insights offers a captivating journey into the world of learning, providing valuable perspectives and knowledge to enrich your educational experience. Delve into thought-provoking discussions and gain new insights that ignite your curiosity and passion for learning. Our platform is a vibrant hub where ideas flourish, fostering a community of lifelong learners dedicated to intellectual growth. Join us as we uncover the intricacies of education and discover the art of learning together.',
    date: 'Mar 23, 2023',
    link: '#',
  },
  {
    category: 'learning',
    image: '/assets/images/tl-5/blog-1.jpg',
    title: 'The Power of Interdisciplinary Studies',
    subtitle:
      'Explore the benefits of interdisciplinary studies in higher education, showcasing how it fosters collaboration, innovation, and holistic learning experiences.',
    description:
      'Explore the benefits of interdisciplinary studies in higher education, showcasing how it fosters collaboration, innovation, and holistic learning experiences. By breaking down traditional academic silos and encouraging cross-disciplinary dialogue, universities are equipping students with the versatile skills and adaptable mindset needed to tackle complex real-world challenges.',
    date: 'Apr 23, 2023',
    link: '#',
  },
]
export const PopularArticles = () => {
  const [filter, setFilter] = useState('all')
  const navigate = useNavigate()

  const handleFilter = (category) => {
    setFilter(category)
  }

  const filteredArticles =
    filter === 'all'
      ? articles
      : articles.filter((article) => article.category === filter)

  const handleMoreDetails = (article) => {
    sessionStorage.setItem('selectedClass', JSON.stringify(article))
    navigate('/details-page')
  }
  return (
    <div>
      <div className="tl-11-pop-articles-left-col">
        <div className="tl-11-section-heading">
          <h2 className="tl-11-section-title">Popular Articles</h2>
          <div className="tl-11-pop-articles-filtering-btns">
            <button onClick={() => handleFilter('all')}>See All</button>
            <button onClick={() => handleFilter('revolution')}>
              Revolution
            </button>
            <button onClick={() => handleFilter('learning')}>Learning</button>
            <button onClick={() => handleFilter('notebook')}>Notebook</button>
          </div>
        </div>
        <div className="tl-11-pop-articles-col">
          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className={`tl-11-pop-article mix ${article.category}`}
            >
              <div className="tl-11-pop-article-img">
                <img src={article.image} alt="Article" />
              </div>
              <div className="tl-11-pop-article-txt">
                <div className="tl-11-pop-article-infos">
                  <span className="tl-11-pop-article-date">
                    <i className="fa-regular fa-clock"></i> {article.date}
                  </span>
                </div>
                <h3 className="tl-11-pop-article-title">{article.title}</h3>
                <p className="tl-11-pop-article-descr">{article.subtitle}</p>
                <a
                  onClick={() => handleMoreDetails(article)}
                  className="tl-11-pop-article-btn"
                >
                  Read More <i class="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
