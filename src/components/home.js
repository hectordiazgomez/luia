import React, { useState } from "react";
import Courses from "./courses/courses";
import Luia from "./luia/luia";
import Feed from "./feed/feed";
import Profile from "./profile/profile";
import {Link} from "react-router-dom"

const Home = () => {

    const [showCourses, setShowCourses] = useState(true)
    const [showProfile, setShowProfile] = useState(false)
    const [showFeed, setShowFeed] = useState(false)
    const [showLuia, setShowLuia] = useState(false)
    const [activeButton, setActiveButton] = useState('courses')

    const mostrarCourses = () => {
        setShowCourses(true)
        setShowProfile(false)
        setShowFeed(false)
        setShowLuia(false)
        setActiveButton('courses')
    }

    const mostrarProfile = () => {
        setShowCourses(false)
        setShowProfile(true)
        setShowFeed(false)
        setShowLuia(false)
        setActiveButton('profile')
    }

    const mostrarFeed = () => {
        setShowCourses(false)
        setShowProfile(false)
        setShowFeed(true)
        setShowLuia(false)
        setActiveButton('feed')
    }

    const mostrarLuia = () => {
        setShowCourses(false)
        setShowProfile(false)
        setShowFeed(false)
        setShowLuia(true)
        setActiveButton('luia')
    }

    return (
        <>
            <div id="header" className="flex pt-16 pb-8 sm:py-16 justify-evenly overflow-x-auto">
                <button
                    onClick={mostrarCourses}
                    className={`px-4 py-2 mx-2 rounded-full font-semibold ${activeButton === 'courses' ? 'bg-blue-700 border-2 border-blue-700 text-white' : 'bg-white border-2 border-purple-600 text-purple-600'}`}
                >
                    Courses
                </button>
                <button
                    onClick={mostrarFeed}
                    className={`px-4 py-2 mx-2 rounded-full font-semibold ${activeButton === 'feed' ? 'bg-blue-700 border-2 border-blue-700 text-white' : 'bg-white border-2 border-purple-600 text-purple-600'}`}
                >
                    Feed
                </button>
                <button
                    onClick={mostrarLuia}
                    className={`px-4 py-2 mx-2 rounded-full font-semibold ${activeButton === 'luia' ? 'bg-blue-700 border-2 border-blue-700 text-white' : 'bg-white border-2 border-purple-600 text-purple-600'}`}
                >
                    LuIA
                </button>
                <button
                    onClick={mostrarProfile}
                    className={`px-4 py-2 mx-2 rounded-full font-semibold ${activeButton === 'profile' ? 'bg-blue-700 border-2 border-blue-700 text-white' : 'bg-white border-2 border-purple-600 text-purple-600'}`}
                >
                    Profile
                </button>
            </div>
            {showCourses && <Courses />}
            {showProfile && <Profile />}
            {showFeed && <Feed />}
            {showLuia && <Luia />}
        </>
    )
}

export default Home;
