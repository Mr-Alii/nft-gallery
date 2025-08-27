import { Link } from "react-router-dom";
export default function NFTCard({ nft }) {
    return(
        <div className="card">
            <div className="card-media">
                <img src={nft.image} alt={nft.name} loading="lazy"/>
            </div>
            <div className="card-body">
                <h3 className="title">{nft.name}</h3>
                <div className="meta">
                    <span className="artist">By {nft.artist}</span>
                    <span className="price"> {nft.priceEth} Eth </span>
                </div>
                <div className="chip"> {nft.category}</div>
                <Link to={`/nft/${nft.id}`} className="btn" >
                View Details
                </Link>
            </div>
        </div>
    );
}