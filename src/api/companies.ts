import { Company } from "src/types";

import data from "../api/companies.json";
import { useQuery } from "@tanstack/react-query";

export function useCompanies() {
  return useQuery(['companyData'], () => Promise.resolve(data as Company[]))
}
