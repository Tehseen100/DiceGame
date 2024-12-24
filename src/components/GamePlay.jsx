import React, { useEffect, useState } from 'react'
import Score from './Score'
import SelectNumber from './SelectNumber'
import RoleDice from './RoleDice'
import Rules from './Rules'

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNum, setSelectedNum] = useState(null);
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [hide, setHide] = useState(true)

    // Load the saved score from sessionStorage when the component mounts
    useEffect(() => {
        const savedScore = sessionStorage.getItem('Score');
        if (savedScore) {
            setScore(JSON.parse(savedScore));
        }
    }, []);

    const generateRandomNUm = (min, max) => {
        if (!selectedNum) {
            setError("You have not selected any number");
            return;
        }

        const randomNum = Math.floor(Math.random() * (max - min) + min);
        setCurrentDice(randomNum);

        if (selectedNum == randomNum) {
            setScore(prev => {
                const updatedScore = prev + randomNum;
                sessionStorage.setItem('Score', JSON.stringify(updatedScore));
                return updatedScore;
            });
        } else {
            setScore(prev => {
                const updatedScore = prev - 2;
                sessionStorage.setItem('Score', JSON.stringify(updatedScore));
                return updatedScore;
            })
        }

        setSelectedNum(null);
        setError("");

    };

    const resetScore = () => {
        setScore(0)
        sessionStorage.setItem('Score', JSON.stringify(0)); // Reset score in sessionStorage
    }

    return (
        <div className='flex flex-col items-center sm:justify-start justify-center w-full h-screen relative'>

            <div className='flex sm:flex-row flex-col gap-3 w-full items-center justify-between px-[8vw] sm:py-6 pt-0'>
                <Score score={score} />
                <SelectNumber
                    selectedNum={selectedNum}
                    setSelectedNum={setSelectedNum}
                    error={error}
                    setError={setError}
                />
            </div>

            <div className='sm:mt-20 mt-10'>
                <RoleDice
                    currentDice={currentDice}
                    generateRandomNUm={generateRandomNUm}
                />
            </div>

            <div className="btns flex flex-col gap-3 mt-8">
                <button
                    onClick={resetScore}
                    className='w-[200px] md:w-[230px] h-[37px] font-semibold md:h-[42px] hover:bg-black hover:text-white hover:border hover:border-transparent bg-transparent text-black border border-black transition duration-300'>
                    Reset Score
                </button>
                <button
                    onClick={() => setHide(false)}
                    className='w-[200px] md:w-[230px] h-[37px] font-semibold md:h-[42px] bg-black text-white border border-transparent hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-300'>
                    Show Rules
                </button>
            </div>

            {!hide && <Rules setHide={setHide} />}
        </div>
    )
}

export default GamePlay