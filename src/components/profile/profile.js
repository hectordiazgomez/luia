import React, { useState, useEffect } from "react";
import { GlobeAltIcon, SpeakerphoneIcon, SparklesIcon } from "@heroicons/react/solid";

const Profile = () => {
    return (
        <>
            <div className="py-5 flex justify-center">
                <div className="w-4/5 flex justify-center px-3">
                    <img src="https://i.insider.com/63d93b280a08ae0018a62b4f?width=700" className="w-2/5 h-auto" />
                </div>
            </div>
            <div className="pb-5 flex justify-center">
                <div className="w-4/5 flex justify-center px-3">
                    <p className="text-gray-700 text-xl font-medium">Sam Altman</p>
               </div>
            </div>
            <div className="pb-5 flex justify-center">
                <div className="w-4/5">
                    <a className="flex my-3"><GlobeAltIcon className="w-5 h-auto text-blue-700 mr-3" /><p className="text-gray-900 font-medium">Country: USA</p></a>
                    <a className="flex my-3"><SpeakerphoneIcon className="w-5 h-auto text-blue-700 mr-3" /><p className="text-gray-900 font-medium">Native language: English</p></a>
                    <a className="flex my-3"><SparklesIcon className="w-5 h-auto text-blue-700 mr-3" /><p className="text-gray-900 font-medium">Want to talk about: Pets, education and AI</p></a>
                </div>
            </div> 
        </>
    )
}

export default Profile;