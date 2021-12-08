import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";

export default function Contact() {
    const [error, setError] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)
    const [successMessage, setSuccessMessage] = useState<string>('')

    useEffect(() => {
        document.title = 'IsmailHsn - Contact'
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true)
        setSuccessMessage('');

        if (!username || !email || !message) {
            setLoading(false)
            return setError("fill all the fields carefully");
        }
        else {
            const data = {
                username,
                email,
                message
            }
            try {
                axios.post(`https://ismailhsn-backend.herokuapp.com/sendmail`, { data }).then((res) => {
                    if (res.data.accepted) {
                        setSuccessMessage('message sent successfully')
                        setLoading(false);
                    } else {
                        setLoading(false);
                        setError('some error occured');
                    }
                }).catch((err) => {
                    console.log(err);
                    setLoading(false);
                })
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-screen-2xl flex flex-col items-center w-full sm:px-10 px-2 my-10">
                <h1 className="text-center font-medium text-3xl my-5">Contact Us</h1>
                <div className="w-full lg:flex-row lg:justify-around flex-col items-center justify-center flex">
                    <div className="flex items-center flex-col">
                        <img src="https://i.ibb.co/n7cWBrq/image-removebg-preview-10.png" alt="contact_us_image" />
                    </div>
                    <div className="xl:w-6/12 lg:w-7/12 sm:w-8/12 w-full">
                        {error && <p className="text-red-600 bg-red-600 rounded-full px-2 py-5 text-center bg-opacity-10">{error}</p>}
                        {successMessage && <p className="text-green-600 bg-green-600 rounded-full px-2 py-5 bg-opacity-10 text-center">{successMessage}</p>}
                        <form onSubmit={handleSubmit} className="flex mt-5 flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <input value={username}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                                    type="text"
                                    className="outline-none dark:bg-gray-800 dark:border-transparent border-gray-300 rounded-full px-5 h-16 border dark:placeholder-gray-400 placeholder-gray-300 font-normal"
                                    autoComplete="off" placeholder="your username" id="username" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <input type="email"
                                    value={email}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                    className="outline-none dark:bg-gray-800 dark:border-transparent border-gray-300 rounded-full px-5 h-16 border dark:placeholder-gray-400 placeholder-gray-300 font-normal"
                                    autoComplete="off" placeholder="your email address" id="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <textarea
                                    value={message}
                                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                                    className="outline-none dark:bg-gray-800 dark:border-transparent py-5 border-gray-300 resize-none rounded-3xl px-5 h-40 border placeholder-gray-300 dark:placeholder-gray-400 font-normal"
                                    autoComplete="off" placeholder="your message" id="email" ></textarea>
                            </div>
                            <button className="w-full mt-3 text-lg outline-none bg-blue-500 text-white cursor-pointer rounded-full h-16" disabled={loading} >{loading ? <Loading /> : "Send"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
