"use client";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";

const SearchCountries = () => {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleSearch = (): void => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        placeholder="Country"
        value={query}
        onChange={handleTextChange}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchCountries;
