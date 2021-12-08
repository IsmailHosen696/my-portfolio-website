export default function LoadingOn() {
    return (
        <div className="w-full h-screen items-center justify-center flex gap-5 bg-gray-50">
            <div className="w-4 h-4 rounded-full bg-gray-500 animate-ping"></div>
            <div className="w-4 h-4 rounded-full bg-gray-500 delay-700 animate-ping"></div>
            <div className="w-4 h-4 rounded-full bg-gray-500 delay-1000 animate-ping"></div>
        </div>
    )
}
