import { createContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
export const ThemeContext = createContext();

export function ThemeProviderCustom({ children }) {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const theme = createTheme({
    palette: {
      mode: mode,
      background: {
        default: "rgba(127, 120, 255, 0.2)",
      },
    },
  
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
            padding: "8px 16px",
          },
    
          contained: {
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            color: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    
            "&:hover": {
              background: "linear-gradient(45deg, #2563eb, #7c3aed)",
              boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
            },
          },
    
          outlined: {
            borderColor: "#3b82f6",
            color: "#3b82f6",
    
            "&:hover": {
              borderColor: "#2563eb",
              backgroundColor: "rgba(59,130,246,0.08)",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}