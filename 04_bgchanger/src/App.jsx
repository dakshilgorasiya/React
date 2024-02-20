import { useState } from "react";

function App() {
    const [coolor, setcoolor] = useState("olive");

    return (
        <>
            <div
                className="w-full h-screen duration-200"
                style={{ backgroundColor: coolor }}
            >
                <div className="flex flex-wrap justify-center bottom-12 px-2 py-10">
                    <div className="flex flex-wrap justify-center items-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                        <button
                            className="outline-none- px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "red" }}
                            onClick={() => {
                                return setcoolor("red");
                            }}
                        >
                            Red
                        </button>
                        <button
                            className="outline-none- px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "blue" }}
                            onClick={() => {
                                return setcoolor("blue");
                            }}
                        >
                            Blue
                        </button>
                        <button
                            className="outline-none- px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "orange" }}
                            onClick={() => {
                                return setcoolor("orange");
                            }}
                        >
                            Oranage
                        </button>
                        <button
                            className="outline-none- px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "green" }}
                            onClick={() => {
                                return setcoolor("green");
                            }}
                        >
                            Green
                        </button>
                        <button
                            className="outline-none- px-4 py-1 rounded-full text-white shadow-lg"
                            style={{ backgroundColor: "yellow" }}
                            onClick={() => {
                                return setcoolor("yellow");
                            }}
                        >
                            Yellow
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
