import React from 'react';
import "./SideBarOption.css";

function SideBarOption({text,Icon,active }) {
  return (
    <div className={`sideBarOption ${active && "sideBarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SideBarOption;