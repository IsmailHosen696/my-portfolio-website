import { FirebaseError } from "firebase/app";
import { signInWithPopup, } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { auth, provider } from "../../db/firebase";

export default function Signin() {
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const googleLogin = async () => {
        setLoading(true)
        await signInWithPopup(auth, provider).then(() => {
            navigate('/');
            setLoading(false)
        }).catch((err: FirebaseError) => {
            setError(err.message);
            setLoading(false)
        })
    }
    return (
        <div className="w-full flex items-center h-screen justify-center flex-col">
            <div className="xl:w-3/12 md:w-5/12 sm:w-5/12 px-4 w-96 mt-12 py-5 flex flex-col rounded-md border gap-5">
                <h1 className="text-lg font-medium text-center">Signin with google to continue</h1>
                {error && <p className="text-red-600 bg-red-600 rounded px-2 py-2 text-center bg-opacity-10">{error}</p>}
                <button onClick={googleLogin} className="w-full flex items-center justify-center border h-10 bg-blue-500 text-white rounded" disabled={loading} >{loading ? <Loading /> : <span><i className="fab fa-google text-lg px-2"></i> Continue with Google</span>}</button>
            </div>
        </div>
    )
}
