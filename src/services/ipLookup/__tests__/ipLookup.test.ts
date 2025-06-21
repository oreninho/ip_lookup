import {fetchIpInfo} from "../ipLookup.ts";

describe('IP Lookup Service Tests',()=>{
    test('fetchIpInfo should return IP information', async () => {
        const result  = await fetchIpInfo('1.1.1.1', false);
        expect(result).toBeDefined();
        let {ip, timezone, country} = result;
        expect(country).toEqual('AU');
        expect(timezone).toEqual('Australia/Sydney');
        expect(ip).toEqual('1.1.1.1');
    });
    test('fetchIpInfo should throw error for invalid IP', async () => {
        await expect(fetchIpInfo('invalid-ip')).rejects.toThrow('Invalid IP address format');
    });


})