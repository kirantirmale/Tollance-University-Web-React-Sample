import React from 'react'

export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{ ...style, display: "block", background: "gray" }}
    onClick={onClick}
/>
  )
}
