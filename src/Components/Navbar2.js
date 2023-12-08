import React from 'react'
import { NavLink } from 'react-router-dom'
import DropDown from './DropDown'

function Navbar2() {
  return (
    <div className=''>
      <ul className='flex font-semibold justify-between p-5 mx-44 text-gray-700 '>

      <NavLink to="/Home">
        <li className='hover:text-orange-500 cursor-pointer'>Home
        <DropDown/>
        </li>
        
      </NavLink>

        <NavLink to="/Beauty">
        <li className='hover:text-orange-500 cursor-pointer'>Beauty</li>
        </NavLink>

        <NavLink to="/Hair">
        <li className='hover:text-orange-500 cursor-pointer'>Hair</li>
        </NavLink>

        <NavLink to="/Face">
        <li className='hover:text-orange-500 cursor-pointer'>Face</li>
        </NavLink>

        <NavLink to="/Body">
        <li className='hover:text-orange-500 cursor-pointer'>Body</li>
        </NavLink>

        <NavLink to="/Makeup">
        <li className='hover:text-orange-500 cursor-pointer'>Makeup</li>
        </NavLink>

        <NavLink to="/Ingredient">
        <li className='hover:text-orange-500 cursor-pointer'>Ingredient</li>
        </NavLink>

        <NavLink to="/Baby">
        <li className='hover:text-orange-500 cursor-pointer'>Baby</li>
        </NavLink>

        <NavLink to="/Blog">
        <li className='hover:text-orange-500 cursor-pointer'>Blog</li>
        </NavLink>

        <NavLink to="/Gift Packs">
        <li className='hover:text-orange-500 cursor-pointer'>Gift Packs</li>
        </NavLink>

        <NavLink to="/Explore">
        <li className='hover:text-orange-500 cursor-pointer'>Explore</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar2
