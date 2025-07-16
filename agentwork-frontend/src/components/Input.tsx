import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ className = '', ...rest }) => (
  <input className={`border p-2 rounded ${className}`} {...rest} />
);

export default Input;
