import CountryList from "~/components/country-list";
import SearchCountries from "~/components/search-countries";

export default function Countries({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const query = searchParams?.q ?? "";

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-8">
        <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
          Countries
        </h1>
        <SearchCountries />
        <CountryList query={query} />
      </div>
    </main>
  );
}
