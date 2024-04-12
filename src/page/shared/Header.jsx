import header from "../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img className="mx-auto" src={header} alt="" />
            <p className="text-center ">Journalism Without Fear or Favour</p>
            <h1 className="text-center ">{moment().format("dddd, MMMM D, YYYY")}</h1>
        </div>
    );
};

export default Header;