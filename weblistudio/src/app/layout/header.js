"use client";
import React from 'react'
import Image from 'next/image';

const Header = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className='fixed text-white w-full h-[14vh] top-0 left-0 z-[999]'>
            <div className='flex items-center justify-between h-full max-w-7xl mx-auto px-6 sm:px-4 lg:px-6 overflow-hidden'>
                {/* logo */}
                <div className='relative flex justify-center items-center cursor-pointer'>
                    <Image
                    className="block leading-none"
                    src="/logo/primaryLogoWhite.svg"
                    alt="Webli Studio Logo"
                    width={150}
                    height={50}
                />
                </div>


                {/* toggle button with animation */}
                <button
                    className='group relative cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className='relative bg-yellow-300 text-black rounded-full flex items-center justify-center gap-2 md:w-[6vw] md:h-[5vh] group-hover:bg-transparent transition-all duration-300 overflow-hidden'>

                        <h3 className='tracking-[0.1vw] group-hover:text-yellow-300 transition-all duration-300'>
                            MENU
                        </h3>

                        {/* ICON — now animates ONLY on click */}
                        <div className='relative w-[1vh] h-[1vh] bg-black rounded-full transition-all duration-300 flex items-center justify-center group-hover:bg-yellow-300 group-hover:w-[5vh] group-hover:h-[5vh]'>

                            {/* line-1 */}
                            <div
                                className={`absolute w-3 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 top-1/2
                                    ${isOpen
                                        ? "bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"
                                        : "bg-black top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    }`}
                            ></div>

                            {/* line-2 */}
                            <div
                                className={`absolute w-3 h-0.5 rounded-full transition-all duration-300
                                    ${isOpen
                                        ? "opacity-0"
                                        : "opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    }`}
                            ></div>

                            {/* line-3 */}
                            <div
                                className={`absolute w-3 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 top-1/2
                                    ${isOpen
                                        ? "bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"
                                        : "bg-black top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    }`}
                            ></div>

                        </div>
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header;
