import {createContext} from "react";
import {Company} from "../types";

interface favoritesState {
    favorites: Array<string>;
    setFavorites: any;
}

export interface toastState {
    toast: {
        show: boolean,
        message: string,
        color: string | any
    } | null;
    setToast: any;
}

export interface CompaniesState {
    companies: Array<Company>;
    setCompanies: any;
}

export const favoritesContext = createContext<favoritesState>({
    favorites: [], setFavorites: null
});

export const toastContext = createContext<toastState>({
    toast: null, setToast: null
});

export const companiesContext = createContext<CompaniesState>({
    companies: [], setCompanies: null
});
