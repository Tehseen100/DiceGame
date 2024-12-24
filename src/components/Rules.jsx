import React, { useState, useRef, useEffect } from 'react';
import { ImCross } from 'react-icons/im';

const Rules = ({ setHide }) => {
    const modalRef = useRef(null);

    // Close the modal if the user clicks outside of the modal content
    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setHide(true);
        }
    };

    useEffect(() => {
        // Add event listener to document when the component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='absolute bg-[#0000008a] w-full h-[100vh] flex items-center justify-center backdrop-blur-sm'>
            <div
                ref={modalRef}
                className='lg:w-auto md:w-[80%] w-[90%] md:px-8 px-5 py-6 rounded-lg bg-white shadow-lg font-Poppins relative'
            >
                {/* Close button */}
                <ImCross
                    onClick={() => setHide(true)}
                    className='absolute md:top-5 md:right-5 top-3 right-3 cursor-pointer hover:text-gray-600 transition duration-300'
                />
                {/* Modal content */}
                <h2 className='font-semibold sm:text-2xl text-xl mb-3'>How to play the game</h2>
                <ul className='list-decimal pl-5 space-y-2'>
                    <li className='md:text-md text-sm md:leading-7 leading-4 text-justify'>Select any number</li>
                    <li className='md:text-md text-sm md:leading-7 leading-4 text-justify'>Click on the dice image</li>
                    <li className='md:text-md text-sm md:leading-7 leading-4 text-justify'>
                        After clicking on the dice, if the selected number matches the dice number, you will earn points equal to the dice number.
                    </li>
                    <li className='md:text-md text-sm md:leading-7 leading-4 text-justify'>If your guess is wrong, 2 points will be deducted.</li>
                </ul>
            </div>
        </div>
    );
};

export default Rules;
