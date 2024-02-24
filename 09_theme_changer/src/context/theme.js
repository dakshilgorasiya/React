import React from "react";

export const ThemeContext = React.createContext({
    themeMode: "dark",
    lightTheme: () => {},
    darkTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return React.useContext(ThemeContext);
}
