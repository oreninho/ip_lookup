

import { rest } from 'msw'

const IPS_TO_INFO = {
    '8.8.8.8': {
        ip: '8.8.8.8',
        country: 'US',
        timezone: 'America/Chicago'
    },
    '1.1.1.1': {
        ip: '1.1.1.1',
        country: 'AU',
        timezone: 'Australia/Sydney'
    },
    '203.0.113.42': {
        ip: '203.0.113.42',
        country: 'JP',
        timezone: 'Asia/Tokyo'
    }
}

export const handlers = [
    // example GET handler
    rest.get('https://ipinfo.io/:ip/json', (req, res, ctx) => {
        console.log('Mocking GET request for IP info');
        const ip = req.params.ip as string;
        const mockData = IPS_TO_INFO[ip] || {
            ip: ip,
            country: 'Unknown',
            timezone: 'Unknown'

        };
        return res(
            ctx.status(200),
            ctx.json(mockData)
        );
    }),
    ]