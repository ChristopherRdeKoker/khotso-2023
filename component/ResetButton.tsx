"use client";
import { useFormContext } from "react-hook-form";

export function ResetButton() {
  const formMethods = useFormContext();

  const handleReset = () => formMethods.reset();
  return (
    <button onClick={handleReset} className="border-[0.1rem] border-black  shadow-md p-2 bg-red-300 rounded-md">
      Reset
    </button>
  );
}
