import React from 'react'
import {Outlet} from 'react-router-dom'
import './Layout.scss'

import {SideBar} from '../index.js'

const Layout = () => {
  return (
    <div>
      <SideBar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
            &lt;body&gt;
            <br />
            <span className="bottom-tag-html">&lt;html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
