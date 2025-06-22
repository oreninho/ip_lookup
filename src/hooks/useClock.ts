import {useEffect, useRef, useState} from "react";
import {formatTimeInZone} from "../utils/utils.ts";

export default function useClock(startTime: Date = new Date() , initialTimezone: string | null = null, interval: number = 1000) {
    const [runningTime, setRunningTime] = useState<Date>(startTime);
    const [timezone, setTimezone] = useState<string | null>(initialTimezone)
    const intervalRef = useRef(0);

    useEffect(() => {
        if (!startTime) return;

        const tick = () => {
            setRunningTime(new Date());
        };
        intervalRef.current = setInterval(tick, interval) as unknown as number;

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [interval]);

    const time =
        runningTime && timezone
            ? formatTimeInZone({ date: runningTime, timezone })
            : null;

    return { time};
}