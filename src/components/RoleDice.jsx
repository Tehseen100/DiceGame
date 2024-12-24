const RoleDice = ({ currentDice, generateRandomNUm }) => {



    return (
        <div>
            <div onClick={() => generateRandomNUm(1, 7)} className='flex flex-col items-center gap-3'>
                <img
                    className='cursor-pointer sm:w-52 w-[140px]'
                    src={`/images/dice_${currentDice}.png`}
                    alt={`dice_${currentDice}`}
                />

                <h4 className='font-semibold font-Poppins text-lg'>Click on Dice to roll</h4>
            </div>
        </div>
    )
}

export default RoleDice