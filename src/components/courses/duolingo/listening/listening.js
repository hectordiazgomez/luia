import React, { useState } from "react";
import { Link } from "react-router-dom";

const PracticePopup = ({ onClose }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 flex items-center justify-center">
            <div className="bg-white px-20 flex flex-col rounded-lg p-8">
                <Link to="/listeningeasy"><button className="mb-4 bg-gray-200 w-full font-semibold mb-4 py-2 rounded text-blue-500">Easy</button></Link>
                <Link to="/listeningmedium"><button className="mb-4 bg-gray-200 px-7 font-semibold mb-4 py-2 rounded text-blue-500">Medium</button></Link>
                <Link to="/listeninghard"><button className="mb-4 bg-gray-200 w-full font-semibold py-2 rounded text-blue-500">Hard</button></Link>
                <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">Close</button>
            </div>
        </div>
    );
};


const Listening = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePracticeClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && <PracticePopup onClose={handleClosePopup} />}
            <div className="grid py-12 grid-cols-2 sm:grid-cols-4">
                <div className="">
                    <Link className="flex justify-center" to="/listeninglectures"><div className="w-3/4 flex justify-center rounded-lg bg-gray-100 shadow-xl py-12">
                        <p className="text-blue-700 font-semibold">Lectures</p>
                    </div></Link>
                </div>
                <div className="">
                    <div onClick={handlePracticeClick} className="flex justify-center w-3/4 flex justify-center rounded-lg bg-gray-100 shadow-xl py-12">
                        <p className="text-blue-700 font-semibold">Practice</p>
                    </div>
                </div>
                <div className="">
                    <Link className="flex mt-8 justify-center" to="/">
                        <div className="w-3/4 flex justify-center rounded-lg bg-gray-100 shadow-xl py-12">
                            <p className="text-blue-700 font-semibold">Docs</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Listening;
