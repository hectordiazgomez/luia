import React, { useState, useEffect } from "react";

const Listening = () => {
    return (
        <>
            <div className="grid py-12 grid-cols-2 sm:grid-cols-4">
                <div className="flex justify-center">
                    <div className="w-3/4 flex justify-center rounded-lg bg-gray-100 shadow-xl py-12">
                        <p className="text-blue-700 font-semibold">Lectures</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-3/4 flex justify-center rounded-lg bg-gray-100 shadow-xl py-12">
                        <p className="text-blue-700 font-semibold">Practice</p>
                    </div>
                </div>
                <div className="flex mt-8 justify-center">
                    <div className="w-3/4 flex justify-center rounded-lg bg-gray-100 shadow-xl py-12">
                        <p className="text-blue-700 font-semibold">Docs</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listening;