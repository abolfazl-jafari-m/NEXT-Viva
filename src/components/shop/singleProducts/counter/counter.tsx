import React, {useState} from 'react';

function Counter({initial}: {initial: number}) {
    const [counter, setCounter] = useState(()=>initial);
    const decrement = () => {
        if (counter >= 1) {
            setCounter(counter - 1);
        }
    }
    const increment = () => {
        setCounter(counter + 1);
    }
    return (
        <div
            className={"flex items-center gap-6 rounded-lg border border-darkChocolate px-3 py-2 bg-secondary w-fit max-sm:px-2 max-sm:py-1 max-md:gap-4"}>
            <button className={"text-xl cursor-pointer"} type={"button"} onClick={increment}>+
            </button>
            <span>{counter}</span>
            <input hidden value={counter} name={"quantity"} readOnly={true} />
            <button className={" text-xl cursor-pointer"} type={"button"} onClick={decrement}>-
            </button>
        </div>
    );
}

export default Counter;