import { useEffect, useRef, useState } from 'react';

export function useTypeFx (
    typeText,
    keyStrokeMs,
) {
    const [position, setPosition] = useState(0);
    const positionReference = useRef(0);
    const [idInterval, setIdInterval] = useState(null);

    useEffect(() => {
        if (idInterval) {
            console.log("interval");
            clearInterval(idInterval);
        }
        const newIdInterval = setInterval(() => {
            if (positionReference.current >= typeText.length) {
                positionReference.current = 0;
                setPosition(0);
                clearInterval(newIdInterval);
                setIdInterval(null);
            } else {
                setPosition((value) => value + 1);
                positionReference.current = positionReference.current + 1;
            }
        }, keyStrokeMs);
        setIdInterval(newIdInterval);
        return () => {
            clearInterval(newIdInterval);
        }
    }, [keyStrokeMs, typeText, position]);
    return typeText.substring(0, position);
}

export default useTypeFx;