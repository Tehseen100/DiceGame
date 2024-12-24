import React from 'react'

const StartGame = ({ toggle }) => {
    return (
        <>
            <div className='flex flex-col md:flex-row text-center md:text-start items-center justify-center w-full h-screen '>
                <div id="startGameLeft" className='w-1/2 flex items-center justify-center'>
                    <img className='w-[90%] mobile:w-[60%] mb-2 md:w-[70%]' src="/images/dices.png" alt="" />
                </div>
                <div id="startGameRight" className='w-1/2'>
                    <div className='mt-5 md:mt-0'>
                        <h1 className='font-Poppins text-3xl xl:text-8xl lg:text-6xl md:text-5xl mobile:text-4xl font-bold'>
                            DICE GAME
                        </h1>
                        <div className='w-full md:mt-10 mt-5'>
                            <button
                                onClick={toggle}
                                className='w-[140px] md:w-[200px] h-[37px]  md:h-[42px] bg-black text-white border border-transparent hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-300'
                            >
                                Play Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartGame