import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { projectType } from "../../types";

export default function ProjectMap({ id,
    headline,
    description,
    showCase
}: projectType) {

    return (
        <Link to={`/show/project/${id}`} className="group w-full">
            <img src={showCase} alt="showcase_image" />
            <div className="flex flex-row items-center">
                <h1 className="text-2xl">{headline}</h1>
                <ArrowRightIcon className="w-5 text-gray-700 h-5 opacity-0 group-hover:opacity-100 ml-5 transition-all duration-150" />
            </div>
        </Link>
    )
}