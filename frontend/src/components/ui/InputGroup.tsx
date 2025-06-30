// src/components/ui/InputGroup.tsx
import React from "react";

type InputGroupProps = {
  label: string;
  id: string;
  type?: string;
  value: string;
  min?: number;
  max?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
};

export const InputGroup: React.FC<InputGroupProps> = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  min,
  max,
  placeholder,
  required = false,
  textarea = false,
  rows = 3,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-800 mb-1">
        {label} {required && <span aria-label="campo obrigatório">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          {...(min !== undefined ? { min } : {})}
          {...(max !== undefined ? { max } : {})}
          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition"
        />
      )}
    </div>
  );
};
