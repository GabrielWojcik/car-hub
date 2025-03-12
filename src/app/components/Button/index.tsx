import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    backgroundColor,
    borderRadius,
    icon,
    type = 'button',
}) => {
    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        border: 'none',
        color: '#fff',
        backgroundColor: backgroundColor || '#007bff', 
        borderRadius: borderRadius ? `${borderRadius}px` : '4px', 
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        display: 'flex',
        alignItems: 'center', 
        width: '100%',
        justifyContent: 'center',
    };

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
            type={type}
            // onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
            // onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = backgroundColor || '#007bff')}
        >
            {icon && (
                <img
                    src={icon}
                    alt="Button icon"
                    style={{
                        width: '20px',
                        height: '20px',
                        marginRight: '8px', 
                    }}
                />
            )}
            {label}
        </button>
    );
};

export default Button;
