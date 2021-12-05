import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { MenuIcon } from '@heroicons/react/solid'
import { useState } from "react";
import { usePortfolio } from "../../hooks/usePortfolio";
import { Actions } from "../../constants";


export default function Navbar() {
    const [isMenuBarOpen, setIsMenuBarOpen] = useState<boolean>(false);
    const { state: { darkMode }, dispatch } = usePortfolio();
    return (
        <div className="sticky left-0 right-0 z-30 top-0 w-full h-16 items-center flex justify-center bg-white dark:bg-gray-900">
            <div className="flex mx-auto sm:px-10 px-5 max-w-screen-2xl items-center justify-between relative w-full">
                <div className="flex">
                    <Link to='/' className="text-2xl font-semibold text-gray-700 dark:text-gray-200">IsmailHsn</Link>
                </div>
                <div style={{ fontFamily: "'Nunito', sans-serif" }} className={`sm:gap-8 sm:pb-0 pb-5 gap-3 sm:px-0 px-5 flex items-start sm:bg-auto bg-white dark:bg-gray-900 sm:items-center sm:flex-row flex-col absolute top-10 sm:w-auto left-0 sm:static w-full ${isMenuBarOpen ? "sm:visible visible" : "sm:visible invisible"}`}>
                    <a target={'_ismail'} href="https://github.com/IsmailHosen696">
                        <i className="fab fa-github text-xl"></i>
                    </a>
                    <NavLink className="text-lg hover:text-gray-700 dark:hover:text-gray-300" to='/projects'>
                        Project
                    </NavLink>
                    <NavLink className="text-lg hover:text-gray-700 dark:hover:text-gray-300" to='/contact'>
                        Contact
                    </NavLink>
                    <button onClick={() => dispatch({ type: Actions.TOOGLE_DARK_MODE })} className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-150">
                        {
                            darkMode ?
                                <MoonIcon className="w-5 h-5" />
                                :
                                <SunIcon className="w-5 h-5" />
                        }
                    </button>
                    <Link to='/signin' className="text-lg bg-blue-500 rounded-3xl text-white font-bold w-24 flex items-center justify-center h-9 hover:bg-blue-600">
                        Login
                    </Link>
                </div>
                <div className="flex sm:hidden">
                    <button className="sm:hidden" onClick={() => setIsMenuBarOpen(!isMenuBarOpen)}>
                        <MenuIcon className="w-5 h-5 font-semibold" />
                    </button>
                </div>
            </div>
        </div>
    )
}