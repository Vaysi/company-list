import { Container } from "@mui/material";
import { useEffect, useState } from "react";

import { useCompanies } from "./api/companies";
import Companies from "./components/companies";
import Header from "./components/header";
import Toast from "./components/toast";
import { companiesContext, favoritesContext, toastContext } from "./utils/context";
import "./App.css";

function App() {
  const { data } = useCompanies();
  const [companies, setCompanies] = useState(data ?? []);
  const [favorites, setFavorites] = useState<any>([]);
  const [toast, setToast] = useState<any>({
    show: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    const favData = localStorage.getItem("favorites");
    if (favData) {
      setFavorites(JSON.parse(favData));
    }
  }, []);

  useEffect(() => {
    if (favorites.length) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      localStorage.removeItem("favorites");
    }
  }, [favorites]);

  useEffect(() => {
    setCompanies(data ?? []);
  }, [data]);

  const showOnlyFavs = (showOnlyFavorites = true) => {
    const newData = data ?? companies;
    if (showOnlyFavorites) {
      setCompanies(newData.filter((item) => favorites.includes(item["Company Name"])));
    } else {
      setCompanies(newData);
    }
  };

  return (
    <>
      <companiesContext.Provider value={{ companies, setCompanies }}>
        <toastContext.Provider value={{ toast, setToast }}>
          <favoritesContext.Provider value={{ favorites, setFavorites }}>
            <Header showOnlyFavs={showOnlyFavs} />
            <Container>
              <Companies />
            </Container>
            <Toast />
          </favoritesContext.Provider>
        </toastContext.Provider>
      </companiesContext.Provider>
    </>
  );
}

export default App;
