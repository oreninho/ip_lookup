import {cacheService} from "../cache/cacheService.ts";
import {httpConnection} from "../connection/connectionService.ts";
import {sleep, validateIp} from "../../utils/utils.ts";


export async function fetchIpInfo<T>(ip: string, useCache= true): Promise<T> {
    if (!validateIp(ip)) {
        throw new Error(`Invalid IP address format: ${ip}`);
    }
    const key = `ipInfo_${ip}`;
    if (useCache){
        const cachedData = await cacheService.get<T>(key);
        if (cachedData) {
            return cachedData;
        }
    }
  const url = `https://ipinfo.io/${ip}/json`;

    try {
        const result =  await httpConnection.get<T>(url);
        if (useCache) {
            await cacheService.set<T>(key, result);
        }
        return result;
    } catch (error) {
        console.error(`Error fetching IP info for ${ip}:`, error);
        throw error;
    }


}