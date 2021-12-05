export default function Footer() {
    return (
        <div className=' w-full bg-gray-50 dark:bg-gray-800 py-10 '>
            <div className="max-w-screen-2xl mx-auto px-10">
                <h1 className='font-normal text-center'>Designed and Developed by <a className='hover:underline font-medium' href='https://github.com/IsmailHosen696' >Ismail hossain</a></h1>
                <h1 className='text-center py-2'>This website has been built with React and Firebase</h1>
                <div className="flex w-full items-center justify-center flex-row">
                    <i className='fab fa-github'></i>
                </div>
            </div>
        </div>
    )
}
