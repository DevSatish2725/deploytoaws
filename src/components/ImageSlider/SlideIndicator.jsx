import React from 'react'

const SlideIndicator = ({activeIndicator, indicatorIndex, indicatorClickHandler}) => {
  return (
    <span 
      className={`w-3 h-3 rounded-full cursor-pointer ${activeIndicator ? "bg-gray-600" : "bg-gray-300"}`}
      onClick={() => indicatorClickHandler(indicatorIndex)}
    ></span>
  )
}

export default SlideIndicator