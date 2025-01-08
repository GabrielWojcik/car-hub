import React from 'react';
import { InputProps } from './types';
import Image from 'next/image';

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    onChange,
    register,
    icon,
    backgroundColor,
    borderRadius,
    hasError,
}) => {
    const borderRadiusValue = borderRadius ? `${borderRadius}px` : '8px';

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '8px 8px 8px 40px', 
        border: `1px solid ${hasError ? 'red' : '#ccc'}`, 
        borderRadius: borderRadiusValue,
        backgroundColor: backgroundColor || '#fff',
        position: 'relative',
        color: "#09093B"
    };

    return (
        <div>
            <label style={{ display: 'block', marginBottom: '4px', color: "#000000" }}>{label}</label>
            <div style={{ position: 'relative' }}>
                {icon && (
                    <Image
                        src={icon}
                        alt="Input icon"
                        width={20}
                        height={20}
                    />
                )}
                <input
                    type="text"
                    placeholder={placeholder}
                    {...register}
                    onChange={onChange}
                    style={inputStyle}
                />
                {
                    hasError && (
                        <p className='text-red-600'>Campo obrigatório</p>
                    )
                }
            </div>
        </div>
    );
};

export default Input;
