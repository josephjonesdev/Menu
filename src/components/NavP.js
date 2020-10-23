import React, {useState} from 'react'
import { Button } from 'semantic-ui-react'
import './NavP.scss'
import '../data'
import { Dropdown } from 'semantic-ui-react'


function NavP({menuItems, displayCallBack}) {
  let categoryList = ['all', ...new Set(menuItems.map(x => x.category))]
  const [categories, setCategories] = useState(categoryList)
  const [dropdown, setDropDown] = useState('All')
  const options = categories.map(x => {
    return (
     {key: x, text: x.charAt(0).toUpperCase() + x.slice(1), value: x.toLowerCase()}
    )
  })
  
  console.log(document.getElementsByClassName('divider text').textContent)

 const handleDropDown = (event, value) => {
    displayCallBack(event.target.textContent.toLowerCase())
    setDropDown(event.target.textContent)
}

  return (
    <>
    <div className="hamburger">
    <Dropdown  onChange={handleDropDown}  downward options={options} text={dropdown} />
    </div>
     <div className='nav'>
      {categories.map(x => {
        return (
          <Button className="nav__button" inverted onClick={() => displayCallBack(x)}>
        {x}
      </Button>
        )
      })}
    </div>
    </>
  )
}

export default NavP
