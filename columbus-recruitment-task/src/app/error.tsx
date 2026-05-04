"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <main>
      <h1>Something went wrong</h1>
      <p>Products could not be loaded.</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}