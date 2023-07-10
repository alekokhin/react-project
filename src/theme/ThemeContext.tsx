import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const theme = {
    background: isDark ? "#18122B" : "#fff",
    color: isDark ? "#fff" : "#000",
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
          <div style={{ ...theme,  height: "1000px", padding: '10px', margin: 0 }}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
