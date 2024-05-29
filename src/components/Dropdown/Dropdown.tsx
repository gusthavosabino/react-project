// src/components/Dropdown/Dropdown.tsx
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import './Dropdown.scss';

interface DropdownProps {
}

const Dropdown: React.FC<DropdownProps> = () => {
  const [theme, setTheme] = useState('default');

  const handleThemeChange = (event: SelectChangeEvent<string>) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    document.body.className = selectedTheme;
  };

  return (
    <FormControl color='warning'>
      <InputLabel id="theme-select-label" />
      <Select
        labelId="theme-select-label"
        id="theme-select"
        value={theme}
        onChange={handleThemeChange}
      >
        <MenuItem value="default">Padrão</MenuItem>
        <MenuItem value="casual">Casual</MenuItem>
        <MenuItem value="professional">Profissional</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
