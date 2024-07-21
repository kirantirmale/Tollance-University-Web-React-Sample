import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from './Menu'

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }
  return (
    <div>
      <div
        className={`tl-4-header red-clr position-stiky  ${
          location.pathname === '/' ? '' : ' position-relative bg_dark'
        }`}
      >
        <div className="tl-8-top-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ul className="tl-8-top-header-contacts">
                  <li>
                    <a href="tel:12356877787">
                      <i className="fa-solid fa-phone"></i> (88) 123 568 777 87{' '}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@xyz-text.com">
                      <i className="fa-solid fa-envelope"></i>
                      info.tollenseuniversity@gmail.com
                    </a>
                  </li>
                  <li>
                    {' '}
                    <i class="fa-solid fa-location-dot"></i> Oldenburg 26127,
                    Germany
                  </li>
                </ul>
              </div>

              <div className="col-lg-4">
                <ul className="tl-8-top-header-socials">
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={` ${
            location.pathname === '/'
              ? 'tl-4-bottom-header'
              : 'tl-8-bottom-header'
          }`}
        >
          <div className="container">
            <div className="row justify-content-between g-0 align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="row align-items-center">
                  <div className="col-lg-12 col-6">
                    <div className="logo">
                      <Link to="/">
                        <img
                          src="assets/images/logos/logo-3-light.png"
                          alt="KIDBA"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="d-lg-none d-flex justify-content-end col-6">
                    <button
                      className="tl-hamburger navbar-toggler"
                      onClick={openSidebar}
                    >
                      <i class="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-xxl-5 col-7">
                <div className="tl-nav-menu tl-4-nav-menu">
                  <Menu />
                </div>
              </div>

              <div className="col-xxl-1 d-xxl-block d-none"></div>

              <div className="col-3 d-lg-block d-none">
                <div className="tl-header-actions d-flex justify-content-end">
                  <form
                    action="#"
                    className="tl-nav-search-form tl-4-nav-search-form"
                  >
                    <input
                      type="search"
                      name="Search"
                      className="tl-nav-search"
                      placeholder="Search items"
                    />
                    <button className="tl-searh-btn">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`kidba-menu-sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}
      >
        <div className="kidba-menu-sidebar-inner">
          <div className="sidebar__close">
            <button className="sidebar__close-btn" onClick={closeSidebar}>
              <span>
                <i class="fa-solid fa-xmark"></i>
              </span>
              <span>close</span>
            </button>
          </div>
          <div className="kidba-menu-sidebar-top mb-40">
            <nav>
              <div
                className="nav nav-tabs border-0"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className={`nav-link ${sidebarOpen ? 'active' : ''}`}
                  id="nav-menu-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-menu"
                  type="button"
                  role="tab"
                  aria-controls="nav-menu"
                  aria-selected={sidebarOpen}
                >
                  Menu
                </button>
                <button
                  className={`nav-link ${!sidebarOpen ? 'active' : ''}`}
                  id="nav-info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-info"
                  type="button"
                  role="tab"
                  aria-controls="nav-info"
                  aria-selected={!sidebarOpen}
                >
                  Info
                </button>
              </div>
            </nav>
          </div>
          <div className="kidba-menu-sidebar-bottom">
            <div className="logo mb-40">
              <Link to="/">
                <img src="assets/images/logos/logo-1.png" alt="logo" />
              </Link>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className={`tab-pane fade ${sidebarOpen ? 'show active' : ''}`}
                id="nav-menu"
                role="tabpanel"
                aria-labelledby="nav-menu-tab"
              >
                <div class="mobile-menu mean-container">
                  <div class="mean-bar">
                    <a class="meanmenu-reveal">
                      <span>
                        <span>
                          <span></span>
                        </span>
                      </span>
                    </a>
                    <nav class="mean-nav">
                      <Menu />
                    </nav>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${!sidebarOpen ? 'show active' : ''}`}
                id="nav-info"
                role="tabpanel"
                aria-labelledby="nav-info-tab"
              >
                <div className="kidba-sidebar-info-content-331">
                  <ul>
                    <li>
                      <i className="fa-regular fa-clock"></i> 9:30am - 6:30pm,
                      Mon - Sun
                    </li>
                    <li>
                      <a href="tel:http://80012345676587">
                        <i class="fa-solid fa-phone"></i> +800-123-4567 6587
                      </a>
                    </li>
                    <li>
                      {' '}
                      <i class="fa-solid fa-location-dot"></i> Anmoore Road
                      Brooklyn, NY 230
                    </li>
                  </ul>
                </div>
                <div className="kidba-sidebar-info-social-331">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="header-right-txt"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    className="header-right-txt"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="header-right-txt"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
