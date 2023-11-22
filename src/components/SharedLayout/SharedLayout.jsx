import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import './SharedLayout.css';

export const SharedLayout = () => {
  return (
    <div>
      <div>
        <nav className="header-wrapper">
          <ul className="header-list">
            <li className="header-item">
              <NavLink
                className="header-link"
                style={props => {
                  return {
                    fontWeight: props.isActive ? '700' : '500',
                    textShadow: props.isActive
                      ? '1px 1px 7px rgba(188, 188, 188, 0.83)'
                      : '',
                  };
                }}
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink
                className="header-link"
                style={props => {
                  return {
                    fontWeight: props.isActive ? '700' : '500',
                    textShadow: props.isActive
                      ? '1px 1px 7px rgba(188, 188, 188, 0.83)'
                      : '',
                  };
                }}
                to="/movies"
              >
                MOVIES
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
