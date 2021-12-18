import { XIcon } from "@heroicons/react/solid";
import { FirebaseError } from "firebase/app";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { addProjectToFirebase } from "../../api";
import Loading from "../../components/loading/Loading";
import { randomidgenarator } from "../../components/ranidgen";
import { useAuth } from "../../contexts/AuthProvider";
import { projectType } from "../../types";

export default function AddProject() {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [tempUrl, setTempUrl] = useState<string | null>('')
    const [file, setFile] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const { imageUrlMaker } = useAuth()
    const [headline, setHeadline] = useState<string>('');
    const [description, setDescription] = useState<string>('')
    const [links, setLinks] = useState<{
        gitRepoURL: string,
        hostedURL: string | undefined
    }>({
        hostedURL: "",
        gitRepoURL: ''
    })

    useEffect(() => {
        if (file) {
            const obj = URL.createObjectURL(file[0])
            setTempUrl(obj);
            return () => URL.revokeObjectURL(obj);
        }
        return
    }, [file]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");
        setFile(null);
        setTempUrl("");
        if (!imageUrl || !headline || !description) {
            setLoading(false)
            setError("please fill all the fields");
            return
        }
        else {
            try {
                let time = new Date().toString()
                let payload: projectType = {
                    id: randomidgenarator(),
                    headline,
                    description,
                    projectProfile: imageUrl,
                    timestamp: time,
                    hostedURL: links.hostedURL,
                    gitRepoURL: links.gitRepoURL
                }
                addProjectToFirebase(payload).then(() => {
                    setLoading(false);
                    setMessage("project uploaded");
                }).catch((err: FirebaseError) => {
                    setLoading(false);
                    setError(err.message);
                });
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
    }

    const handleUploadImage = async () => {
        setLoading(true);
        setError("");
        setMessage("");
        await imageUrlMaker(file[0]).then((data) => {
            setLoading(false);
            setMessage('image uploded and copied in clipboard');
            window.navigator.clipboard.writeText(data as string);
            setFile(null);
            setTempUrl('');
        }).catch((err: FirebaseError) => {
            setLoading(false);
            setError(err.message);
        })
    }
    return (
        <div className="flex flex-col w-full">
            <div className="max-w-screen-2xl my-5 justify-center items-center mx-auto flex flex-col w-full sm:px-10 px-2">
                <div className="xl:w-6/12 lg:w-7/12 w-full flex flex-col gap-5" >
                    <h1 className="text-2xl text-center">Create New Portfolio Project</h1>
                    {message && <p className="success-status text-center">{message}</p>}
                    {error && <p className="error-status text-center">{error}</p>}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="gap-2 flex flex-col">
                            <label htmlFor="postProfile">Post profile</label>
                            <input autoComplete="off" value={imageUrl} onChange={(e: ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)} placeholder="paste the image url which I get by uploading that is auto copied into clipboard" type="text" id="postProfile" className="outline-none dark:border-gray-700 px-2 py-1 border bg-transparent rounded h-10" />
                        </div>
                        <div className="gap-2 flex flex-col">
                            <label htmlFor="projectHeading">Headline</label>
                            <input autoComplete="off" value={headline} onChange={(e: ChangeEvent<HTMLInputElement>) => setHeadline(e.target.value)} placeholder="project showcase headline" type="text" id="projectHeading" className="outline-none dark:border-gray-700 px-2 py-1 border bg-transparent rounded h-10" />
                        </div>
                        <div className="gap-2 flex flex-col">
                            <label htmlFor="projectHeading">HostedUrl</label>
                            <input autoComplete="off" value={links.hostedURL} onChange={(e: ChangeEvent<HTMLInputElement>) => setLinks({ ...links, hostedURL: e.target.value })} placeholder="hosted or published url" type="text" id="projectHeading" className="outline-none dark:border-gray-700 px-2 py-1 border bg-transparent rounded h-10" />
                        </div>
                        <div className="gap-2 flex flex-col">
                            <label htmlFor="projectHeading">Git Repository Url</label>
                            <input autoComplete="off" value={links.gitRepoURL} onChange={(e: ChangeEvent<HTMLInputElement>) => setLinks({ ...links, gitRepoURL: e.target.value })} placeholder="git repository url" type="text" id="projectHeading" className="outline-none dark:border-gray-700 px-2 py-1 border bg-transparent rounded h-10" />
                        </div>
                        <div className="gap-2 flex flex-col">
                            <label htmlFor="projectDescription">Description</label>
                            <textarea value={description} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} placeholder="project description ( can me markdown )" id="projectDescription" className="outline-none rounded resize-none h-40 px-2 py-1 bg-transparent dark:border-gray-700 border" ></textarea>
                        </div>
                        <div className="flex flex-row gap-4">
                            <h1>Choose a cover photo </h1>
                            <label htmlFor="image" className="px-2 cursor-pointer text-sm py-1 bg-gray-700 text-gray-200 rounded">Choose</label>
                            <input onChange={(e: ChangeEvent<HTMLInputElement>) => setFile(e.target.files)} type="file" id="image" className="opacity-0 hidden" />
                        </div>
                        {
                            imageUrl &&
                            <button className="w-full bg-blue-500 text-white h-10 rounded">{loading ? <Loading /> : 'Add'}</button>
                        }
                    </form>
                    <div className="flex relative">
                        {
                            tempUrl &&
                            <div className="flex flex-col gap-5">
                                <img src={tempUrl} alt="temporary_image" />
                                <button disabled={loading} type="button" className="absolute top-2 right-2" onClick={() => { setTempUrl(null); setFile(null) }}>
                                    <XIcon className="w-5 h-5 text-gray-600" />
                                </button>
                                <button disabled={loading} type="button" onClick={handleUploadImage} className="w-full bg-blue-500 text-white h-10 rounded">{loading ? <Loading /> : 'Upload & get url'}</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
