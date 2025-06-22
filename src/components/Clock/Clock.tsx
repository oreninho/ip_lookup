import useClock from "../../hooks/useClock.ts";

export default function Clock({timezone, className = ''}: {timezone: string; className?: string}) {
    const {time} = useClock(new Date(), timezone)
    return (
        <span className={className}>
            {time}
        </span>
    );
}