import {useState} from "react";

const ComponentUseMemoAndUseCallback = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    return (
        <div>
            <p>Click count1: {counter1}</p>
            <p>Click count2: {counter2}</p>
            <div>
                <button onClick={() => setCounter1(state => state + 1)}>increase1</button>
                <button onClick={() => setCounter1(state => state - 1)}>decrease1</button>
            </div>
            <div>
                <button onClick={() => setCounter2(state => state + 1)}>increase1</button>
                <button onClick={() => setCounter2(state => state - 1)}>decrease1</button>
            </div>
        </div>
    );
};

export default ComponentUseMemoAndUseCallback