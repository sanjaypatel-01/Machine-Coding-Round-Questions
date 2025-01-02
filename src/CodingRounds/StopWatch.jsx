// StopWatch using useRef() - CodeHelp[Youtube]
import React, { useRef, useState } from "react";

function StopWatch() {

    const [time, setTime] = useState(0);

    let timeRef = useRef(null);

    function startTime() {
        timeRef.current = setInterval(() => {
            setTime(time => time+1)
        }, 1000);
    }

    function stopTime() {
        clearInterval(timeRef.current);
        timeRef.current = null;
    }

    function resetTime() {
        stopTime();
        setTime(0);
    }

    return (
        <div>
            <h1>StopWatch: {time}</h1>
            <br />
            <button onClick={startTime}>Start</button>
            <br /> <br />
            <button onClick={stopTime}>Stop</button>
            <br /> <br />
            <button onClick={resetTime}>Reset</button>

        </div>
    )
}

export default StopWatch;
