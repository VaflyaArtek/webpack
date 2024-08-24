import {createRoot} from "react-dom/client";
import {App} from "./components/App";

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

createRoot(root).render(<App />)