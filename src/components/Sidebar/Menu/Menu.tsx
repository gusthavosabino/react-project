// src/components/Sidebar/Menu/Menu.tsx
import React from 'react';
import './Menu.scss';
import MenuItem from './MenuItem/MenuItem';

interface MenuProps {
  items: string[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="menu">
      {items.map((item, index) => (
        <MenuItem key={index} label={item} />
      ))}
    </div>
  );
};

export default Menu;
