import { GlobeAltIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React, {useState, useEffect} from "react";

const Luia = () => {
    return(
        <>
            <div className="border-y flex border-gray-300 p-3">
                <div className="w-1/3">
                    <div className="flex justify-center">
                        <img src="https://pbs.twimg.com/profile_images/1267879700204060674/HsVHL42j_400x400.jpg" className="w-3/5 rounded-full h-auto" />
                    </div>
                    <div className="flex mt-3 justify-center">
                        <PlusCircleIcon className="w-6 h-auto text-gray-500 hover:text-blue-700" />
                    </div>
                </div>
                <div className="w-2/3">
                    <p className="font-semibold">Hector Alberto Diaz Gomez</p>
                   <a className="flex items-center">
                   <GlobeAltIcon className="w-4 h-auto text-blue-700 mr-2" />
                        <p className="text-blue-700 font-semibold">Peru</p>
                   </a>  
                    <p className="text-gray-500 text-sm">I want to talk about education and technology, I am applying to colleges in the USA.</p>
                </div>
            </div>
            <div className="border-b flex border-gray-300 p-3">
                <div className="w-1/3">
                    <div className="flex justify-center">
                        <img src="https://media.licdn.com/dms/image/D4D03AQExoPVJi68q-w/profile-displayphoto-shrink_200_200/0/1674498283259?e=1701907200&v=beta&t=gcIGIxT7Az8r_16JsPT9gcHQ-Dk3Htpz68xXaI4J9Q8" className="w-3/5 rounded-full h-auto" />
                    </div>
                    <div className="flex mt-3 justify-center">
                        <PlusCircleIcon className="w-6 h-auto text-gray-500 hover:text-blue-700" />
                    </div>
                </div>
                <div className="w-2/3">
                    <p className="font-semibold">Keiserlin Angeles Velayarce</p>
                    <a className="flex items-center">
                        <GlobeAltIcon className="w-4 h-auto text-blue-700 mr-2" />
                        <p className="text-blue-700 font-semibold">Peru</p>
                    </a>
                    <p className="text-gray-500 text-sm">I want to talk about education and technology, I am applying to colleges in the USA.</p>
                </div>
            </div>
        </>
    )
}

export default Luia;