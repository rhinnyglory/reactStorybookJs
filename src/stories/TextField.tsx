import React from 'react';
import './TextField.css';

interface TextFieldProps {
  label: string;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  size?: 'small' | 'large';
}

const TextField: React.FC<TextFieldProps> = ({ label, maxLength, minLength, placeholder, size }) => {
  return (
    <div className={`text-field ${size}`}>
      <label>{label}</label>
      <input
        type="text"
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
export type { TextFieldProps };
