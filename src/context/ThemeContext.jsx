import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function checkTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const isDark = checkTheme();
    return isDark ? "dark" : "light";
  });

  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = checkTheme();
      setTheme(isDark ? "dark" : "light");
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleThemeChange);
    };
  }, []);


  useEffect(function(){
    if(theme==='dark'){
        document.documentElement.classList.add('dark-mode')
        document.documentElement.classList.remove('light-mode')
    }else{
        document.documentElement.classList.add('light-mode')
        document.documentElement.classList.remove('dark-mode')
    }
},[theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function getTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("ThemeContext was used outside of ThemeProvider");
  }

  return context;
}

export { ThemeProvider, getTheme };
