import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>
      <footer className="tl-footer tl-4-footer">
        <div className="tl-footer-top">
          <div className="container">           
            {/* New Required Footer start here */}
             <div className="row gy-5 align-items-center">
              <div className="col-lg-4 order-lg-1 order-3">
                <div className="tl-footer-widget tl-4-footer-widget">                  
                  <p className="tl-4-copyright-txt m-0 text-center text-lg-start">
                    ©2024 Tollense University 
                  </p>
                </div>
              </div>

              <div className="col-lg-4 order-1 order-lg-2">
                    <div className="tl-footer-widget tl-4-footer-widget text-center">
                      <Link to="/" className="logo tl-footer-widget-title mb-0">
                      <img src="assets/images/logos/logo-3-light.png" alt="logo" />
                      </Link>
                  </div>                  
                </div>
                <div className="col-lg-4 order-2 order-lg-3">
                <div className="tl-footer-widget tl-4-footer-widget">                  
                <ul className="tl-footer-links tl-4-footer-links flex-row justify-content-center justify-content-lg-end">
                        <li>
                          <Link to="/" role="button">
                            Home
                          </Link>
                        </li>

                        <li>
                          <Link to="/research" role="button">
                            Research
                          </Link>
                        </li>

                        <li>
                          <Link to="/admission" role="button">
                          Admission
                          </Link>
                        </li>
                        <li>
                          <Link to="/transcript" role="button">
                          Transcript
                          </Link>
                        </li>
                    

                        <li>
                          <Link to="/transfer" role="button">
                            Transfer
                          </Link>
                        </li>
                      </ul>
                 
                </div>
              </div>
              </div>
              {/* New Required Footer end here */}
            </div>
          </div>
      </footer>
    </div>
  )
}
