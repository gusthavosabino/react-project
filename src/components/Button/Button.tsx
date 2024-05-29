// Button.js
import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, ...rest }) => {
  const handleClick = () => {
    console.log('Botão clicado!');
    onClick(); // Chamar a função passada por props
  };

  return (
    <button className="button" onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
