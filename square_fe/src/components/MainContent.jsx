import React, { useState } from 'react'
import  * as componentStyle from './index.module.css'
import Sidebar from './Sidebar/Sidebar'
import { Outlet, useLocation} from 'react-router-dom'

export default function MainContent() {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname)
  return (
    <div className={componentStyle.app}>
    <Sidebar active={active} setActive={setActive} />
    <div className={componentStyle.content}>
      <Outlet/>
    </div>
  </div>
  )
}
