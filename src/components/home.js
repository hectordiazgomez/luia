import React, { useState } from "react";
import Courses from "./courses/courses";
import Luia from "./luia/luia";
import Feed from "./feed/feed";
import Profile from "./profile/profile";

const Home = () => {

    const [showCourses, setShowCourses] = useState(true)
    const [showProfile, setShowProfile] = useState(false)
    const [showFeed, setShowFeed] = useState(false)
    const [showLuia, setShowLuia] = useState(false)

    const mostrarCourses = () => {
        setShowCourses(true)
        setShowProfile(false)
        setShowFeed(false)
        setShowLuia(false)
    }

    const mostrarProfile = () => {
        setShowCourses(false)
        setShowProfile(true)
        setShowFeed(false)
        setShowLuia(false)
    }

    const mostrarFeed = () => {
        setShowCourses(false)
        setShowProfile(false)
        setShowFeed(true)
        setShowLuia(false)
    }

    const mostrarLuia = () => {
        setShowCourses(false)
        setShowProfile(false)
        setShowFeed(false)
        setShowLuia(true)
    }

    return (
        <>
            <div id="header" className="flex py-8 sm:py-16 justify-evenly overflow-x-auto">
                <button onClick={mostrarCourses} className="px-4 py-2 mx-2 rounded-full bg-white border-2 border-purple-600 text-purple-600 font-semibold">Courses</button>
                <button onClick={mostrarFeed} className="px-4 py-2 mx-2 rounded-full bg-white border-2 border-purple-600 text-purple-600 font-semibold">Feed</button>
                <button onClick={mostrarLuia} className="px-4 py-2 mx-2 rounded-full bg-white border-2 border-purple-600 text-purple-600 font-semibold">LuIA</button>
                <button onClick={mostrarProfile} className="px-4 py-2 mx-2 rounded-full bg-white border-2 border-purple-600 text-purple-600 font-semibold">Profile</button>
            </div>
            {showCourses && <Courses />}
            {showProfile && <Profile />}
            {showFeed && <Feed />}
            {showLuia && <Luia />}
        </>
    )
}

export default Home;


