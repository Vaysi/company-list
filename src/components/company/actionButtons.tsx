import { Favorite, Instagram, LinkedIn, Public, Shop, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useContext } from "react";

import { Company } from "../../types";
import { favoritesContext, toastContext } from "../../utils/context";

interface Props {
  item: Company;
}

function ActionButton({ item }: Props) {
  const { setToast } = useContext(toastContext);
  const { favorites, setFavorites } = useContext(favoritesContext);

  const toggleFav = () => {
    if (favorites.includes(item["Company Name"])) {
      setFavorites(favorites.filter((favItem) => favItem !== item?.["Company Name"]));
      setToast({
        show: true,
        message: "Company Removed from Favorites List",
        color: "warning",
      });
    } else {
      setFavorites([...favorites, item["Company Name"]]);
      setToast({
        show: true,
        message: "Company Added to Favorites List",
        color: "success",
      });
    }
  };
  const isInFavList = favorites.includes(item["Company Name"]);
  return (
    <>
      <IconButton onClick={toggleFav}>
        <Favorite color={isInFavList ? "secondary" : undefined} />
      </IconButton>

      {item["Domain"] ? (
        <IconButton href={"http://" + item["Domain"]}>
          <Public sx={{ color: "#00C9FF" }} />
        </IconButton>
      ) : null}

      {item["LinkedIn - URL"] ? (
        <IconButton href={item["LinkedIn - URL"]}>
          <LinkedIn sx={{ color: "#0e86a8" }} />
        </IconButton>
      ) : null}

      {item["Twitter - URL"] ? (
        <IconButton href={item["Twitter - URL"]}>
          <Twitter sx={{ color: "#1DA1F2" }} />
        </IconButton>
      ) : null}

      {item["Instagram - URL"] ? (
        <IconButton href={item["Instagram - URL"]}>
          <Instagram sx={{ color: "#fbad50" }} />
        </IconButton>
      ) : null}

      {item["Google Play - URL"] ? (
        <IconButton href={item["Google Play - URL"]}>
          <Shop sx={{ color: "#00F076" }} />
        </IconButton>
      ) : null}
    </>
  );
}

export default ActionButton;
