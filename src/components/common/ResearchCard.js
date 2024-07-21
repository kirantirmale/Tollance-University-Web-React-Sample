import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ResearchCard = () => {
  const navigate = useNavigate()
  const classes = [
    {
      image: 'assets/images/tl-4/innov-3.jpg',
      iconSrc: 'assets/images/tl-4/innov-icon-1.png',
      category: 'Health & Medicine',
      title:
        'Explore the latest advancements in health and medicine at Tollence University. From cutting-edge research to hands-on training, our programs equip students with the knowledge and skills to tackle real-world healthcare challenges. Join us and become a catalyst for positive change in the field of medicine.',
    },
    {
      image: 'assets/images/tl-4/innov-2.jpg',
      iconSrc: 'assets/images/tl-4/innov-icon-2.png',
      category: 'Science & Technology',
      title:
        "Dive into the world of science and technology at Tollence University, where innovation knows no bounds. Our interdisciplinary approach fosters collaboration between students and faculty, driving groundbreaking discoveries and pushing the boundaries of what's possible. ",
    },
    {
      image: 'assets/images/tl-4/innov-1.jpg',
      iconSrc: 'assets/images/tl-4/innov-icon-3.png',
      category: 'Culture & Creativity',
      title:
        'Immerse yourself in the vibrant tapestry of culture and creativity at Tollence University. From the arts to humanities, our diverse programs celebrate the richness of human expression and foster creativity in all its forms. Join a community where innovation thrives, ideas flourish, and imagination knows no limits.',
    },
  ]

  const handleMoreDetails = (classItem) => {
    // Store selected class details in sessionStorage
    sessionStorage.setItem('selectedClass', JSON.stringify(classItem))
    navigate('/details-page')
  }
  return (
    <div className="row tl-7-classes-row">
      {classes.map((classItem, index) => (
        <div key={index} className="col-lg-4 col-sm-6">
          <div className="tl-7-class tl-4-innov">
            <div className="tl-7-class-img">
              <img src={classItem.image} alt="Innovation Background" />
            </div>
            <div className="tl-7-class-txt">
              <div className="tl-7-class-icon">
                <img src={classItem.iconSrc} alt="Class icon" />
              </div>
              <h3 className="tl-7-class-name">{classItem.category}</h3>
              <p className="tl-7-class-descr">{classItem.title}</p>
              <button
                onClick={() => handleMoreDetails(classItem)}
                className="tl-7-class-btn"
              >
                More Details <i className="fa-solid fa-angles-right"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
