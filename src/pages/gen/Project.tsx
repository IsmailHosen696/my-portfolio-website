import { FirebaseError } from "firebase/app";
import { Fragment, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom"
import { findProjectWithId } from "../../api";
import { projectType } from "../../types";
import gfm from 'remark-gfm'
import { ExternalLinkIcon, LinkIcon } from "@heroicons/react/solid";

export default function Project() {
    const params = useParams();

    const [project, setProject] = useState<projectType | null>(null);
    console.log(project);
    useEffect(() => {
        findProjectWithId(params.pId as string).then((data) => {
            setProject(data[0])
        }).catch((err: FirebaseError) => {
            console.log(err);
        })
    }, [params.pId])
    return (
        <Fragment>
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-screen-2xl flex flex-col gap-5 mx-auto px-10">
                    <img src={project?.projectProfile} alt="project_profile_img" />
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
                        {project?.hostedURL && <Link title="view live view of the project" to={`${project?.hostedURL}`} ><LinkIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" /></Link>}
                        <Link to={`${project?.gitRepoURL}`} title="view git repo"><ExternalLinkIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" /></Link>
                    </div>
                    <article className="prose">
                        <ReactMarkdown remarkPlugins={[gfm]} >{project?.description as string}</ReactMarkdown>
                    </article>
                </div>
            </div>
        </Fragment>
    )
}
