import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input = memo(({
    className, value, onChange, type = 'text', placeholder, autoFocus, ...otherProps
}: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        onChange?.(value);
        setCaretPosition(value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref?.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(styles.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={styles.placeholder}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={styles.caretWrapper}>
                <input
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={styles.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    ref={ref}
                    {...otherProps}
                />
                {isFocused && <span className={styles.caret} style={{ left: `${caretPosition * 8}px` }} />}
            </div>
        </div>
    );
});
