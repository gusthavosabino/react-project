// src/App.tsx
import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Menu from "./components/Sidebar/Menu/Menu";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const menuItems = ["Home", "About", "Contact"];

  return (
    <div className="app">
      {/* <Sidebar open={sidebarOpen}>
        <Menu items={menuItems} />
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <SlArrowLeft /> : <SlArrowRight />}
        </button>
      </Sidebar> */}

      {/* <div className="content">
        <h1>Welcome to the App</h1>
      </div> */}
    </div>
  );
};

export default App;
