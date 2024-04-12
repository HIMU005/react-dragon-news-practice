import { useParams } from "react-router-dom";
import Header from "./shared/Header";
import RightSideNav from "./shared/RightSideNav";
import Navbar from "./shared/Navbar";

const News = () => {
    const { id } = useParams
    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2>Details</h2>
                    <p></p>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>

        </div>
    );
};

export default News;