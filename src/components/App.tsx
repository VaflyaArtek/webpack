import {useState} from "react";
import styles from './App.module.scss';

export function App() {
    const [count, setCount] = useState<number>(0)
    const increment = () => setCount(prevState => prevState + 1)

    return (
        <div id='app'>
            <h1>{count}</h1>
            <button className={styles.button} onClick={increment}>Increment</button>
        </div>
    );
}

