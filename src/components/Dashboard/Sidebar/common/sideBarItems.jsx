import React from 'react';

const SidebarItem = ({ icon, label, route, active }) => {
  return (
    <li className={`nav-item ${active ? 'menu-open' : ''}`}>
      <a href={route} className={`nav-link ${active ? 'active' : ''}`}>
        <i className={`nav-icon ${icon}`}></i>
        <p>{label}</p>
      </a>
    </li>
  );
};

export default SidebarItem;
