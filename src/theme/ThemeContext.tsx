import { WidthFull } from "@mui/icons-material";
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
          <div style={{ ...theme, width: "100%", height: "100%", padding: '10px', margin: 0 }}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
