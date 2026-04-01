import React from 'react'

const Tab = ({ id, title, isActive, activeIndexHandler }) => {
return (
    <div onClick={() => activeIndexHandler(id)} className={`rounded-4xl  border-2 text-black-400 px-2 cursor-pointer font-mono ${isActive ? 'bg-amber-400 border-amber-600 text-white' : 'bg-gray-200 border-black'}`}>
      {title}
    </div>
  )
}

export default Tab