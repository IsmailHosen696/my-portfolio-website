import React, { useEffect } from 'react'
import ProjectMap from '../../components/homeall/ProjectMap';
import { useAuth } from '../../contexts/AuthProvider';

export default function AllProjects() {
    const { project } = useAuth();

    useEffect(() => {
        document.title = 'IsmailHsn - Projects'
    })
    return (
        <React.Fragment>
            <div className="flex w-full justify-center items-center">
                <div className="flex flex-col gap-5 sm:px-10 px-2 max-w-screen-2xl items-center w-full">
                    <h1 className="headline text-center">All Projects</h1>
                    <div className="flex flex-col w-full gap-10 mb-10">
                        {project.length > 0 &&
                            project.map(data =>
                                <ProjectMap time={data.timestamp} key={data.id} id={data.id} headline={data.headline} projectProfile={data.projectProfile} />
                            )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
