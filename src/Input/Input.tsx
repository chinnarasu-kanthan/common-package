import React from 'react';
import './input.css';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <input
      className="simple-input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;