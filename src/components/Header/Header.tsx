import React from 'react';
import './Header.scss';
import LogoSvg from '../LogoSvg/LogoSvg';
import Dropdown from '../Dropdown/Dropdown';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <LogoSvg />
      <Dropdown />
    </header>
  );
};

export default Header;
