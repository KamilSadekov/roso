// TextInput.tsx
import React from 'react';

interface TextInputProps {
  label: string;
  error?: string;
  placeholder?: string;
  type: string;
}

const TextInput: React.FC<TextInputProps> = React.forwardRef(
  ({ label, error, ...otherProps }) => {
    return (
      <div className='mb-4'>
        <label className='mb-2 block text-sm font-bold text-gray-700'>
          {label}
        </label>
        <input
          className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${
            error ? 'border-red-500' : ''
          }`}
          {...otherProps}
        />
        {error && <p className='text-xs italic text-red-500'>{error}</p>}
      </div>
    );
  },
);

export default TextInput;
