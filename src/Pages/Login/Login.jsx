import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import image from '../../assets/loginImage/login@4x.png'

const Login = () => {

    

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Food Haven || Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img className="w-4/5" src={image} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
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
                    <div className="divider">OR</div>
                    <div className="p-8 pt-0 space-y-6">
                        <p>Already have account? please <Link className="underline text-blue-600" to='/register'>Register</Link></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;