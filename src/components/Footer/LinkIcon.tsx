import React from 'react'

export default function LinkIcon({ link, icon, color }: { link: string, icon: string, color: string }) {
    return (
        <button className="w-8 h-8 flex group hover:bg-gray-700 bg-opacity-10 rounded-md items-center justify-center ">
            <a target={'_ismail'} href={link}>
                <i className={`fab fa-${icon} group-hover:text-${color}-200`}></i>
            </a>
        </button>
    )
}
