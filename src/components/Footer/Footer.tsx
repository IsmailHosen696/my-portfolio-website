import LinkIcon from "./LinkIcon";

export default function Footer() {
    return (
        <div className=' w-full bg-gray-100 dark:bg-gray-800 py-10'>
            <div className="max-w-screen-2xl mx-auto px-10">
                <h1 className='font-normal text-center'>Designed and Developed by <a className='hover:underline font-medium' href='https://github.com/IsmailHosen696' >Ismail hossain</a></h1>
                <h1 className='text-center py-2'>This website has been built with <span className="font-medium">React</span>  <span className="font-medium">Firebase</span> and <span className="font-medium">TailwindCss .</span></h1>
                <div className="flex w-full items-center gap-2 justify-center flex-row">
                    <LinkIcon color="gray" icon="github" link="https://github.com/IsmailHosen696" />
                    <LinkIcon color="blue" icon="facebook" link="https://web.facebook.com/mdismail.hosen.35513800" />
                    <LinkIcon color="red" icon="instagram" link="https://www.instagram.com/ih.ismailhossain" />
                    <LinkIcon color="blue" icon="twitter" link="https://twitter.com/MdIsmai03817796" />
                </div>
            </div>
        </div>
    )
}
