import React from "react";
import { AppBar, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const pagesMenuItems = ["Home", "Favorites"];
  return (
    <AppBar sx={{ py: 1 }}>
      <Stack direction="row" spacing={2} sx={{ m: "auto" }}>
        {pagesMenuItems.map((page) => (
          <Button size="small" sx={{ color: "white" }} href={`/${page.toLowerCase()}`}>
            {page}
          </Button>
        ))}
      </Stack>
    </AppBar>
  );
};

Header.propTypes = {};

export default Header;
