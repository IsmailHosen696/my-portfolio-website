import { useAuth } from "../../contexts/AuthProvider";
import ProjectMap from "./ProjectMap";

export default function ProjectsRandom() {
    const { project } = useAuth();

    return (
        <div className="flex flex-col gap-5 items-center w-full">
            <h1 className="headline">Projects</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center w-full">
                {project.length > 0 &&
                    project.map(data =>
                        <ProjectMap time={data.timestamp} key={data.id} id={data.id} headline={data.headline} projectProfile={data.projectProfile} />
                    )
                }
            </div>
        </div>
    )
}