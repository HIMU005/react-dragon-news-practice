import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";
import NewsCard from "./shared/NewsCard";

const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav />
                </div>
                <div className="md:col-span-2 border">
                    {
                        news.map(singleNews =>
                            <NewsCard key={singleNews._id} singleNews={singleNews}>
                            </NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;