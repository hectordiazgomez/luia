import React, { useState, useEffect } from "react";

const videos = [
    {
        "url": "https://drive.google.com/uc?export=view&id=1cJv-2N0XxX7zJp6tRu-8aiNvNTt2OhdD",
        "title": "The Duolingo English Test Explained"
    },
    {
        "url": "https://drive.google.com/uc?export=view&id=1a1A3TCThC-RkJ5IkChek1pc6zw32oefK",
        "title": "Read and complete questions: Strategies"
    },
    {
        "url": "https://drive.google.com/uc?export=view&id=1_eQLodDPTrSAmWWoAc9pWObsMkQ_sqMu",
        "title": "Pronunciation guide"
    },
    {
        "url": "https://drive.google.com/uc?export=view&id=1Loq9FyNJtLGRE0mI0ti5tTNnP4X9KJL4",
        "title": "How to speak clearly"
    },
    {
        "url": "https://drive.google.com/uc?export=view&id=1sZVsHNbel-ZhlpPRnNlb3AmGma81k9gS",
        "title": "Words and phrases to improve your performances"
    },
    {
        "url": "https://drive.google.com/uc?export=view&id=1SX1Ay9rueWiqxmjREzoWh08LYu_NF2Dr",
        "title": "Expand your examples"
    },
    {
        "url": "https://drive.google.com/uc?export=view&id=1aA0svx-FbaiAs0Pw_cBtJERZrJCLgVrh",
        "title": "Practice at home"
    },
    {
        "url": "https://drive.google.com/uc?export=view&id=1f-ckD1cCYXYAHzR2auSCdlMJ_T_1KSOk",
        "title": "Speaking sample question guide"
    },
    {
        "url": "https://drive.google.com/uc?export=view&id=1x_R63WhxfaWbspUmhb-HHAni3pTKJru0",
        "title": "Writing sample question guide"
    }
]


const Describelectures = () => {
    const [currentVideo, setCurrentVideo] = useState(videos[0].url);

    const handleVideoClick = (url) => {
        setCurrentVideo(url);
    }

    return (
        <div className="">
            <div className="px-6 pt-16">
                <video width="640" height="360" controls className="mb-4">
                    <source src={currentVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="px-6">
                <div className="py-2">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className={`mb-1 border-2 rounded my-2 px-2 border-blue-400 cursor-pointer hover:text-purple-500 ${video.url === currentVideo ? 'bg-blue-500' : ''}`}
                            onClick={() => handleVideoClick(video.url)}
                        >
                            <p className={` ${video.url === currentVideo ? 'text-white' : 'text-gray-500'} font-semibold py-2`}>{video.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Describelectures;