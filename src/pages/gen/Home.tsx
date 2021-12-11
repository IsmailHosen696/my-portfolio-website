import { useEffect } from "react";
import { AllSkills } from "../../components/homeall";
import ProjectsRandom from "../../components/homeall/ProjectsRandom";

export default function Home() {
    useEffect(() => {
        document.title = 'IsmailHsn'
    })
    return (
        <div className="w-full flex items-center justify-center">
            <div className="max-w-screen-2xl flex gap-10 mt-16 flex-col w-full sm:px-10 px-2 py-4">
                <div className="flex flex-col gap-4 xl:w-5/12" >
                    <h1 className="text-lg font-medium nunito">Hello My name is </h1>
                    <h1 className="text-3xl nunito font-semibold">Ismail Hossain .</h1>
                    <h1 className="nunito text-xl">I am a frontend <span className="font-semibold nunito">web deveoper.</span></h1>
                    <p className="nunito font-medium">I create websites and make them responsive . I use scss, css and Tailwindcss to make site responsive. </p>
                </div>
                <div className="flex w-full">
                    <AllSkills />
                </div>
                <div className="flex w-full">
                    <ProjectsRandom />
                </div>
            </div>
        </div>
    )
}
