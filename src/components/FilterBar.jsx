export default function FilterBar({
    query,
    setQuery,
    category,
    setCategory,
    sort,
    setsort,
    categories
}) {
    return (
        <div className="filterbar">
            <input className="input" type="text" placeholder="Search by name or artist..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Ali">All Categories</option>
                {categories.map((c) => (<option key={c} value={c}> </option>))}
            </select>

            <select className="select" value={sort} onChange={(e) => setsort(e.target.value)}>
                <option value="relevance">Sort: Relevance</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
            </select>
        </div>
    );
}