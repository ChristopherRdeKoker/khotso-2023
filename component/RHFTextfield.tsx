"use client";
import React, { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TextFieldProps = {
  label: string;
  name?: string;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = React.forwardRef(
  ({ label, name, placeholder = "Placeholder", type, ...rest }: TextFieldProps, ref) => {
    return (
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        className={`min-h-12 grow rounded-md border-2 bg-white p-2 text-sm text-gray-dark  border-gray focus:outline-primary-light disabled:bg-gray-200 disabled:text-gray-400`}
        {...rest}
        ref={ref as React.LegacyRef<HTMLInputElement>}
      />
    );
  }
);

export function RHFTextField<T extends object>(props: TextFieldProps & { name: keyof T }) {
  const formMethods = useFormContext();

  return (
    <Controller
      control={formMethods.control}
      name={props.name}
      render={({ field, fieldState }) => {
        return <TextField {...props} {...field} value={field.value || ""} />;
      }}
    />
  );
}
