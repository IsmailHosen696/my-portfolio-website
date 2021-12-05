import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

export default function Signin() {
    const [error, setError] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [eyeOpen, setEyeOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true)
        if (!email || !password) {
            setLoading(false)
            return setError("fill all the fields carefully");
        }
        if (password.length < 6) {
            setLoading(false)
            return setError("password length must me greater than 6 charecter");
        }
        else {
            try {

            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className="w-full flex items-center justify-center">
            <div className="2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-7/12 sm:w-8/12 sm:px-10 px-2 mt-12 py-5 w-full flex flex-col rounded-md border gap-5">
                <h1 className="text-lg font-medium text-center">Welcome back ! signin to continue</h1>
                {error && <p className="text-red-600 bg-red-600 rounded px-2 py-2 text-center bg-opacity-10">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            className="outline-none border-gray-100 rounded-md px-2 h-11 border placeholder-gray-300 font-normal focus:ring-blue-400 ring ring-transparent"
                            autoComplete="off" placeholder="add email" id="email" />
                    </div>
                    <div className="flex flex-col relative">
                        <label htmlFor="password">Password</label>
                        <input type={`${eyeOpen ? "text" : 'password'}`}
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            className="outline-none border-gray-100 rounded-md px-2 h-11 border placeholder-gray-300 font-normal focus:ring-blue-400 ring ring-transparent"
                            autoComplete="off" placeholder="add password" id="password" />
                        <button type="button" onClick={() => setEyeOpen(!eyeOpen)} className="absolute right-3 top-10">
                            {
                                eyeOpen ?
                                    <EyeIcon className="w-4 h-4" />
                                    : <EyeOffIcon className="w-4 h-4" />
                            }
                        </button>
                    </div>
                    <button className="w-full mt-3 text-lg outline-none bg-blue-500 text-white cursor-pointer rounded h-10" disabled={loading} >{loading ? <Loading /> : "Signin"}</button>
                </form>
                <button className="w-full flex items-center justify-center border h-10 rounded" disabled={loading} >{loading ? <Loading /> : <span><i className="fab fa-google text-blue-500 text-lg px-2"></i> Continue with Google</span>}</button>
                <div className="flex  flex-col mt-5">
                    <Link to='/signup' className="text-center">Don't have an account ? <span className="hover:underline hover:text-blue-500">Create new one</span></Link>
                </div>
            </div>
        </div>
    )
}
