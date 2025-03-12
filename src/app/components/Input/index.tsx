import React, { useState } from 'react';
import { InputProps } from './types';
import Image from 'next/image';
import IconVisibleOn from "../../assets/inputs/visibility_on.svg";
import IconVisibleOff from "../../assets/inputs/visibility_off.svg";

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    onChange,
    register,
    // icon,
    backgroundColor,
    borderRadius,
    hasError,
    password
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);


    const borderRadiusValue = borderRadius ? `${borderRadius}px` : '8px';

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '8px 8px 8px 8px', 
        border: `1px solid ${hasError ? 'red' : '#ccc'}`, 
        borderRadius: borderRadiusValue,
        backgroundColor: backgroundColor || '#fff',
        position: 'relative',
        color: "#09093B",
        outline: "none"
    };

    function togglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div>
            <label style={{ display: 'block', marginBottom: '4px', color: "#000000" }}>
                {label}
            </label>
            <div style={{ position: 'relative' }}>
                <input
                    type={password && !isPasswordVisible ? "password" : "text"}
                    placeholder={placeholder}
                    {...register}
                    onChange={onChange}
                    style={inputStyle}
                />
                {password && (
                    <button 
                        type="button" 
                        onClick={togglePasswordVisibility} 
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        <Image 
                            src={isPasswordVisible ? IconVisibleOn : IconVisibleOff} 
                            alt="Toggle password visibility" 
                            width={20} 
                            height={20} 
                        />
                    </button>
                )}
                {hasError && (
                    <p className='text-red-600'>Campo obrigatório</p>
                )}
            </div>
        </div>
    );
};

export default Input;
