import { FirebaseError } from "firebase/app";
import { Fragment, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteFirebaseProject, findProjectWithId } from "../../api";
import { projectType } from "../../types";
import gfm from 'remark-gfm'
import { DotsVerticalIcon, ExternalLinkIcon, LinkIcon } from "@heroicons/react/solid";
import Loading from "../../components/loading/Loading";
import { useAuth } from "../../contexts/AuthProvider";

export default function ShowProject() {
    const params = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false)
    const { user } = useAuth();
    const [project, setProject] = useState<projectType | null>(null);
    useEffect(() => {
        findProjectWithId(params.pId as string).then((data) => {
            setProject(data[0])
        }).catch((err: FirebaseError) => {
            console.log(err);
        })
    }, [params.pId])

    const deleteProject = (id: string | undefined) => {
        setLoading(true)
        deleteFirebaseProject(id as string).then(() => {
            navigate('/')
            setLoading(false)
        }).catch((err: FirebaseError) => {
            setLoading(false)
            console.log(err.message)
        });
    }

    return (
        <Fragment>
            <div className="w-full h-full flex items-center justify-center">
                <div className="lg:w-7/12 w-full lg:px-0 px-2 mb-10 sm:px-10 max-w-screen-2xl flex flex-col gap-5 mx-auto ">
                    <img src={project?.projectProfile} className="rounded" alt="project_profile_img" />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-black">{project?.headline}</h1>
                        <p className="text-sm">
                            {
                                new Date(project?.timestamp as string).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })
                            }
                        </p>
                    </div>
                    <div className="flex items-center gap-5 flex-row">
                        {project?.hostedURL && <a target="_ismail" title="view live view of the project" href={`${project?.hostedURL}`} ><LinkIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" /></a>}
                        <a target="_ismail" href={`${project?.gitRepoURL}`} title="view git repo"><ExternalLinkIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" /></a>
                    </div>
                    <article className="prose">
                        <ReactMarkdown remarkPlugins={[gfm]} >{project?.description as string}</ReactMarkdown>
                    </article>
                    {user?.email === process.env.RREACT_APP_ADMIN_EMAIL &&
                        <div className="flex w-full items-center gap-5">
                            <Link to={`/edit/project/${project?.id}`} className="btn btn-secondary w-20 py-2">Edit <DotsVerticalIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" /></Link>
                            <button onClick={() => { deleteProject(project?.id) }} className="btn py-2 h-10 w-20 btn-danger px-3">{loading ? <Loading /> : 'Delete'}</button>
                        </div>
                    }
                </div>
            </div>
        </Fragment>
    )
}
