"use client";
export function HomeForm() {
  return (
    <div className="flex justify-center flex-col">
      <p>Homepage </p>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
}
