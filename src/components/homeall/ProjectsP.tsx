import { projectType } from "../../types"
import ProjectMap from "./ProjectMap"

export const pData: projectType[] = [
    {
        id: 'dfsdf6',
        headline: "react calculator",
        description: `[ol](http://localhost:3001)`,
        showCase: "https://firebasestorage.googleapis.com/v0/b/new-clone-5104d.appspot.com/o/images%2Fimage-removebg-preview%20(2).png?alt=media&token=d5514b2c-c742-4520-827b-793588040198"
    },
    {
        id: 'dfsdf5',
        headline: "react calculator",
        description: `### this project build with typescript and react \n ## hello`,
        showCase: "https://firebasestorage.googleapis.com/v0/b/new-clone-5104d.appspot.com/o/images%2Fimage-removebg-preview%20(2).png?alt=media&token=d5514b2c-c742-4520-827b-793588040198"
    },
    {
        id: 'dfsdf5',
        headline: "react calculator",
        description: `### this project build with typescript and react \n ## hello`,
        showCase: "https://firebasestorage.googleapis.com/v0/b/new-clone-5104d.appspot.com/o/images%2Fimage-removebg-preview%20(2).png?alt=media&token=d5514b2c-c742-4520-827b-793588040198"
    }
]

export default function ProjectsP() {
    return (
        <div className="flex flex-col gap-5 items-center w-full">
            <h1 className="headline">Projects</h1>
            <div className="grid grid-cols-2 gap-5 justify-center w-full">
                {
                    pData.map(data =>
                        <ProjectMap key={data.id} id={data.id} headline={data.headline} description={data.description} showCase={data.showCase} />
                    )
                }
            </div>
        </div>
    )
}