import React from 'react';
import SidebarItem from './common/sideBarItems';
import UserPanel from './common/userPanel';
import BrandLogo from './common/brandLogo';

const Sidebar = ({ items, user, brand}) => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <BrandLogo brandName={brand.name} />
      <div className="sidebar">
        <UserPanel imageUrl={user.imageUrl} userName={user.name} />
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {items.map((item, index) => (
              <SidebarItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                route={item.route}
                active={index === 0} // Assume first item is active for example
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
