export const IPV4_REGEX =
    /^(?:25[0-5]|2[0-4]\d|1\d\d|\d?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|\d?\d)){3}$/;

export function validateIp(ip: string): boolean {
    return IPV4_REGEX.test(ip);
}

export function formatTimeInZone({date = new Date(), timezone,config= { hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false}}:
                                     { date?: Date; timezone: string }): string
{
    return date.toLocaleTimeString('en-US', {
        timeZone: timezone,
        ...config
    });
}
export async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}