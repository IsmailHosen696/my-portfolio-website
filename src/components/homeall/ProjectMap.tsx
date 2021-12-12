import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function ProjectMap({ id,
    headline,
    projectProfile,
    time
}: {
    id: string;
    headline: string;
    projectProfile: string;
    time: string;
}) {

    return (
        <Link to={`/show/project/${id}`} className="group w-full gap-3 flex flex-col">
            <img src={projectProfile} alt="showcase_image" className="rounded h-96 object-cover shadow-lg" />
            <p className="text-sm">
                {
                    new Date(time).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })
                }
            </p>
            <div className="flex flex-row items-center overflow-hidden">
                <h1 className="text-xl group-hover:underline truncate">{headline}</h1>
                <ArrowRightIcon className="w-5 dark:text-gray-300 text-gray-700 h-5 opacity-0 group-hover:opacity-100 ml-5 transition-all duration-150" />
            </div>
        </Link>
    )
}