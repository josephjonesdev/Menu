import React, { useState } from 'react'
import data from '../data'
import NavP from './NavP'
import SectionCenterP from './SectionCenterP'

function SectionCenterL() {
  const [menuItems, setMenuItems] = useState(data)
  const displayCallBack = (category) => {
    if (category === 'all') {
     setMenuItems(data)
     return;
    }
    const display = data.filter(x => x.category === category)
     setMenuItems(display)
    return;
  }

  return (
    <>
      <NavP menuItems={menuItems} displayCallBack={displayCallBack} />
      <SectionCenterP menuItems={menuItems} />
    </>
  )
}

export default SectionCenterL
