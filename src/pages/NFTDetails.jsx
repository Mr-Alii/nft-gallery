import { useParams, Link } from "react-router-dom";
import nfts from "../data/nfts";

export default function NFTDetails() {
  const { id } = useParams();
  const nft = nfts.find((n) => n.id === Number(id));

  if (!nft) {
    return (
      <section className="section">
        <p className="muted">NFT not found.</p>
        <Link to="/" className="btn">← Back to Gallery</Link>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="details">
        <img className="details-img" src={nft.image} alt={nft.name} />
        <div className="details-body">
          <h2 className="h2">{nft.name}</h2>
          <p className="muted">By {nft.artist} • <span className="chip">{nft.category}</span></p>
          <p className="price-lg">{nft.priceEth} ETH</p>
          <p className="desc">{nft.description}</p>
          <Link to="/" className="btn">← Back to Gallery</Link>
        </div>
      </div>
    </section>
  );
}
