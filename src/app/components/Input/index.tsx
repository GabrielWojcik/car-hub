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
    console.log('icon', icon.src)
    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '8px 8px 8px 40px', 
        border: `1px solid ${hasError ? 'red' : '#ccc'}`, // Muda a borda para vermelha se houver erro
        borderRadius: borderRadiusValue,
        backgroundColor: backgroundColor || '#fff',
        position: 'relative',
        color: "#09093B"
    };

    return (
        <div>
            <label style={{ display: 'block', marginBottom: '4px' }}>{label}</label>
            <div style={{ position: 'relative' }}>
                {icon && (
                    <Image
                        src={icon.src}
                        alt="Input icon"
                        width={20}
                        height={20}
                        // style={{
                        //     width: '20px',
                        //     height: '20px',
                        //     position: 'absolute',
                        //     left: '10px',
                        //     top: '50%',
                        //     transform: 'translateY(-50%)',
                        //     zIndex: '2000'
                        // }}
                    />
                )}
                <input
                    type="text"
                    placeholder={placeholder}
                    {...register}
                    onChange={onChange}
                    style={inputStyle}
                />
            </div>
        </div>
    );
};

export default Input;
