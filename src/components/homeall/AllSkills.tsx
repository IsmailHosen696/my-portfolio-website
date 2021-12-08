import SkillCard from './SkillCard'

export default function AllSkills() {
    return (
        <div className='flex flex-col items-center gap-5'>
            <h1 className="headline">Skills</h1>
            <div className="flex justify-center flex-wrap gap-4">
                <SkillCard headline="Frontend" items={["Html", "Css", "Scss", "JavaScript", "Reactjs", "Redux", "TypeScript"]} />
                <SkillCard headline="Others" items={["Electron", "React Native", "Nodejs", "Express"]} />
                <SkillCard headline="Databases" items={["Mysql", "Mongodb", "FIrebase"]} />
                <SkillCard headline="Css Frameworks" items={["Tailwind css", "Bootstrap", "Material Ui"]} />
            </div>
        </div>
    )
}
