import { Star, StarOutline } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useContext, useState } from "react";

import { favoritesContext } from "../utils/context";

function Header({ showOnlyFavs }: { showOnlyFavs: any }) {
  const { favorites } = useContext(favoritesContext);
  const [clicked, setClicked] = useState(false);
  const onlyFavs = () => {
    if (clicked) {
      showOnlyFavs(false);
      setClicked(false);
    } else {
      showOnlyFavs();
      setClicked(true);
    }
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Specter
        </Typography>
        {favorites.length > 0 ? (
          <IconButton onClick={onlyFavs}>
            {clicked ? (
              <StarOutline sx={{ color: "#FFEB3B", fontSize: 25 }} />
            ) : (
              <Star sx={{ color: "#FFEB3B", fontSize: 25 }} />
            )}
          </IconButton>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
