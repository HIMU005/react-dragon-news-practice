import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.config";

const Login = () => {
    const { signIn, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    // eslint-disable-next-line no-unused-vars
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(auth, email, password)
            .then(result =>
                setUser(result.user),
                navigate(location?.state ? location.state : '/')
            )
            .catch(error => console.log(error))

    }
    return (
        <div>
            <Navbar />
            <h2 className="text-3xl text-center">Please Login</h2>

            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>

            <p className="text-center">Do not have an account. <Link to={'/register'} className="btn btn-link">Register</Link></p>
        </div>
    );
};

export default Login;