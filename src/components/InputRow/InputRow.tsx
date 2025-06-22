import {memo} from 'react';
import './InputRow.scss';

export type InputRowProps = {
    value: string;
    disabled?: boolean;
    onChange: (v: string) => void;
    onBlur: () => void;
    error?: string | null;
    result?: { country: string; time: string } | null;
    placeholder?: string;
    role?: string;
};

export default memo(function InputRow({
                                                value,
                                                disabled,
                                                onChange,
                                                onBlur,
                                                placeholder,
                                                label,
                                            }: InputRowProps) {

    return (
        <div className="input-row" >
            <input
                className="input-row__field"
                value={value}
                disabled={disabled}
                onChange={e => onChange(e.target.value)}
                onBlur={onBlur}
                placeholder= {placeholder}
                aria-label={label}
            />
        </div>
    );
});
