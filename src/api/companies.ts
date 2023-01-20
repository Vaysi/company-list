import { useQuery } from "@tanstack/react-query";

import { Company } from "src/types";

import data from "../api/companies.json";

export function useCompanies() {
  return useQuery(["companyData"], () => Promise.resolve(data as Company[]));
}
