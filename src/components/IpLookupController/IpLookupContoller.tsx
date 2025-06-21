import { useCallback } from 'react';
import InputRow from '../InputRow/InputRow';
import { useIpLookup } from '../../hooks/useIpLookup.ts';
import './IpLookupController.scss';


import Flag from "../Flag/Flag.tsx";
import Spinner from "../Spinner/Spinner";
import {useTranslation} from "react-i18next";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";

export default function IpLookupController({index, role}:{index?: number, role?: string | undefined}) {
    const {
        value,
        onChange,
        onLookup,
        isLoading,
        error,
        result,
        disabled
    } = useIpLookup();
    const {t} = useTranslation('ipLookup');


    const statusNode = useCallback(() => {
        if (isLoading) {
            return <Spinner/>;
        }
        if (result) {
            const { country, time } = result;
            return (
                <span className="success">
          <Flag alt={country} countryCode={country} /> {time}
        </span>
            );
        }
        return null;
    }, [isLoading, error, result]);

    return (
        <div className="ip-lookup-controller" role={role}>
            <span className="input-row__index">{index}</span>
            <div>
                <InputRow
                    value={value}
                    onChange={onChange}
                    onBlur={onLookup}
                    disabled={disabled}
                    placeholder={t('PLACEHOLDER')}
                    label={t('INPUT_LABEL', { index: index })}
                />
                {error && <ErrorMessage message={error} role="alert" aria-live="assertive" />}
            </div>
            <div className="input-row__status">
                { statusNode() }
            </div>
        </div>
    );
}
