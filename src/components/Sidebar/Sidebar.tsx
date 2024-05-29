// src/components/Sidebar/Sidebar.tsx
import React from 'react';
import './Sidebar.scss';

interface SidebarProps {
  open: boolean;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ open, children }) => {
  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      {children}
    </div>
  );
};

export default Sidebar;
