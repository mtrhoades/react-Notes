// IMPORTS
import React, { useState } from 'react';
import FunctionContextComponent from './components/FunctionContextComponent';

// CREATING CONTEXT
export const ThemeContext = React.createContext();

// FUNCTIONAL COMPONENT
export default function App() {
  // VANILLA JS SECTION
  const [ darkTheme, setDarkTheme] = useState(false);

  // functions
  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  // JSX SECTION
  return (
    <>
      {/* Everything wrapped inside of ThemeContext.Provider gets the value={darkTheme} passed down to any of the children below. */}
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
}