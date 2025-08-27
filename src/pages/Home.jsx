import { useMemo, useState } from "react";
import NFTCard from "../components/NFTCard.jsx";
import FilterBar from "../components/FilterBar.jsx";
import nfts from "../data/nfts.js";

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("relevance");

  const categories = useMemo(
    () => Array.from(new Set(nfts.map((n) => n.category))),
    []
  );

  const filtered = useMemo(() => {
    let list = [...nfts];

    // filter by query
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (n) =>
          n.name.toLowerCase().includes(q) ||
          n.artist.toLowerCase().includes(q)
      );
    }

    // filter by category
    if (category !== "All") {
      list = list.filter((n) => n.category === category);
    }

    // sort
    if (sort === "price-asc") {
      list.sort((a, b) => a.priceEth - b.priceEth);
    } else if (sort === "price-desc") {
      list.sort((a, b) => b.priceEth - a.priceEth);
    }

    return list;
  }, [query, category, sort]);

  return (
    <section className="section">
      <h1 className="h1">Explore NFTs</h1>

      <FilterBar
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />

      {filtered.length === 0 ? (
        <p className="muted">No NFTs match your filters.</p>
      ) : (
        <div className="grid">
          {filtered.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      )}
    </section>
  );
}
