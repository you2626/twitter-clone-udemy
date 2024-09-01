import React from 'react';


function SideBarOption({text,Icon}) {
  return (
    <div>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SideBarOption;