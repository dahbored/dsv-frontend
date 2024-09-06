import React from "react";
import Image from "next/image";
import type Country from "~/interfaces/Country";
import { Separator } from "~/components/ui/separator";

const CountryList = async ({ query }: { query: string }) => {
  const response = await fetch(
    "https://api.countrylayer.com/v2/name/" +
      query +
      "?access_key=" +
      process.env.COUNTRY_LAYER_API_KEY,
  );
  console.log("query", query);
  console.log("COUNTRY_LAYER_API_KEY", process.env.COUNTRY_LAYER_API_KEY);
  //console.log("response", response);
  const countries: Country[] = (await response.json()) as Country[];
  console.log("countries", countries);
  return (
    <div className="w-1/2">
      {!Array.isArray(countries) && (
        <p className="mt-6 text-xl font-bold">No results</p>
      )}
      {Array.isArray(countries) && countries.length === 0 && (
        <p className="mt-6 text-xl font-bold">No results</p>
      )}
      {Array.isArray(countries) &&
        countries.map((country) => (
          <div key={country.name}>
            <div className="p-4">
              <h3 className="text-xl font-bold">
                {country.name}{" "}
                <span className="text-sm font-light">
                  ({country.alpha3Code})
                </span>
              </h3>
              <p className="pl-4 text-sm font-light">
                Capital: {country.capital} <br /> Region: {country.region}
              </p>
            </div>
            <Separator className="w-1/2mt-4" />
          </div>
        ))}
    </div>
  );
};

export default CountryList;
