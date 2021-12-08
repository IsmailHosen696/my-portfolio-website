import axios from "axios";
import { useEffect, useState } from "react";
import LinkIcon from "./LinkIcon";

export default function Footer() {
    const [repoNumbers, setRepoNumbers] = useState<number>(0);
    const [followers, setFollowers] = useState<number>(0);
    useEffect(() => {
        axios.get('https://api.github.com/users/IsmailHosen696').then((data) => {
            setRepoNumbers(data.data.public_repos);
            setFollowers(data.data.followers)
        })
    }, [])
    return (
        <div className=' w-full bg-gray-100 dark:bg-gray-800 py-10'>
            <div className="max-w-screen-2xl mx-auto w-full flex flex-col gap-3 px-10">
                <div className="flex w-full items-center gap-2 justify-center flex-row">
                    <LinkIcon icon="github" link="https://github.com/IsmailHosen696" />
                    <LinkIcon icon="facebook" link="https://web.facebook.com/mdismail.hosen.35513800" />
                    <LinkIcon icon="instagram" link="https://www.instagram.com/ih.ismailhossain" />
                    <LinkIcon icon="twitter" link="https://twitter.com/MdIsmai03817796" />
                </div>
                <h1 className='font-normal text-center'>Designed & Developed by <a className='hover:underline font-medium' href='https://github.com/IsmailHosen696' >Ismail hossain</a></h1>
                <h1 className='text-center py-2'>This website has been built with <span className="font-medium">React</span>  <span className="font-medium">Firebase</span> and <span className="font-medium">TailwindCss .</span></h1>
                <div className="flex flex-wrap items-center gap-3 justify-center">
                    <h1>Repositories : <span className="font-semibold">{repoNumbers}</span></h1>
                    <h1>Followers : <span className="font-semibold">{followers}</span></h1>
                </div>
            </div>
        </div>
    )
}
