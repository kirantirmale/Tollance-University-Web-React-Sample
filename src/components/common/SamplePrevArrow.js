import React from 'react'

export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div>
         <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    </div>
  )
}
