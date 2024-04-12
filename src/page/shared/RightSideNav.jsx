import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"


const RightSideNav = () => {
    return (
        <div>
            {/* login  */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Sign in with google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Sign in with Github
                </button>
            </div>
            {/* connect with us */}
            <div className="p-4 mb-6">
                <h2 className="text-2xl">Find Us on</h2>
                <a className="p-4 text-lg font-semibold flex items-center gap-2 border rounded-t-2xl" href=""><FaFacebook className="text-primary" /> Facebook</a>
                <a className="p-4 text-lg font-semibold flex items-center gap-2 border-x" href=""><FaTwitter className="text-primary" /> Twitter</a>
                <a className="p-4 text-lg font-semibold flex items-center gap-2 border rounded-b-2xl" href=""><FaInstagram className="text-secondary" /> Instragram</a>
            </div>

            {/* q zone  */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;