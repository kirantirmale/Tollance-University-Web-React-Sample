import React from 'react'
import { ResearchCard } from '../common/ResearchCard'

const ResearchSection = () => {
  return (
    <section className="tl-4-innovs tl-3-section-spacing">
      <div className="container">
        <div className="tl-4-innovs-heading">
          <h2 className="tl-4-section-title">Research & Innovation</h2>
          <p className="tl-4-innovs-heading-txt">
            Forging Tomorrow's Solutions: Research and Innovation at Tollence
            University
          </p>
        </div>

        <ResearchCard />
      </div>
    </section>
  )
}

export default ResearchSection
