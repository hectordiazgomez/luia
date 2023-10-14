import React, { useState, useEffect } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import { PaperAirplaneIcon, ChatIcon, HeartIcon } from "@heroicons/react/solid";

const Feed = () => {
    return (
        <>
            <div className="flex">
               <div className="w-5/6 py-5 flex justify-center">
                    <TextareaAutosize
                        className="w-5/6 border py-2 px-3 rounded-xl outline-none border-blue-500"
                        minRows={1}
                        maxRows={6}
                    />
               </div>
             <div className="flex w-1/6 justify-start">
                    <PaperAirplaneIcon className="w-5 h-auto text-blue-700" /> 
             </div>   
            </div>
            <div className="border-y border-gray-500 ">
                <div className="flex justify-center">
                    <div className="w-4/5 py-5 px-3">
                        <p className="text-blue-700 pt-2font-semibold">Hector Alberto Diaz Gomez</p>
                        <p className="text-gray-500 py-2">@hectordiazgomez</p>
                        <p className="text-gray-500">Welcome to the new version of LuIA, get access to courses and practice material for free.</p>
                    </div>
                </div>
                <div className="flex pb-3 justify-center">
                    <div className="w-4/5 flex justify-center">
                    <div className="w-1/2"></div>
                        <div className="flex justify-evenly w-1/2">
                            <ChatIcon className="w-5 h-auto text-gray-500 hover:text-blue-600" />
                            <HeartIcon className="w-5 h-auto text-gray-500 hover:text-blue-600" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-500 ">
                    <div className="flex justify-center">
                    <div className="w-4/5 py-5 px-3">
                        <p className="text-blue-700 pt-2font-semibold">Keiserlin Angeles Velayarce</p>
                        <p className="text-gray-500 py-2">@jeoncampbell</p>
                        <p className="text-gray-500">Hi there, pls consider taking the following survey so that we can improve LuIA. Link: <a href="https://tinyurl.com/mpfyvas5" className="text-blue-600" target="_blank">https://tinyurl.com/mpfyvas5</a></p>
                    </div>
                    </div>
                <div className="flex pb-3 justify-center">
                    <div className="w-4/5 flex justify-center">
                        <div className="w-1/2"></div>
                        <div className="flex justify-evenly w-1/2">
                            <ChatIcon className="w-5 h-auto text-gray-500 hover:text-blue-600" />
                            <HeartIcon className="w-5 h-auto text-gray-500 hover:text-blue-600" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed;