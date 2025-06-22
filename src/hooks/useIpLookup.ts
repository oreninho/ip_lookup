import { useState, useCallback } from 'react';
import {fetchIpInfo} from '../services/ipLookup/ipLookup';
import {formatTimeInZone, validateIp} from '../utils/utils.ts';


export type IpInfo = {
    country: string;
    timezone: string;
};

export function useIpLookup(initial = '') {
    const [value, setValue]     = useState(initial);
    const [isLoading, setLoading] = useState(false);
    const [error, setError]     = useState<string | null>(null);
    const [result, setResult]   = useState<{
        country: string;
        time: string;
    } | null>(null);

    const handleChange = useCallback((v: string) => {
        setValue(v);
        setError(null);
        setResult(null);
    }, []);

    const handleLookup = useCallback(async () => {
        const ip = value.trim();
        if (!ip) {
            setError('Please enter an IP address');
            return;
        }
        if (!validateIp(ip)) {
            setError('Invalid IP format, please enter a valid ip of the form xxx.xxx.xxx.xxx');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const { country, timezone } = await fetchIpInfo<IpInfo>(ip);
            setResult({ country,  time: formatTimeInZone({timezone}) });
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to fetch IP info');
        } finally {
            setLoading(false);
        }
    }, [value]);

    return {
        value,
        onChange: handleChange,
        onLookup: handleLookup,
        isLoading,
        error,
        disabled: isLoading,
        ...result
    };
}