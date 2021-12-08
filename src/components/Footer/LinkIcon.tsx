export default function LinkIcon({ link, icon }: { link: string, icon: string }) {
    return (
        <button className="w-8 h-8 flex bg-opacity-10 group rounded-md items-center justify-center ">
            <a target={'_ismail'} href={link}>
                <i className={`fab text-lg group-hover:text-blue-400 fa-${icon}`}></i>
            </a>
        </button>
    )
}
