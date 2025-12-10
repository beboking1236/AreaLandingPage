"use client"
import "./globals.css";
import { useEffect, useState } from "react";

// MUI IMPORTS
import { ArrowUpward } from "@mui/icons-material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export default function RootLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false)
  const [navClass, setNavClass] = useState("")
  const [isScroll, setIsScroll] = useState("backToTop show_backToTop")

  const handleShowMenu = () => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  function menuToggleIcon() {
    if (showMenu)
      return <CloseIcon />
    else
      return <MenuIcon />
  }

  useEffect(() => {
    onscroll = () => {
      if (scrollY > 0) {
        setNavClass("scroll_nav")
      } else {
        setNavClass("")
      }

      if (scrollY > 1000) {
        setIsScroll("backToTop ")
      } else {
        setIsScroll("backToTop show_backToTop ")
      }
    }
  })

  return (
    <html lang="en">
      <body>
        <nav className={navClass}>
          <div className="desktop_nav">
            <a className="nav_logo header_hero" href="/">Area</a>
            <ul>
              <li className="header_hero">Benefits</li>
              <li className="header_hero">Specifications</li>
              <li className="header_hero">How-to</li>
              <li className="header_hero">Contact us</li>
            </ul>
            <button className="learn_more_btn header_hero"><a>Learn More<ArrowOutwardIcon fontSize="15px" className="arrow_hover" /></a></button>
          </div>
          <div className="mobile_nav">
            <a className="nav_logo header_hero" href="/">Area</a>
            <ul className={showMenu ? "mobile_nav_selection_list show_list" : "mobile_nav_selection_list"}>
              <li>Benefits</li>
              <li>Specifications</li>
              <li>How-to</li>
              <li>Contact us</li>
              <button className="learn_more_btn"><a>Learn More<ArrowOutwardIcon fontSize="15px" className="arrow_hover" /></a></button>
            </ul>
            <span className="mobile_menu_icon header_hero" onClick={handleShowMenu}>{menuToggleIcon()}</span>
          </div>
        </nav>
        <button className={isScroll} onClick={() => { scroll({ left: 0, top: 0, behavior: "smooth" }) }}><ArrowUpward className="arrowUpward" /></button>
        {children}
      </body>
    </html >
  );
}
