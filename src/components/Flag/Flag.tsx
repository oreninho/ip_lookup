import {memo} from 'react';
import './Flag.scss';

interface FlagProps {
    countryCode: string;
    alt: string;
}
export default  memo(function Flag({ countryCode, alt }: FlagProps) {
    return (
        <div className="flag">
            <img src={`/assets/flags/${countryCode.toLowerCase()}.png`} alt={alt} className="flag__image" />
        </div>
    );
})