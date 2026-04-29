import { AppBar, Toolbar, Button, IconButton, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { lang, t } = useContext(LanguageContext);
  const { logout } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        p: 2,
        gap: 1,
      }}
    >
      <Button component={Link} to="/" onClick={toggleDrawer}>
        {t.dashboard}
      </Button>

      <Button component={Link} to="/goals" onClick={toggleDrawer}>
        {t.goals}
      </Button>

      <Button component={Link} to="/categories" onClick={toggleDrawer}>
        {t.categories}
      </Button>

      <Button component={Link} to="/settings" onClick={toggleDrawer}>
        {t.settings}
      </Button>

      <Button color="error" onClick={logout}>
        {t.logout}
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, }}>
            <Button color="inherit" sx={{ backgroundColor: "rgba(255, 120, 118, 0.3)", }} component={Link} to="/">
              {t.dashboard}
            </Button>

            <Button color="inherit" sx={{ backgroundColor: "rgba(255, 120, 118, 0.3)", }}  component={Link} to="/goals">
              {t.goals}
            </Button>

            <Button color="inherit" sx={{ backgroundColor: "rgba(255, 120, 118, 0.3)", }}  component={Link} to="/categories">
              {t.categories}
            </Button>

            <Button color="inherit" sx={{ backgroundColor: "rgba(255, 120, 118, 0.3)", }}  component={Link} to="/settings">
              {t.settings}
            </Button>

            <Button color="inherit" sx={{ backgroundColor: "rgba(255, 120, 118, 0.3)", }}  onClick={logout}>
              {t.logout}
            </Button>
          </Box>

        </Toolbar>
      </AppBar>

      {/* Drawer (Mobile) */}
      <Drawer
        anchor={lang === "fa" ? "right" : "left"}
        open={open}
        onClose={toggleDrawer}
      >
        {menuItems}
      </Drawer>
    </>
  );
}

export default Navbar;