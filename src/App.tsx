// src/App.tsx
// import React from 'react';
import Portfolio from "./components/Layout/Portfolio";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <Portfolio />
      </div>
    </ThemeProvider>
  );
};

export default App;
