import React, { useState, useEffect } from "react";
import { PencilAltIcon, ChatIcon, PlayIcon, SpeakerphoneIcon, BookOpenIcon, LightningBoltIcon, PhotographIcon, SparklesIcon } from "@heroicons/react/solid";
import {Link} from "react-router-dom"

const Main = () => {
    return (
        <>
            <div className="pt-16 pb-6">
                <p className="px-3 font-semibold text-lg text-blue-700">Improve your skills</p>
            </div>
            <div className="">
                <Link to="/lectures" className="flex px-3 pb-5"><div className="border bg-gray-100 p-3 flex w-4/5 border-gray-100 shadow-3xl rounded-lg">
                    <div className="w-1/5 flex justify-center">
                        <PlayIcon className="w-5 h-auto text-blue-700" />
                    </div>
                    <div className="w-4/5">
                        <p className="text-gray-600 font-semibold ml-1">Lectures</p>
                        <p className="text-gray-500 ml-1 text-sm mt-1">Lectures on the different sections of the DET</p>
                    </div>
                </div></Link>
            </div>
            <div className="">
                <Link className="flex px-3 pb-5" to="/listening"><div className="border bg-gray-100 p-3 flex w-4/5 border-gray-100 shadow-3xl rounded-lg">
                    <div className="w-1/5 flex justify-center">
                        <SpeakerphoneIcon className="w-5 h-auto text-blue-700" />
                    </div>
                    <div className="w-4/5">
                        <p className="text-gray-600 font-semibold ml-1">Listening</p>
                        <p className="text-gray-500 ml-1 text-sm mt-1">Listen and type</p>
                    </div>
                </div></Link>
            </div>
            <div className="">
                <Link className="flex px-3 pb-5" to="/describe"><div className="border bg-gray-100 p-3 flex w-4/5 border-gray-100 shadow-3xl rounded-lg">
                    <div className="w-1/5 flex justify-center">
                        <PhotographIcon className="w-5 h-auto text-blue-700" />
                    </div>
                    <div className="w-4/5">
                        <p className="text-gray-600 font-semibold ml-1">Writing</p>
                        <p className="text-gray-500 ml-1 text-sm mt-1">Describe an image</p>
                    </div>
                </div></Link>
            </div>
            <div className="">
                <Link to="/writing" className="flex px-3 pb-5"><div className="border bg-gray-100 p-3 flex w-4/5 border-gray-100 shadow-3xl rounded-lg">
                    <div className="w-1/5 flex justify-center">
                        <PencilAltIcon className="w-5 h-auto text-blue-700" />
                    </div>
                    <div className="w-4/5">
                        <p className="text-gray-600 font-semibold ml-1">Writing</p>
                        <p className="text-gray-500 ml-1 text-sm mt-1">Answer the prompt</p>
                    </div>
                </div></Link>
            </div>
            <div className="">
                <Link to="/vocabulary" className="flex px-3 pb-5"><div className="border bg-gray-100 p-3 flex w-4/5 border-gray-100 shadow-3xl rounded-lg">
                    <div className="w-1/5 flex justify-center">
                        <BookOpenIcon className="w-5 h-auto text-blue-700" />
                    </div>
                    <div className="w-4/5">
                        <p className="text-gray-600 font-semibold ml-1">Vocabulary</p>
                        <p className="text-gray-500 ml-1 text-sm mt-1">Record yourself</p>
                    </div>
                </div></Link>
            </div>
            <div className="">
                <Link to="/luia" className="flex px-3 pb-5"><div className="border bg-gray-100 p-3 flex w-4/5 border-gray-100 shadow-3xl rounded-lg">
                    <div className="w-1/5 flex justify-center">
                        <SparklesIcon className="w-5 h-auto text-blue-700" />
                    </div>
                    <div className="w-4/5">
                        <p className="text-gray-600 font-semibold ml-1">LuIA</p>
                        <p className="text-gray-500 ml-1 text-sm mt-1">AI generated promtps</p>
                    </div>
                </div></Link>
            </div>
            <div className="">
                <Link to="/interactive" className="flex px-3 pb-5"><div className="border bg-gray-100 p-3 flex w-4/5 border-gray-100 shadow-3xl rounded-lg">
                    <div className="w-1/5 flex justify-center">
                        <LightningBoltIcon className="w-5 h-auto text-blue-700" />
                    </div>
                    <div className="w-4/5">
                        <p className="text-gray-600 font-semibold ml-1">Interactive reading</p>
                        <p className="text-gray-500 ml-1 text-sm mt-1">Answer questions from texts</p>
                    </div>
                </div></Link>
            </div>
        </>
    )
}

export default Main;