import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import image from '../../assets/loginImage/login@4x.png'

const Register = () => {

    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { signUp, updateUserProfile } = useAuth()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = async (data) => {

        signUp(data?.email, data?.password)
            .then(() => {
                toast.success('Register Successfully')
                navigate('/')
            })


    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Food Haven || Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img className="w-4/5" src={image} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center text-4xl pt-2">Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input type="file" {...register("photoUrl", { required: true })} placeholder="PhotoUrl" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="Password" className="input input-bordered" />
                            {errors.password && <span>minLength 6</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="p-8 pt-0 space-y-6">
                        <p>Create new account? <Link className="underline py-5 text-center text-blue-600" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;