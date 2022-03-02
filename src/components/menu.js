import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div
    style={{
      background: '#f4f4f4',
      paddingTop: '10px',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link to="/">หน้าหลัก</Link>
      </li>
      <li>
        <Link to="/about">เกี่ยวกับเรา</Link>
      </li>
      <li>
        <Link to="/services">บริการของเรา</Link>
      </li>
      <li>
        <Link to="/blog">บทความ</Link>
      </li>
    </ul>
  </div>
)

export default Menu
