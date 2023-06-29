import {useState} from "react"

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <div
                style={{
                    fontSize: "40px",
                }}
            >
                Count: {counter}
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "20px",
                }}
            >
                <button
                    style={{
                        color: "green",
                        fontSize: "30px",
                        background: "transparent",
                        border: "1px solid black",
                        padding: "10px",
                    }}
                    onClick={() => setCounter((prev) => ++prev)}
                >
                    +
                </button>
                <button
                    style={{
                        color: "blue",
                        fontSize: "30px",
                        background: "green",
                        border: "1px solid black",
                        padding: "10px",
                    }}
                    onClick={() => setCounter((prev) => --prev)}
                >
                    -
                </button>
            </div>
        </div>
    )
}
