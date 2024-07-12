import { Fragment } from "react"
import Navbar from "../navbar/Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet/>
      </main>
    </Fragment>
  )
}

export default Layout