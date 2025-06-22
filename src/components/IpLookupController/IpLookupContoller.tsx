import {useMemo} from 'react';
import InputRow from '../InputRow/InputRow';
import { useIpLookup } from '../../hooks/useIpLookup.ts';
import './IpLookupController.scss';
import Flag from "../Flag/Flag.tsx";
import Spinner from "../Spinner/Spinner";
import {useTranslation} from "react-i18next";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import Clock from "../Clock/Clock.tsx";

export default function IpLookupController({index, role}:{index?: number, role?: string | undefined}) {
    const {
        value,
        onChange,
        onLookup,
        isLoading,
        error,
        disabled,
        country,
        timezone,
    } = useIpLookup();
    const {t} = useTranslation('ipLookup');


    const status =  useMemo(() => {
        if (isLoading) {
            return <Spinner/>;
        }
        if (country && timezone) {
            return (
                <span className="success">
          <Flag alt={country} countryCode={country} /> <Clock timezone={timezone}  />
        </span>
            );
        }
        return;
    }, [isLoading, country, timezone]);

    return (
        <div className="ip-lookup-controller" role={role}>
            <span className="input-row__index">{index}</span>
            <div className={'input__container'}>
                <InputRow
                    value={value}
                    onChange={onChange}
                    onBlur={onLookup}
                    disabled={disabled}
                    placeholder={t('PLACEHOLDER')}
                    label={t('INPUT_LABEL', { index: index })}
                />
                {error && <ErrorMessage className="input-row__error" message={error} />}
            </div>
            <div className="input-row__status">
                { status }
            </div>

        </div>
    );
}
