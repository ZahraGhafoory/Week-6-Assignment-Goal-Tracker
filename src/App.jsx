import AppRoutes from "./routes/AppRoutes";
import { ThemeProviderCustom } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { GoalsProvider } from "./context/GoalsContext";
import { AuthProvider } from "./context/AuthContext";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProviderCustom>
      <LanguageProvider>
        <AuthProvider>
          <GoalsProvider>
            <AppRoutes />
          </GoalsProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProviderCustom>
  );
}

export default App;