import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
    const { title, thumbnail_url, details, _id } = singleNews;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-500 font-bold">Read More</Link></p> :
                        <p>{details}</p>
                }

            </div>
        </div>
    );
};

export default NewsCard;