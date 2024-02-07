import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from  '../constant'
import { logo, menu, close } from '../assets'
import  awLogo from '../assets/aw-logo.png'
import  awLogo2 from '../assets/aw-logo2.png'


const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

 

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' className='flex items-center gap-1' onClick={() => { setActive(''); window.scrollTo(0,0) }}>
          <img src={awLogo} alt="logo" className='w-12 h-10 object' width={500} />
          <p className='text-primary text-[18px] font-[600] cursor-pointer '>Awhire God'spower</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-primary" : "text-black"} hover:text-primary text-[16px] cursor-pointer `} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className={`w-[28px] h-[28px] object-contain cursor-pointer bg-primary`} onClick={() => setToggle(!toggle)} fill="red" />
        </div>

        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className="list-none justify-end items-start flex-col gap-8">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-primary" : "text-black"} font-poppins font-medium hover:text-primary text-[16px] cursor-pointer pb-4 `} onClick={() => {setToggle(!toggle); setActive(link.title)}}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar