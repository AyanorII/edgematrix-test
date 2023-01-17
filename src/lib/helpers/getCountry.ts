import type { RestCountriesApiResponse } from "../../interfaces";

export const getCountry = async (code: string) => {
  const restCountriesApiUrl = "https://restcountries.com/v3.1/alpha/";

  const response = await fetch(restCountriesApiUrl + code);
  const data = await response.json();
  return data[0] as RestCountriesApiResponse;
};
