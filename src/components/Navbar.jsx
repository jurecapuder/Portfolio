import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => setActive("")}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'> Jure <span className='sm:block hidden'>| Capuder</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link
                to={`#${link.id}`}
                onClick={() => setActive(link.id)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar