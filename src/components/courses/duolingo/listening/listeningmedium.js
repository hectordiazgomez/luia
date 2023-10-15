import React, { useState, useEffect } from "react";

const questions = [
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1yhQYzrr6-Ydu9l6GjyxW-q7WNZtVdofm",
        "answer": "I am going to learn a lot from this course."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1fdyFCopgbrJ_9h54jh-oqQ_naU3fchtZ",
        "answer": "Are you ready for the party?"
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=175GROjatXl4-Ti4ENwD_GD609A4AT9Oa",
        "answer": "Can you repeat your question?"
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1GKH8IMUQj7T5EhcIh6fY-45xIEeIePo5",
        "answer": "Is this product available online?"
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1zvm15oljrltqkZh07oSPCTTAN8SyumzQ",
        "answer": "The government introduced new property laws recently."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1U95-a1e1y9PnhPY_rRBYEPpG_Pt5qwB5",
        "answer": "There was a heavy snowfall on my way back from work."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1Icjq1SLm-SOgX-LqLwSSCgNa1e0PnBdP",
        "answer": "A leopard is considered the fastest of all other animals."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1wDtMM1O7ZMLKS5CzH5zhN1P9U_KEpd1o",
        "answer": "The newly elected president made his first speech."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=15cX8O5DkFYm4aucEYd6O3tejRpwGPFhi",
        "answer": "The flight departed at 11 o’clock."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1m5bLvaQrdjJ6wxQ88EJPeMwcO-PS_Z-e",
        "answer": "Raindrops fall to Earth when clouds become saturated, or filled, with water droplets."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1YZgCDLSJeKvzKAW8wJlSrLK1KAHVn2eG",
        "answer": "We are going to the movies on the weekend."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=16FSlObZoJIgWy1H6Pjt7TzdZQbtvVt1c",
        "answer": "He will be visiting his grandparents soon after his exams are over."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1NY_BOuW-83tJXh9LxgCgMmbnIrsaA5r8",
        "answer": "Are you curious about how the story ended?"
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1TWLTT9SDvPpRzYQOVEGQy7Fk4V8zO4KR",
        "answer": "Our teacher suggested us some books to read."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1JGjJfZBaS-f-w0oLMl1DqSAurNom5Nby",
        "answer": "You wanted to become a public speaker, didn’t you?"
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1NU4Nh0Qbq-NE0I7NFO8p9sKqfTl6puxF",
        "answer": "Are you familiar with the culture of this city?"
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1813flWT_zQhSr3fzoj5YkYeOZIorBcvw",
        "answer": "We have some great historical monuments in our country."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1WJJOTxX1tENthml1Kaf3Gh1yuXlDUGG3",
        "answer": "Finally, he saved enough money to get a new car."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=13nLXep8Gdi617MIyzBLDi-WLSeemZGbs",
        "answer": "Buying a new house in an urban area is quite expensive."
    },
    {
        "prompt": "https://drive.google.com/uc?export=view&id=1cyn1QXq3DUvp5sF74rn7wC4rIHZ_nNDj",
        "answer": "He is taking out the trash."
    }
]

const Listeningmedium = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    const [audio, setAudio] = useState(new Audio());
    const [timerProgress, setTimerProgress] = useState(0);

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
        setCurrentIndex(currentIndex + 1);
        setUserAnswer("");
        setShowAnswer(false);
        setTimerProgress(0);
    };

    const handleSelectPrompt = (index) => {
        setCurrentIndex(index);
        setUserAnswer("");
        setShowAnswer(false);
        setTimerProgress(0);
    };

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
                    <p className="text-lg font-medium">Type the statement you hear</p>
                </div>
                <div className="pb-6 flex justify-center">
                    <button
                        className="px-5 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600"
                        onClick={() => audio.play()}
                    >
                        Play audio
                    </button>
                </div>
                <div className="flex py-6 justify-center">
                    <textarea
                        className="w-5/6 rounded p-2 outline-none border border-gray-500"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    >

                    </textarea>
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

export default Listeningmedium;
