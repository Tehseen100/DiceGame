const SelectNumber = ({ error, setError, selectedNum, setSelectedNum }) => {
    const numArr = [1, 2, 3, 4, 5, 6];

    const selectNumberHandler = (value) => {
        setSelectedNum(value)
        setError("")
    }
    return (
        <div className="flex flex-col items-end">
            <p className="text-md w-auto h-4 mb-3 text-red-500">{error}</p>
            <div className="font-Poppins grid grid-cols-6 gap-3">
                {numArr.map((value, idx) => (
                    <div
                        key={idx}
                        onClick={() => selectNumberHandler(value)}
                        className={`box w-12 h-12 flex items-center justify-center border cursor-pointer font-semibold 
              ${value === selectedNum
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-black border-gray-300'
                            }`}
                    >
                        {value}
                    </div>
                ))}
            </div>
            <h4 className="text-black font-semibold text-xl mt-2">Select Number</h4>
        </div>
    );
};

export default SelectNumber;
