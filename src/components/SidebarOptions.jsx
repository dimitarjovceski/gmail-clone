import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({ Icon, title, number, selected }) {
  return (
    <div className={`sidebar__options ${selected && "sidebar__option--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <span>{number}</span>
    </div>
  )
}

export default SidebarOptions
