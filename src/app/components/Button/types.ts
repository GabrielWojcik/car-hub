// types.ts
export interface ButtonProps {
    label: string;
    onClick?: () => void; 
    backgroundColor?: string; 
    borderRadius?: number; 
    icon?: string;
    type?: 'button' | 'submit' | 'reset'; 
    password?: boolean;
}
