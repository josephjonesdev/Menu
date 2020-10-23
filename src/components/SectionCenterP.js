import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './SectionCenterP.scss'
import { Dropdown } from 'semantic-ui-react'
function SectionCenterP({menuItems}) {
  return (
    <main className='section'>
      {menuItems.map((x, i) =>{
      const {price, img, desc, title} = x;
      return (
        <div className='section__container'>
          <img src={img} alt="Picure of Food" className='section__img'></img>
          <div className='section__container1'>
          <header className='section__header'>
          <h4 className='section__headerTitle'>{title}</h4>
          <span className='section__headerIcon'><FontAwesomeIcon icon={faAngleRight} /></span>
          <h4 className='section__headerPrice'>{price}</h4>
          </header>
          <p className='section__headerDesc'>{desc}</p>
          </div>
        </div>
       );
      })}
    </main>
  )
}

export default SectionCenterP
