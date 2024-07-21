import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AcademicPrograms = () => {
  const navigate = useNavigate()

  const programs = [
    {
      id: 1,
      image: 'assets/images/friends-learning-grass.jpg',
      iconSrc: 'assets/images/tl-4/program-1.png',
      category: 'Collage Life',
      title: 'Dive into Campus Culture at University',
      description:
        "Immerse yourself in the vibrant and diverse college life at Tollence University. From engaging student organizations to exciting events and traditions, there's never a dull moment on campus",
    },
    {
      id: 2,
      image: 'assets/images/athelete.jpg',
      iconSrc: 'assets/images/tl-4/program-3.png',
      category: 'Athletics',
      title: 'Unlock Your Athletic Potential at University',
      description:
        "Experience the thrill of competition and the camaraderie of teamwork with our exceptional athletics program. Whether you're a varsity athlete or a recreational sports enthusiast, there's something for everyone to enjoy",
    },
    {
      id: 3,
      image: 'assets/images/tl-12/event-3.jpg',
      iconSrc: 'assets/images/tl-4/program-2.png',
      category: 'Academics',
      title: 'Illuminate Your Future at University',
      description:
        'Discover a world of knowledge and opportunity through our rigorous academic programs. With expert faculty, innovative teaching methods, University empowers students to excel in their chosen fields and beyond.',
    },
  ]

  const handleMoreDetails = (program) => {
    // Store selected program details in sessionStorage
    sessionStorage.setItem('selectedClass', JSON.stringify(program))

    // Navigate to the details page
    navigate('/details-page')
  }

  return (
    <section
      className="tl-4-programs tl-3-section-spacing"
      data-bg-color="#F3F1F1"
    >
      <div className="container">
        <h2 className="tl-4-section-title">
          Academic <span className="last-word">programs</span>
        </h2>

        <div className="row g-4 tl-4-programs-row">
          {programs.map((program) => (
            <div key={program.id} className="col-lg-4 col-md-6">
              <div className="tl-4-program">
                <div className="tl-4-program-heading">
                  <img src={program.iconSrc} alt="Icon" />
                  <div className="tl-4-program-heading-txt">
                    <h4 className="tl-4-program-title">{program.category}</h4>
                    <h6 className="tl-4-program-sub-title">{program.title}</h6>
                  </div>
                </div>
                <img
                  src={program.image}
                  alt="Program"
                  className="tl-4-program-img"
                />
                <div className="tl-4-program-txt">
                  <p className="tl-4-program-descr">{program.description}</p>
                  <button
                    onClick={() => handleMoreDetails(program)}
                    className="tl-4-program-btn"
                  >
                    Learn More <i className="fa-solid fa-angles-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
