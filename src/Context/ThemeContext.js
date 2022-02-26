import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [defaultTheme] = useState({
    lightTheme: {
      ui: "#f5f5f5",
      subHeading: "#798B9B",
      heading: "#3F3D56",
      cardbg: "#e8e8e8",
    },
    darkTheme: { ui: "#161616", subHeading: "#cacaca", cardbg: "#111" },
  });
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, defaultTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
