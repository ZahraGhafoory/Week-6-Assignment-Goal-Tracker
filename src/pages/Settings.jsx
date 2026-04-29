import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { Typography, Button, Stack, Card, CardContent } from "@mui/material";

function Settings() {
  const { mode, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang, t } = useContext(LanguageContext);

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {t.settings}
      </Typography>

      <Stack spacing={3}>
        {/* LANGUAGE */}
        <Card>
          <CardContent>
            <Typography variant="h6">{t.language}</Typography>

            <Button variant="contained" onClick={toggleLang}>
              {lang === "en" ? "Switch to Persian" : "Switch to English"}
            </Button>
          </CardContent>
        </Card>

        {/* THEME */}
        <Card>
          <CardContent>
            <Typography variant="h6">{t.theme}</Typography>

            <Button variant="contained" onClick={toggleTheme}>
              {mode === "light" ? "Dark Mode" : "Light Mode"}
            </Button>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
}

export default Settings;