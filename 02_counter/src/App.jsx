import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    // const [counter, setCounter] = useState(15)
    const [counter, setCounter] = useState(0);

    const addValue = () => {
        // counter = counter + 1;
        setCounter(counter + 1);
        console.log(counter);
    };

    const removeValue = () => {
        // counter = counter - 1;
        setCounter(counter - 1);
        console.log(counter);
    };

    return (
        <>
            <h1>Dakshil</h1>
            <h2>Counter value : {counter}</h2>

            <button onClick={addValue}>Add value</button>
            <br />
            <button onClick={removeValue}>Remove value</button>
        </>
    );
}

export default App;
