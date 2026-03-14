
interface VideoEmbedProps {
    title: string;
    url: string;
}

const VideoEmbed = ({ title, url }: VideoEmbedProps) => {
    // Extract video ID from common YouTube URL formats
    const getVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getVideoId(url);

    if (!videoId) {
        return (
            <div className="bg-slate-900 rounded-xl flex items-center justify-center h-64 text-slate-500 border border-slate-800">
                Invalid Video URL
            </div>
        );
    }

    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-white/20 glow-hover">
            <div className="relative pb-[56.25%] h-0">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-slate-900 truncate">{title}</h3>
            </div>
        </div>
    );
};

export default VideoEmbed;
