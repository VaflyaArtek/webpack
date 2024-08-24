import {useState} from "react";
import './App.scss'

export function App() {
    const [count, setCount] = useState<number>(0)
    const increment = () => setCount(prevState => prevState + 1)

    return (
        <div id='app'>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

