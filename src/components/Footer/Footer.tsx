export default function Footer() {
    return (
        <div className=' w-full bg-gray-100 dark:bg-gray-800 py-10 mt-20'>
            <div className="max-w-screen-2xl mx-auto px-10">
                <h1 className='font-normal text-center'>Designed and Developed by <a className='hover:underline font-medium' href='https://github.com/IsmailHosen696' >Ismail hossain</a></h1>
                <h1 className='text-center py-2'>This website has been built with <span className="font-medium">React</span>  <span className="font-medium">Firebase</span> and <span className="font-medium">TailwindCss .</span></h1>
                <div className="flex w-full items-center gap-2 justify-center flex-row">
                    <a target={'_ismail'} href="https://github.com/IsmailHosen696">
                        <i className='fab fa-github hover:text-gray-700 dark:hover:text-gray-50'></i>
                    </a>
                    <a target={'_ismail'} href="https://web.facebook.com/mdismail.hosen.35513800">
                        <i className='fab fa-facebook hover:text-blue-400'></i>
                    </a>
                    <a target={'_ismail'} href="https://www.instagram.com/ih.ismailhossain">
                        <i className='fab fa-instagram hover:text-red-400'></i>
                    </a>
                    <a target={'_ismail'} href="https://twitter.com/MdIsmai03817796">
                        <i className='fab fa-twitter hover:text-blue-500'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
