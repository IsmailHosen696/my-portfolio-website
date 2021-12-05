export default function Loading() {
    return (
        <div className="w-full h-full items-center justify-center flex gap-5">
            <div className="w-4 h-4 rounded-full bg-gray-50 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-gray-50 delay-700 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-gray-50 delay-1000 animate-bounce"></div>
        </div>
    )
}
