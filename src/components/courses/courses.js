import React, { useState, useEffect } from "react";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import {Link} from "react-router-dom"

const Courses = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-4">
                <div className="flex py-5 justify-center">
                    <Link className="flex justify-center" to="/main"><div className="w-4/5 p-2 border border-blue-700 shadow-xl rounded-lg">
                        <p className="text-gray-700 mx-3 text-lg mt-3 font-semibold">Duolingo English Test full course</p>
                        <p className="py-3 text-gray-700 mx-3">Leverage AI to practice for the Duolingo English Test, get access to thousands of sample questions, lectures, documents, audios and much more FOR FREE to get a perfect score.</p>
                        <a className="text-blue-700 font-semibold my-5 ml-3 underline flex">Go to course <ArrowCircleRightIcon className="w-6 h-auto text-blue-700 mx-3" /></a>
                    </div></Link>
                </div>
                <div className="flex py-5 justify-center">
                    <div className="w-4/5 p-2 border border-blue-700 shadow-xl rounded-lg">
                        <p className="text-gray-700 mx-3 text-lg mt-3 font-semibold">Web development with ReactJS</p>
                        <p className="py-3 text-gray-700 mx-3">Leverage AI to practice for the Duolingo English Test, get access to thousands of sample questions, lectures, documents, audios and much more FOR FREE to get a perfect score.</p>
                        <a className="text-blue-700 font-semibold my-5 ml-3 underline flex">Go to course <ArrowCircleRightIcon className="w-6 h-auto text-blue-700 mx-3" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses;