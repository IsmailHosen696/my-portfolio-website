import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { projectType } from "../../types";
import ProjectMap from "./ProjectMap";

export default function ProjectsRandom() {
    const [randomProject, setRandomProject] = useState<projectType[]>([])
    const { project } = useAuth();

    useEffect(() => {
        if (randomProject.length <= 4) {
            project.forEach((item) => {
                if (!randomProject.includes(item)) {
                    setRandomProject([...randomProject, item]);
                }
                return
            })
        }
        return
    }, [project, randomProject])
    return (
        <div className="flex flex-col gap-5 items-center w-full">
            <h1 className="headline">Some Projects</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center w-full">
                {randomProject.length > 0 &&
                    randomProject.map(data =>
                        <ProjectMap time={data.timestamp} key={data.id} id={data.id} headline={data.headline} projectProfile={data.projectProfile} />
                    )
                }
            </div>
        </div>
    )
}