import React from 'react'

const SkillBar = ({ name, percentage }) => {
  return (
    <div className='skill-bar-container'>
      <span style={{ fontSize: '18px' }}>{name}</span>
      <span style={{ float: 'right', color: 'gray', fontSize: '16px' }}>
        {percentage}%
      </span>
      <div className='skill-bar'>
        <div className='skill-filled' style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

export default SkillBar
