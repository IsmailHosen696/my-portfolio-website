import '../../styles/animation.css'
export default function LoadingOn() {
    return (
        <div className="w-full items-center h-screen bg-gray-100 justify-center flex gap-1">
            <div className="animate-loop "></div>
            <div className="animate-loop"></div>
            <div className="animate-loop"></div>
        </div>
    )
}
