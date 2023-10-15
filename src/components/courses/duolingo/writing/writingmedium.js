import React, { useState, useEffect } from "react";

const questions = [
    {
        "prompt": "Many people believe that schools should be banned from serving fast food to their students. Do you agree or disagree? Provide reasons.",
        "answer": "I agree that children should be banned from eating fast food at school for two important reasons. First, fast food is detrimental to children's health. For instance, fast food is often packed with fat, sugar, salt, and preservatives which makes them extremely unhealthy for children health. In addition, schools should stop from serving fast food it is very expensive. It is a well-known fact that fresh food from a supermarket is significantly cheaper than pre-made fast food. To conclude, for reasons presented above, I believe it is vital that schools stop serving fast food to their students."
    },
    {
        "prompt": "Choose one of the following inventions: the car, the telephone, or the microwave. Explain some of the ways it has changed people’s lives.",
        "answer": "Nowadays, most people agree that the telephone has had a tremendous impact on our lives. First of all, phones have evolved over time, and now almost every person on Earth carries one wherever they go. I still remember when I worked in an office in Osaka and they gave me a company phone. I had to be available all day, everyday. One day I went to the movie theater with my girlfriend at the time and the phone rang right in the middle of the film. I did not want to get fired, so I had to take the call and ruin the movie for everyone in the theater. I felt like a dog on a leash, so I quit. Unfortunately, I have had other jobs where I also had to carry a phone with me at all times. While the car and microwave have impacted our world today, no other invention can quite match the massive effect the telephone has had on our lives."
    }
]


const Writingmedium = () => {
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
                <div className="py-6">
                    <div className="px-6">
                        <p className="text-sm text-gray-500 mb-3">Answer the following prompt in at least 50 words.</p>
                    </div>
                </div>
                <div className="pb-6 px-6 flex justify-center">
                    <p className="text-gray-600">{questions[currentIndex].prompt}</p>
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

export default Writingmedium;
