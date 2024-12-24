import React from 'react'

const Score = ({ score }) => {
    return (
        <div>
            <div id="scoreBox" className='flex flex-col items-center justify-center font-Poppins'>
                <h1 className=' text-5xl font-semibold'>{score}</h1>
                <h2 className='font-semibold text-xl mt-1'>Total Score</h2>
            </div>
        </div>
    )
}

export default Score