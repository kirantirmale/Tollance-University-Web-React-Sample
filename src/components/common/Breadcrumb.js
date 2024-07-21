import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumb = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').filter(Boolean).join(' ');

  return (
    <div>
      <div className="tl-breadcrumb pt-120 pb-120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-6">
              <div className="banner-txt">
                <h1 className="tl-breadcrumb-title">{currentPath.replace(/-/g, ' ') || 'Home'}</h1>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="tl-breadcrumb-nav d-flex">
                <li><Link to="/">Home</Link></li>
                {location.pathname !== '/' && (
                  <li className="current-page">
                    <span className="dvdr"><i class="fa-solid fa-angles-right me-2"></i></span>
                    <span>{currentPath.replace(/-/g, ' ')}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
