import React from 'react'
import { Link } from 'react-router-dom'

const CampusLifeSection = () => {
  return (
    <section className="tl-4-campus">
      <div className="row g-0">
        <div className="col-xxl-4 col-lg-3">
          <div className="tl-5-campus-img">
            <img src="assets/images/campus-life-1.jpg" alt="Students" />
          </div>
        </div>
        <div className="col-xxl-4 col-lg-6">
          <div className="tl-4-campus-txt">
            <h2 className="tl-5-section-title">
              Campus Life Revolves Around Academic Pursuits.
            </h2>
            <Link to="/transfer" className="tl-def-btn-2">
              More Information <i class="fa-solid fa-angles-right"></i>
            </Link>
          </div>
        </div>
        <div className="col-xxl-4 col-lg-3">
          <div className="tl-5-campus-img">
            <img src="assets/images/campus-life-2.jpg" alt="Students" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampusLifeSection
