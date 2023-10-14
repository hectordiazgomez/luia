import React, { useState, useEffect } from "react";
import { PencilAltIcon, ChatIcon } from "@heroicons/react/solid";

const Main = () => {
    return (
        <>
            <div className="pt-16 pb-6">
                <p className="px-3 font-semibold text-lg text-blue-700">Improve your skills</p>
            </div>
            <div className="flex px-3 pb-5">
                <div className="border bg-gray-100 p-3 flex w-4/5 border-gray-100 shadow-3xl rounded-lg">
                    <div className="w-1/5 flex justify-center">
                        <PencilAltIcon className="w-5 h-auto text-blue-700" />
                    </div>
                    <div className="w-4/5">
                        <p className="text-gray-600 font-semibold ml-1">Listening</p>
                        <p className="text-gray-500 ml-1 text-sm mt-1">Listen and type</p>
                    </div>
                </div>
            </div>
            <div className="flex px-3 pb-5">
                <div className="border bg-gray-100 p-3 flex w-4/5 border-gray-100 shadow-3xl rounded-lg">
                    <div className="w-1/5 flex justify-center">
                        <ChatIcon className="w-5 h-auto text-blue-700" />
                    </div>
                    <div className="w-4/5">
                        <p className="text-gray-600 font-semibold ml-1">Writing</p>
                        <p className="text-gray-500 ml-1 text-sm mt-1">Answer the prompt</p>
                    </div>
                </div>
            </div>
            <div className="flex px-3 pb-5">
                <div className="border bg-gray-100 p-3 flex w-4/5 border-gray-100 shadow-3xl rounded-lg">
                    <div className="w-1/5 flex justify-center">
                        <PencilAltIcon className="w-5 h-auto text-blue-700" />
                    </div>
                    <div className="w-4/5">
                        <p className="text-gray-600 font-semibold ml-1">Speaking</p>
                        <p className="text-gray-500 ml-1 text-sm mt-1">Record yourself</p>
                    </div>
                </div>
            </div>
            <div className="flex px-3 pb-5">
                <div className="border bg-gray-100 p-3 flex w-4/5 border-gray-100 shadow-3xl rounded-lg">
                    <div className="w-1/5 flex justify-center">
                        <ChatIcon className="w-5 h-auto text-blue-700" />
                    </div>
                    <div className="w-4/5">
                        <p className="text-gray-600 font-semibold ml-1">Interactive reading</p>
                        <p className="text-gray-500 ml-1 text-sm mt-1">Answer questions from texts</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;