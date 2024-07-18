import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div
      className='flex 
      items-center
      justify-around
      bg-black
      w-full
      sticky
      top-0
      p-2
      m-0'>

      {/* Right side */}
      <div className="right flex items-center justify-center">

        <Link to="/" className='flex items-center justify-center'>
          <img src="/src/assets/favicon.ico" />
          <div className='text-white font-bold flex items-center justify-center text-2xl mx-3'>
            <h1>CINEMA</h1>
            <h1 className='text-[#F15E75]'>SEEK</h1>
          </div>
          <div className='h-[4rem] border-r-[1px] border-gray-600' />
        </Link>

      </div>

      {/* search section */}
      <div className="searchSection right flex items-center justify-center cursor-pointer">
        <input
          type="text"
          autoComplete='off'
          placeholder='Search...'
          className='bg-gray-700
          rounded-2xl
          font-thin
          outline-none
          border-none
          w-[20rem]
          text-xl
          p-2
          text-white
          '
        />
        <button className='mx-3'>
          <i className="fa-solid fa-magnifying-glass text-white text-"></i>
        </button>

      </div>

      {/* left side menu */}
      <div className="right flex items-center justify-center">
        <ul className='flex justify-center items-center text-white text-xl'>
          <li>
            <NavLink to=""
              className={
                ({ isActive }) =>
                  `mx-4
                  hover:underline
                  hover:underline-offset-4
                  ${isActive ? "text-[#F15E75] font-bold hover:decoration-[#F15E75]" : "text-white font-normal"}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/movies"
              className={
                ({ isActive }) =>
                  `mx-4
                  hover:underline
                  hover:underline-offset-4
                  ${isActive ? "text-[#F15E75] font-bold hover:decoration-[#F15E75]" : "text-white font-normal "}`
              }
            >
              Movies
            </NavLink>
          </li>

          <li>
            <NavLink to="/about"
              className={
                ({ isActive }) =>
                  `mx-4
                  hover:underline
                  hover:underline-offset-4
                  ${isActive ? "text-[#F15E75] font-bold hover:decoration-[#F15E75]" : "text-white font-normal"}`
              }
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact"
              className={
                ({ isActive }) =>
                  `mx-4
                  hover:underline
                  hover:underline-offset-4
                  ${isActive ? "text-[#F15E75] font-bold hover:decoration-[#F15E75]" : "text-white font-normal"}`
              }
            >
              Contact Us
            </NavLink>
          </li>

        </ul>
      </div>


    </div>
  )
}

export default Header