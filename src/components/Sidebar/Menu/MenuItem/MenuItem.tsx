// src/components/Sidebar/Menu/MenuItem/MenuItem.tsx
import React from 'react';
import './MenuItem.scss';

interface MenuItemProps {
  label: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick}>
      {label}
    </div>
  );
};

export default MenuItem;
