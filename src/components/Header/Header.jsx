import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
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
  );
}
