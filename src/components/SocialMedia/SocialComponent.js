import React, { useState } from 'react'

export const SocialComponent = ({ title, description, buttonText }) => {
  const [showHiddenContent, setShowHiddenContent] = useState(false)

  const handleMouseEnter = () => {
    setShowHiddenContent(true)
  }

  const handleMouseLeave = () => {
    setShowHiddenContent(false)
  }
  return (
    <div
      className="tl-4-social"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tl-4-social-txt">
        <h2 className="tl-4-social-title">{title}</h2>
        <div
          className={
            'tl-4-social-hidden-content ' +
            (showHiddenContent ? 'show' : 'hidden')
          }
          style={{ display: showHiddenContent ? 'block' : 'none' }}
        >
          <p className="tl-4-social-descr">{description}</p>
          <div className="tl-4-social-btn">{buttonText}</div>
        </div>
      </div>
    </div>
  )
}
