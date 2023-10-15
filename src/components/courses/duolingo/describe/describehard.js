import React, { useState, useEffect } from "react";

const questions = [
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1qV6uXuQa-rItlEYVQXdZeCcZD0Qvm7xc",
        "answer": "It’s a close-up picture of three different-colored horses standing in a meadow with air flowing smoothly. The horses on the right and left sides are brown in color, and the middle one is black in color. Also, there is a tinge of white hues on their faces. In this picture, it can also be seen waving grass and little white flowers."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1yIrgNDurYqzSBdPV-3Sx0sLiM6t968IU",
        "answer": "This image illustrates a female teacher and a group of female students who have worn school dress in a classroom setup. That educator is sharing information or asking questions to her students in a standing position. The students are sitting on the ground, and the surrounding is lush green. Out of 6, two students are raising their hands to answer something."
    }
]

const Describehard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    const [audio, setAudio] = useState(new Audio());
    const [timerProgress, setTimerProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (questions[currentIndex]) {
            setAudio(new Audio(questions[currentIndex].prompt));
        }
    }, [currentIndex]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimerProgress((prev) => Math.min(prev + 100 / 60, 100));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = () => {
        setShowAnswer(true);
    };

    const handleNext = () => {
        setIsLoading(true)
        setCurrentIndex(currentIndex + 1);
        setUserAnswer("");
        setShowAnswer(false);
        setTimerProgress(0);
        setIsLoading(true);
    };

    const handleSelectPrompt = (index) => {
        setCurrentIndex(index);
        setUserAnswer("");
        setShowAnswer(false);
        setTimerProgress(0);
        setIsLoading(true);
    };

    const wordCount = userAnswer.split(/\s+/).filter((word) => word.length > 0).length;


    return (
        <>
            <div className="">
                <div className="w-11/12 pt-20 flex justify-evenly">
                    <div id="selector" className="w-1/3 flex justify-center">
                        <select onChange={(e) => handleSelectPrompt(e.target.value)}>
                            {questions.map((question, index) => (
                                <option key={index} value={index}>
                                    Prompt {index + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/2 h-2 bg-gray-200" id="bar timer" style={{ overflow: "hidden" }}>
                        <div style={{ width: `${timerProgress}%`, height: "100%", backgroundColor: "blue-600" }}></div>
                    </div>
                </div>
                <div className="flex justify-center py-6">
                    <div className="w-5/6">
                        <p className="text-sm text-gray-500 mb-3">Describe the image in your own words</p>
                    </div>
                </div>
                <div className="pb-6 flex justify-center">
                    {isLoading ? (
                        <div className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
                    ) : (
                        <img
                            className="w-1/2 h-auto"
                            src={questions[currentIndex].prompt}
                            onLoad={() => setIsLoading(false)}
                            onError={(e) => {
                                console.error("Image failed to load:", e);
                                setIsLoading(false);
                            }}
                        />
                    )}
                </div>
                <div className="flex py-6 justify-center">
                    <textarea
                        className="w-5/6 rounded p-2 outline-none border border-gray-500"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex justify-center pb-6">
                    <div className="w-5/6">
                        <p className="text-sm font-medium">Word Count: {wordCount}</p>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <button
                        className="px-5 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button
                        className="px-5 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
                <div className="flex justify-center p-5" id="answer">
                    {showAnswer && questions[currentIndex] && (
                        <p className="text-gray-600 font-semibold">{questions[currentIndex].answer}</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Describehard;
