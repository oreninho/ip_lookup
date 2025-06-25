import { useState, useCallback } from 'react';
import {fetchIpInfo} from '../services/ipLookup/ipLookup';
import {validateIp} from '../utils/utils.ts';
import {useTranslation} from "react-i18next";


export type IpInfo = {
    country: string;
    timezone: string;
    bogon?:boolean
};

export function useIpLookup(initial = '') {
    const {t} = useTranslation()
    const [value, setValue]     = useState(initial);
    const [isLoading, setLoading] = useState(false);
    const [error, setError]     = useState<string | null>(null);
    const [country, setCountry] = useState<string | null>(null);
    const [timezone, setTimezone] = useState<string | null>(null);

    const handleChange = useCallback((v: string) => {
        setValue(v);
        setError(null);
        setCountry(null);
        setTimezone(null);
    }, []);

    const handleLookup = useCallback(async () => {
        const ip = value.trim();
        if (!ip) {
            setError(t('IP_REQUIRED_ERROR_MESSAGE'));
            return;
        }
        if (!validateIp(ip)) {
            setError(t('INVALID_IP_FORMAT_ERROR_MESSAGE'));
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const { country, timezone, bogon } = await fetchIpInfo<IpInfo>(ip);
            if (bogon) {
                setError(t('IP_NOT_ASSIGNED_ERROR_MESSAGE'));
                return;
            }
            setCountry(country);
            setTimezone(timezone);
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
        country,
        timezone,
    };
}