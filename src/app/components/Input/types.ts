export interface InputProps {
    label: string;
    placeholder: string;
    icon?: string; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;    
    backgroundColor?: string;
    borderRadius?: number;
    register?: any; 
    hasError?: boolean;
}