import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    })
    return (
        <div className="space-y-5">
            <h2>All categories{categories.length}</h2>
            {
                categories.map(category =>
                    <Link to={`/category/${category.id}`} className="block bg-slate-300 rounded-2xl mb-2 p-2" key={category.id}>
                        {category.name}
                    </Link>)
            }
        </div>
    );
};

export default LeftSideNav;