import React, { useContext } from "react";
import { AppBar, Stack, Button, FormControlLabel, Switch, FormGroup } from "@mui/material";
import { DarkModeContext, DarkModeProvider } from "../../DarkModeProvider";

const Header = () => {
  const pagesMenuItems :string[] = ["Home", "Favorites"];
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  const onSwitchClick = () => {
    toggleDarkMode()
  }

  return (
    <DarkModeProvider>
      <AppBar sx={{ py: 1 }}>
        <Stack direction="row" spacing={2} sx={{ m: "auto" }}>
          {pagesMenuItems.map((page) => (
            <Button size="small" sx={{ color: "white" }} href={`/${page.toLowerCase()}`}>
              {page}
            </Button>
          ))}
          <FormGroup>
            <FormControlLabel control={<Switch onChange={onSwitchClick} />} label="Switch theme" />
          </FormGroup>
        </Stack>
      </AppBar>
    </DarkModeProvider>
  );
};

Header.propTypes = {};

export default Header;
